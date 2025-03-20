---
relates:
  - Nuxt 的 MDC 语法指南: https://content.nuxt.com/docs/files/markdown#mdc-syntax
  - markdown-it-mdc: https://github.com/antfu/markdown-it-mdc
since: v0.43.0
tags: [语法, 样式]
description: |
  一种强大的语法，用组件和样式增强 markdown 内容。
---

# MDC 语法

Slidev 支持可选的 [MDC (Markdown Components) 语法](https://content.nuxt.com/docs/files/markdown#mdc-syntax)，由 [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc) 驱动。

你可以通过在 markdown 文件的 frontmatter 中添加 `mdc:true` 来启用它。

```mdc
---
mdc: true
---

这是一个 [红色的文本]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
**default** 插槽的内容
::
```

请参阅 [MDC Syntax](https://content.nuxt.com/docs/files/markdown#mdc-syntax) 了解更多。
