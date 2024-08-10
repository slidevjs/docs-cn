---
relates:
  - Vue 的 <style scoped>: https://vue-loader.vuejs.org/guide/scoped-css.html
  - UnoCSS directives: https://unocss.dev/transformers/directives
tags: [样式, 语法]
description: |
  定义仅在当前幻灯片生效的样式。
---

# 幻灯片专属样式

你可以在 markdown 中使用 `<style>` 标签，仅为**当前幻灯片**定义样式。


```md
# 这是红色的

<style>
h1 {
  color: red;
}
</style>

---

# 其他幻灯片不会受到影响
```

markdown中的 `<style>` 标签始终是 [scope](https://cn.vuejs.org/api/sfc-css-features.html#scoped-css) 的。因此，带有子组合器（`.a>.b`）的选择器本身是不可用的；请参阅上一个链接。要具有全局样式，请查看[自定义部分](/custom/directory-structure#style)。

在 [UnoCSS](/custom/config-unocss) 驱动下, 你可以直接适用嵌套的 CSS 以及 [指令](https://unocss.dev/transformers/directives):

```md
# Slidev

> Hello **world**

<style>
blockquote {
  strong {
    --uno: 'text-teal-500 dark:text-teal-400';
  }
}
</style>
```
