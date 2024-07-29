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

You may find some slides in your presentation too spacious or too crowded. Slidev provides a `zoom` option for each slide that allows you to scale the content of a slide:

```md
---
zoom: 0.8
---

# A Slide with lots of content

---

# Other slides aren't affected
```

To scale all the slides in your presentation, you can set the slide canvas size:

<LinkCard link="features/canvas-size" />

To adjust the size of some elements on your slides, you can use the `Transform` component:

<LinkCard link="features/transform-component" />
