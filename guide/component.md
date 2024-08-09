# 组件指南

Slidev 的一个最强大的功能是可以直接在幻灯片中使用 Vue 组件。这使得你可以轻松地创建交互式和动态内容。

## 使用组件 {#use}

基于 [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components)，Slidev 允许你在幻灯片中直接使用 Vue 组件，而无需手动导入：

```md
# My Slide

<MyComponent :count="4"/>
```

该组件会从以下地方获取：

- 内置组件。参见 [内置组件](../builtin/components)。
- 由主题和插件提供。参见 <LinkInline link="guide/theme-addon" />。
- `components` 目录中的自定义组件。参见下一节。

## 编写组件 {#write}

要创建一个自定义组件，只需在 `components` 目录中创建一个新的 Vue 文件：

```bash
your-slidev/
  ├── ...
  ├── slides.md
  └── components/
      ├── ...
      └── MyComponent.vue
```

参阅 [Vue 文档](https://cn.vuejs.org/guide/essentials/component-basics.html) 了解如何编写 Vue 组件。

也可以参见 <LinkInline link="guide/write-addon" /> 来重用和分享你的组件。
