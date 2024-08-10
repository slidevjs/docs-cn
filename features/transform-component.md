---
relates:
  - guide/faq#adjust-size
  - features/canvas-size
  - features/zoom-slide
tags: [布局]
description: |
  一个用于缩放元素的组件。
---

# `Transform` 组件

`Transform` 组件允许你缩放你幻灯片中的元素大小。

```md
<Transform :scale="0.5">
  <YourElements />
</Transform>
```

这在你想要调整部分元素的大小又不希望改变整个幻灯片布局时很有帮助。

如要缩放所有的幻灯片，你可以设置幻灯片的 canvas 大小：

<LinkCard link="features/canvas-size" />

如要缩放多张幻灯片，你可以考虑使用 `zoom` 选项：

<LinkCard link="features/zoom-slide" />
