---
tags: [导航, 布局]
description: |
  为所有幻灯片创建图层。
---

# 全局图层

全局图层允许你拥有**持续存在**的跨幻灯片自定义组件。这对于有页脚、跨幻灯片动画、全局特效等来说可能很有用。

Slidev 为这种用法提供了三种图层，在你的项目根目录下创建 `global-top.vue` 、 `global-bottom.vue` 或 `custom-nav-controls.vue` 文件，它们会被自动识别。

**每张**幻灯片也有图层：`layouts/slide-top.vue`和`layout/slide-bottom.vue`。其用法类似于全局图层，但它们应用于每张幻灯片，因此可能有多个实例。


::: tip
导出时，应使用 `--per slide` 选项以确保全局层正确应用于每张幻灯片。
:::

## 图层关系

在 z 轴上，从上到下排序：

- 导航栏
  - 自定义导航栏控制 (`custom-nav-controls.vue`)
- 全局顶层 (`global-top.vue`) - 单个实例
- 幻灯片顶层 (`slide-top.vue`) - 每页间独立实例
- 幻灯片内容
- 幻灯片底层 (`slide-bottom.vue`) - 每页间独立实例
- 全局底层 (`global-bottom.vue`) - 单个实例

## 示例

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">你的名字</footer>
</template>
```

文本 `你的名字` 将出现在你的所有幻灯片中。

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

`Next` 按钮会出现在导航栏中。

如需有条件地启用它，你可以用 <LinkInline link="guide/global-context" />。

```html
<!-- 在第四页时隐藏页脚 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    你的名字
  </footer>
</template>
```

```html
<!-- h"cover" 布局的情况下隐藏页脚 -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    你的名字
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
