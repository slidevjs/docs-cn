---
relates:
  - Nuxt's MDC Syntax: https://content.nuxt.com/usage/markdown
  - markdown-it-mdc: https://github.com/antfu/markdown-it-mdc
since: v0.43.0
tags: [语法, 样式]
description: |
  一种强大的语法，用组件和样式增强你的 markdown 内容。
---

# MDC Syntax

Slidev supports optional [MDC (Markdown Components) Syntax](https://content.nuxt.com/usage/markdown) powered by [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc).

You can enable it by adding `mdc: true` to the frontmatter of your markdown file.

```mdc
---
mdc: true
---

This is a [red text]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
The **default** slot
::
```

Learn more about [MDC Syntax](https://content.nuxt.com/guide/writing/mdc).
