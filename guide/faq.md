# FAQ {#faq}

## Grids {#grids}

由于 Slidev 基于 Web 运行，因此你可以使用任何想使用的布局方式。比如 [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/)，[flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)，甚至是 [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/)，都可以完美兼容。

<<<<<<< HEAD
由于我们内置了 [Windi CSS](https://cn.windicss.org/)，你也可以参考使用如下方式：
=======
Since we have [UnoCSS](https://unocss.dev/) built-in, here is one simple way for you to reference:
>>>>>>> 2fe32c406cbcd27bcfe2100a4d8c08d7cc42adc4

```html
<div class="grid grid-cols-2 gap-4">
<div>

The first column

</div>
<div>

The second column

</div>
</div>
```

你甚至可以定制每一列的大小，比如：

```html
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
<div>

The first column (200px)

</div>
<div>

The second column (auto fit)

</div>
<div>

The third column (10% width to parent container)

</div>
</div>
```

欲了解更多，请參考 [Windi CSS 的 Grids 布局](https://cn.windicss.org/utilities/layout/grid.html)。

## 定位 {#positioning}

幻灯片被定义为固定尺寸（默认为 `980x552px`），并会跟随用户屏幕进行缩放。你可以安全地在你的幻灯片中使用绝对定位，因为它们会随着屏幕的缩放而变化。

例如：

```html
<div class="absolute left-30px bottom-30px">
This is a left-bottom aligned footer
</div>
```

如需改变 canvas 的实际尺寸，你可以在第一张幻灯片的 frontmatter 中传递 `canvasWidth` 选项：

```yaml
---
canvasWidth: 800
---
```

## Font Size {#font-size}

如果你觉得幻灯片的字体过小，你可以通过如下方式进行调整：

### 覆盖本地样式 {#override-local-style}

你可以通过内联的 `<style>` 标签来覆盖每张幻灯片的样式。

```md
# Page 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Page 2

This will not be affected.
```

了解更多：[内联样式](/guide/syntax.html#embedded-styles)

### 覆盖全局样式

你可以通过创建 `./style.css` 文件的方式来提供自定义全局样式，例如：

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

了解更多：[全局样式](/custom/directory-structure.html#style)

### Canvas 缩放 {#scale-the-canvas}

改变画布的实际尺寸将缩放所有内容（文本、图片、组件等）以及幻灯片。

```yaml
---
# default: 980
# 由于画布变小，视觉尺寸也会变大
canvasWidth: 800
---
```

### 使用 Transform {#use-transform}

我们提供了内置的 `<Transform />` 组件，它针对 CSS 的 transform 属性进行了简易封装。

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
