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

Slidev allows you to set the size of the slide canvas via the `canvasWidth` and `aspectRatio` options in the headmatter:

```md
---
# aspect ratio for the slides
aspectRatio: 16/9
# real width of the canvas, unit in px
canvasWidth: 980
---

# Your slides here
```

To scale several slides in your presentation, you can use the `zoom` option:

<LinkCard link="features/zoom-slide" />

To adjust the size of some elements on your slides, you can use the `Transform` component:

<LinkCard link="features/transform-component" />
