# 全局上下文

Slidev 注入了一些全局上下文。它们可用于高级导航控制。

## 直接使用 {#direct-usage}

你可以直接在你的幻灯片或组件中访问它们：

```md
<!-- slides.md -->

# Page 1

当前正在查看第 {{ $nav.currentPage }} 页
```

```vue
<!-- Foo.vue -->

<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$nav.next">
    下一步动画
  </button>
  <button @click="$nav.nextSlide">
    下一张幻灯片
  </button>
</template>
```

## 通过 Composable 使用 {#composable-usage}

> 自 v0.48.0 起可用

如果你想以编程方式获取上下文（也是类型安全的），你可以从 `@slidev/client` 导入 composable：

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
> 之前，你可能看到过导入嵌套模块的用法，例如 `import { isDark } from '@slidev/client/logic/dark.ts'`，这是**不推荐**的，因为它们是内部实现细节，可能会在未来更改。如果可能的话，请始终使用 `@slidev/client` 中的公共 API。

::: warning

当使用 `useSlideContext` 时，将禁用自动注入 `$slidev`。你需要手动将 `$slidev` 对象传递给 `useSlideContext` 函数。

:::

<SeeAlso :links="['features/slide-hook']" />

## 注入的属性 {#properties}

### `$slidev` {#slidev}

全局上下文对象。

### `$frontmatter` {#frontmatter}

当前幻灯片的 frontmatter 对象。注意这对于幻灯片之外的组件（如 <LinkInline link="features/global-layers" />）是空的。

### `$clicks` {#clicks}

该属性表示当前幻灯片上的点击次数。可以用于根据点击次数显示不同的内容：

```html
<div v-if="$clicks > 3">Content</div>
```

参阅 <LinkInline link="guide/animations" /> 了解更多关于点击动画的信息。

### `$nav` {#nav}

一个响应式对象，包含幻灯片导航的属性和控制：

```js
$nav.next() // 下一步动画
$nav.nextSlide() // 下一张幻灯片，跳过动画
$nav.go(10) // 跳转到第 10 页

$nav.currentPage // 当前页码
$nav.currentLayout // 当前幻灯片的布局
```

请参阅 [`SlidevContextNav` interface](https://github.com/slidevjs/slidev/blob/main/packages/client/composables/useNav.ts) 以了解更多细节。

### `$page` {#page}

`$page` 保存当前页的页码，从 1 开始。

```md
这是第 {{ $page }} 页

正在查看该页吗? {{ $page === $nav.currentPage }}
```

> [!Note]
> `$nav.clicks` 是全局导航状态，而 `$clicks` 是每张幻灯片的自己的点击次数。

### `$renderContext` {#render-context}

`$renderContext` 保存当前的渲染上下文，可以是 `slide`, `overview`, `presenter` 或 `previewNext`。

```md
<div v-if="['slide', 'presenter'].includes($renderContext)">
  该内容仅在主幻灯片视图中呈现
</div>
```

你还可以使用 [`<RenderWhen>` 组件](../builtin/components#renderwhen)。

### `$slidev.configs` {#configs}

一个响应式对象，保存幻灯片项目的配置。例如：

```md
---
title: My First Slidev!
---

# 第一页

---

# 其他任何页面

{{ $slidev.configs.title }} // 'My First Slidev!'
```

### `$slidev.themeConfigs` {#theme-configs}

一个响应式对象，保存解析后的主题配置：

```yaml
---
title: My First Slidev!
themeConfig:
  primary: '#213435'
---
```

然后，主题可以像这样访问主要颜色：

```md
{{ $slidev.themeConfigs.primary }} // '#213435'
```

## 类型支持 {#types}

可以从 `@slidev/types` 导入 `TocItem` 等类型信息：

```vue
<script setup>
import type { TocItem } from '@slidev/types'

function tocFunc(tree: TocItem[]): TocItem[] {
  // ...
}
</script>
```
