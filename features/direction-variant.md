---
relates:
  - UnoCSS Variants: https://unocss.dev/config/variants#variants
since: v0.48.0
tags: [导航, 样式]
description: |
  根据幻灯片放映方向应用不同的样式和动画。
---

# 基于导航方向的样式

你可能希望根据滑动幻灯片的方向来应用不同的类。 `.slidev-nav-go-forward` 或 `.slidev-nav-go-backward` 类将在放映时相应应用于幻灯片容器, 因而你可以用他们来实现不同的样式或动画：

```css
/* 示例：向前切换幻灯片使延时，向后时不生效 */
.slidev-nav-go-forward .slidev-vclick-target {
  transition-delay: 500ms;
}
.slidev-nav-go-backward .slidev-vclick-target {
  transition-delay: 0;
}
```

为了使其更易使用，我们也为此提供了一些 [UnoCSS variants](https://github.com/slidevjs/slidev/blob/6adcf2016b8fb0cab65cf150221f1f67a76a2dd8/packages/client/uno.config.ts#L32-L38)。你可以对任何 UnoCSS 类使用 `forward:` 或 `backward:` 前缀，来仅在特定播放方向上启用它们：

```html
<div v-click class="transition delay-300">元素</div> // [!code --]
<div v-click class="transition forward:delay-300">元素</div> // [!code ++]
```

在上方的示例中，动画仅在向前切换幻灯片时延迟。
