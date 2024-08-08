---
relates:
  - guide/faq#adjust-size
  - features/canvas-size
  - features/transform-component
tags: [布局]
description: |
  将幻灯片内容缩放到一个特定的比例。
---

# 缩放幻灯片

你可能会发现部分幻灯片太宽敞或太拥挤。Slidev 为每张幻灯片提供了一个 `zoom` 选项，允许你缩放幻灯片的内容：


```md
---
zoom: 0.8
---

# 一张有很多内容的幻灯片

---

# 其他幻灯片不会受到影响
```

如要缩放所有的幻灯片，你可以设置幻灯片的 canvas 大小：

<LinkCard link="features/canvas-size" />

如要调整幻灯片中部分元素的大小，你可以适用 `Transform` 组件：

<LinkCard link="features/transform-component" />
