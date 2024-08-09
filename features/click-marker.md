---
depends:
  - guide/syntax#notes
  - guide/animations
since: v0.48.0
tags: [演讲者, 动画]
description: |
  根据点击动画高亮演讲者笔记。
---

# 笔记的动画标记

对于一些幻灯片，你可能会有较长的备注，这可能会让你难以找到特定的位置。Slidev 支持点击标记功能，它允许你从对应的内容中突出显示并自动滚动到备注的特定部分。在备注中放置 `[click]` 标记，以便在需要转到另一个 [click](/guide/animations#click-animation) 时进行定位。Slidev 会在点击标记之间的内容中进行划分，并在演示者备注中突出显示，这与你的幻灯片进度是同步的。


<video src="https://github.com/slidevjs/slidev/assets/11247099/40014e34-67cd-4830-8c8d-8431754a3672" controls rounded shadow w-full></video>
