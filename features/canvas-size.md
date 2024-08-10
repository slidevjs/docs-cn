---
relates:
  - guide/faq#adjust-size
  - features/zoom-slide
  - features/transform-component
tags: [布局]
description: |
  设置所有幻灯片的大小。
---

# 幻灯片大小

Slidev 允许你通过 headmatter 中的 canvasWidth 和 aspectRatio 选项来设置幻灯片 canvas 的大小：

```md
---
# 幻灯片的宽高比
aspectRatio: 16/9
# 幻灯片的实际宽度，以 px 为单位
canvasWidth: 980
---

# 以下为 slide 内容
```

要缩放演示文稿中的多个幻灯片，你可以使用 `zoom` 选项：

<LinkCard link="features/zoom-slide" />

要调整幻灯片上某些元素的大小，你可以使用 `Transform` 组件：

<LinkCard link="features/transform-component" />
