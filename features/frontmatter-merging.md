---
depends:
  - guide/syntax#importing-slides
  - features/importing-slides
tags: [语法]
description: |
  从不同的 Markdown 文件中合并 frontmatter。
---

# 合并 Frontmatter

你可以为主入口点和外部 Markdown 页面提供 frontmatter。如果其中有相同的 key，**主入口点的 key 拥有更高的优先级**。例如：

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

# 封面

这是一个封面页
```

:::

其效果最终与下述页面相同：
```md
---
layout: cover
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---

# 封面

这是一个封面页
```
