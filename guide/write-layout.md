# 编写布局

> 请先阅读 <LinkInline link="guide/layout" />。

只需在 `layouts` 目录中创建一个新的 Vue 文件即可创建自定义布局：

```bash
your-slidev/
  ├── ...
  ├── slides.md
  └── layouts/
      ├── ...
      └── MyLayout.vue
```

布局是 Vue 组件，因此你可以在其中使用 Vue 的所有功能。

在布局组件中，使用 `<slot/>`（默认插槽）放置幻灯片内容：

```vue
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

你也可以使用 [具名插槽](https://vuejs.org/guide/components/slots.html) 来创建更复杂的布局：

```vue
<!-- split.vue -->
<template>
  <div class="slidev-layout split">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>
```

并借助 <LinkInline link="features/slot-sugar" /> 使用它。
