# Vue Global Context

Slidev injected a [global Vue context](https://v3.vuejs.org/api/application-config.html#globalproperties) `$slidev` for advanced conditions or navigation controls.

## Usage

You can access it anywhere in your markdown and Vue template, with the ["Mustache" syntax](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

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

## Properties

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

A reactive object holding the properties and controls of the slide navigation. For examples:

```js
$slidev.nav.next() // go next step

$slidev.nav.nextSlide() // go next slide (skip v-clicks)

$slidev.nav.go(10) // go slide #10
```

```js
$slidev.nav.currentPage // current slide number

$slidev.nav.currentLayout // current layout id
```

For more properties available, refer to the [`SlidevContextNav` interface](https://github.com/slidevjs/slidev/blob/main/packages/client/composables/useNav.ts).

> 备注: `$slidev.nav.clicks` 是一个全局状态而 `$clicks` 对每个页面是独立的。我们更推荐 **用 `$clicks` 替换 `$slidev.nav.clicks`** 来避免页面切换时触发点击次数变化。

### `$slidev.configs`

A reactive object holding the parsed [configurations in the first frontmatter](/custom/#frontmatter-configures) of your `slides.md`. For example:

```yaml
---
title: My First Slidev!
---
```

```
{{ $slidev.configs.title }} // 'My First Slidev!'
```

### `$slidev.themeConfigs`

A reactive object holding the parsed theme configurations.

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
