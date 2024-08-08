---
relates:
  - features/frontmatter-merging
tags: [语法]
description: |
  将你的幻灯片分割成多个文件来获得更好的可复用性和组织性。
---

# 引入幻灯片

你可以将`slides.md`拆分为多个文件，以提高可复用性和组织性。为此，你可以使用 frontmatter 中的 `src` 选项指定外部 Markdown 文件的路径。例如：

::: code-group

<!-- eslint-skip -->

```md [./slides.md]
# 标题

这是一个正常的页面

---
src: ./pages/toc.md // [!code highlight]
---

<!-- 此页面将从 '/pages/toc.md' 加载 -->

这里的内容将被忽略

---

# 第四页

另一个正常的页面

---
src: ./pages/toc.md   # Reuse the same file // [!code highlight]
---
```

```md [./pages/toc.md]
# 目录

Part 1

---

# 目录

Part 2
```

:::

## 导入特定幻灯片

要在另一个 Markdown 文件中复用一些幻灯片，你可以使用导入路径的哈希部分：

```md
---
src: ./another-presentation.md#2,5-7
---
```

这会从 `./another-presentation.md` 中导入第 2,5,6,7 页。

## Frontmatter 合并

<LinkCard link="features/frontmatter-merging" />
