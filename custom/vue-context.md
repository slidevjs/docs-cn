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

`$clicks` 储存着当前页面的点击次数。被用于条件判断，以显示不同内容。

```html
<div v-if="$clicks > 3">要显示的内容</div>
```

### `$page`

`$page` 储存着当前页面的页码，将从 1 开始。

```md
页码: {{ $page }}

当前页面是否活跃: {{ $page === $slidev.nav.currentPage }}
```

### `$renderContext`

`$renderContext` 储存着当前页面的渲染上下文, 可以选择 `slide`, `overview`, `presenter` 或 `previewNext`。

```md
<div v-if="$renderContext === 'slide'">
  以下内容仅会在幻灯片放映模式下显示
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

> 备注: `$slidev.nav.clicks` 是一个全局状态而 `$clicks` 对每个页面是独立的。我们更推荐 **用 `$clicks` 替换 `$slidev.nav.clicks`** 来避免页面切换时触发点击次数变化。

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

> 自 v0.43.0 起可用

`$slidev.nav` 的简写
