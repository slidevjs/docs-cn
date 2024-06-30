---
title: Vue 全局上下文
---

# Vue 全局上下文 {#vue-global-context}

Slidev 注入了一个 [全局的 Vue 上下文](https://v3.vuejs.org/api/application-config.html#globalproperties) `$slidev`，它用于高级的条件判断或导航控制。

## 用法 {#usage}

你可以在你的 markdown 文件以及 Vue 模板的任何位置使用 ["Mustache" 语法](https://v3.vuejs.org/guide/template-syntax.html#interpolations) 访问它。

```md
<!-- slides.md -->

# Page 1

Current page is: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Next Page</button>
</template>
```

## 属性 {#properties}

### `$clicks`

`$clicks` hold a number of clicks on the current slide. Can be used conditionally to show different content on clicks.

```html
<div v-if="$clicks > 3">Content</div>
```

### `$page`

`$page` holds the number of the current page, 1-indexed.

```md
Page: {{ $page }}

Is current page active: {{ $page === $slidev.nav.currentPage }}
```

### `$renderContext`

`$renderContext` holds the current render context, can be `slide`, `overview`, `presenter` or `previewNext`

```md
<div v-if="$renderContext === 'slide'">
  This content will only be rendered in slides view
</div>
```

### `$slidev.nav`

一个响应式对象，它拥有幻灯片导航的属性以及控制权。例如：

```js
$slidev.nav.next() // 执行下一步

$slidev.nav.nextSlide() // 跳转下一张幻灯片 (忽略 v-clicks)

$slidev.nav.go(10) // 去到幻灯片的第 10 页
```

```js
$slidev.nav.currentPage // 获取当前幻灯片的页数

$slidev.nav.currentLayout // current layout id
```

欲了解更多可用属性，请参阅 [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts) 的 exports。

> Note: `$slidev.nav.clicks` is a global state while `$clicks` is local to each slide. It's recommended to **use `$clicks` over `$slidev.nav.clicks`** to avoid clicks changed been triggered on page transitions.

### `$slidev.configs`

一个响应式对象，它存储着你 `slides.md` 中解析后的 [第一个 frontmatter 中的配置](/custom/#frontmatter-configures)。例如：

```yaml
---
title: My First Slidev!
---
```

```
{{ $slidev.configs.title }} // 'My First Slidev!'
```

### `$slidev.themeConfigs` {#slidev-themeconfigs}

一个响应式对象，它存储着解析后的主题配置。

```yaml
---
title: My First Slidev!
themeConfig:
  primary: # 213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Available since v0.43.0

A shorthand of `$slidev.nav`.

## Composable Usage

> Available since v0.48.0

### Context

If you want to get the context programmatically (also type-safely), you can import composables from `@slidev/client`:

```vue
<script setup>
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { currentPage, currentLayout, currentSlideRoute } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()
onSlideEnter(() => { /* ... */ })
onSlideLeave(() => { /* ... */ })
// ...
</script>
```

> [!NOTE]
> Previously, you might see the usage of importing nested modules like `import { isDark } from '@slidev/client/logic/dark.ts'`, this is **NOT RECOMMENDED** as they are internal implementation details and might be broken in the future. Try always to use the public API from `@slidev/client` whenever possible.

### Types

If you want to get a type programmatically, you can import types like `TocItem` from `@slidev/types`:

```vue
<script setup>
import type { TocItem } from '@slidev/types'

function tocFunc(tree: TocItem[]): TocItem[] {
  // ...
}
</script>
```
