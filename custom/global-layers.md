---
title: 全局图层
---

<<<<<<< HEAD
# 全局图层 {#global-layers}

> 自 v0.17 起可用
=======
Global layers allow you to have custom components that **persist** across slides. This could be useful for having footers, cross-slide animations, global effects, etc.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

全局图层允许你拥有**持续存在**的跨幻灯片自定义组件。这对于有页脚、跨幻灯片动画、全局特效等来说可能很有用。

<<<<<<< HEAD
Slidev 为这种用法提供了三种图层，在你的项目根目录下创建 `global-top.vue` 、 `global-bottom.vue` 或 `custom-nav-controls.vue` 文件，它们会被自动识别。

图层关系：
=======
There are also layers for **each** slide: `layouts/slide-top.vue` and `layouts/slide-bottom.vue`. The usage is similar to the global layers, but they are applied to every slide, so there may be more than one instance of them.

::: tip
When exporting, the `--per-slide` option should be used to ensure the global layers are applied to each slide correctly.
:::

## Layers relationship

At z-axis, from top to bottom:

- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) - single instance
- Slide Top (`slide-top.vue`) - instance per slide
- Slide Content
- Slide Bottom (`slide-bottom.vue`) - instance per slide
- Global Bottom (`global-bottom.vue`) - single instance
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

- 全局顶层 (`global-top.vue`)
- 幻灯片
- 全局底层 (`global-bottom.vue`)
- 导航控件
  - 自定义导航控件 (`custom-nav-controls.vue`)

## 示例 {#example}

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Your Name</footer>
</template>
```

文字 `Your Name` 将出现在你所有幻灯片中。

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

`Next` 按钮会出现在导航栏中。

如需有条件地启用它，你可以用 [Vue 全局上下文](/custom/vue-context)。

```html
<!-- 在第四页时隐藏页脚 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- "cover" 布局的情况下隐藏页脚 -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- 一个显示页数的页脚示例 -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- 在演讲者模式隐藏按钮 -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
