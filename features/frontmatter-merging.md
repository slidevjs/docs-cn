---
depends:
  - guide/syntax#importing-slides
  - features/importing-slides
tags: [语法]
description: |
  从不同 markdown 文件中合并 frontmatter。
---

# Frontmatter Merging

You can provide frontmatter instructions from both your main entry and external markdown pages. If there are duplicate keys in them, the ones from the **main entry have the higher priority**. For example:

::: code-group

```md [./slides.md]
---
src: ./cover.md
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---
```

```md [./cover.md]
---
layout: cover
background: https://sli.dev/foo.png // [!code highlight]
---

# Cover

Cover Page
```

:::

They will end up being equivalent to the following page:

```md
---
layout: cover
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---

# Cover

Cover Page
```
