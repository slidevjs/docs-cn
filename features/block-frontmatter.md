---
depends:
  - guide/syntax
relates:
  - features/prettier-plugin
tags: [语法]
description: |
  使用单独的 YAML 代码块作为 frontmatter
---

# 代码块形式的 frontmatter

定义每个 slide 的 frontmatter 的默认方法很简洁，但是可能缺乏高亮显示与格式化的支持。要解决这个问题，你可以在 slide（单页幻灯片） 内容的开头用一个 YAML 代码块作为它的 frontmatter：

````md
---
theme: default
---

# Slide 1

---

```yaml
layout: quote
```

# Slide 2

---

# Slide 3
````

::: warning 关于 headmatter 是什么

在 Slidev 中，headmatter 正是 Markdown 文件中通常所说的 “frontmatter”，大多数 markdown 编辑器和格式化工具都直接支持它。需要注意的是，不能用本页描述的 YAML 块来表示 headmatter。

:::
