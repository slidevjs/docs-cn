# 幻灯片布局

Slidev 中的布局用于定义每张幻灯片的结构。它们是包装幻灯片内容的 Vue 组件。

## 使用布局 {#use}

要使用布局，你可以在幻灯片的 frontmatter 中指定它：

```md
---
layout: quote
---

A quote from someone
```

第一张幻灯片的默认布局是 `cover`，其余的是 `default`。

布局按以下顺序加载，最后加载的会覆盖之前的：

1. 默认布局。参见 [内置布局](../builtin/layouts)。
2. 主题提供的布局
3. 插件提供的布局
4. `layouts` 目录中的自定义布局

<SeeAlso :links="[
  'features/slot-sugar',
]" />

## 编写布局 {#write}

<LinkCard link="guide/write-layout" />
