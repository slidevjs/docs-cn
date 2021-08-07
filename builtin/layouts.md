---
title: 布局
---

# 布局 {#layouts}

<<<<<<< HEAD
## 内置布局 {#built-in-layouts}
=======
> As themes may override layouts behaviour, the best way to know exactly the usage, parameters and examples is referring their documentation.


### `center`

Displays the content in the middle of the sreen.

### `cover`

Used to display the cover page for the presentation, may contain the presentation title, contextualization, etc.

### `default`

The most baisc layout, to display any kind of content.

### `end`

The final page for the presentation.

### `fact`

To show some fact or data with a lot of prominence on the screen.

### `full`

Use all the space of the screen to display the content.

### `image-left`

Shows an image on the left side of the screen, the content will be placed on the right side.

#### Usage

```yaml
---
layout: image-left

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `image-right`

Shows an image on the right side of the screen, the content will be placed on the left side.

#### Usage

```yaml
---
layout: image-right

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `image`

Shows an image as the main content of the page.

#### Usage

```yaml
---
layout: image

# the image source
image: ./path/to/the/image
---
```

### `intro`

To introduce the presentation, usually with the presentation title, a short description, the author, etc.

### `none`

A layout without any existent styling.

### `quote`

To display a quotation with prominience.

### `section`

Used to mark the beginning of a new presentation section.

### `statement`

Make an affirmation/statement as the main page content.

### `two-cols`

Separates the page content in two columns.

#### Usage


```md
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```
>>>>>>> 1167e7a94ea649de6b3cd27aec6585258f0d477e

> 这部分文档尚未完成。在完成之前，你可以直接去看看 [源码](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts)。

## 自定义布局 {#custom-layouts}

在你的项目根目录里创建一个 `layouts/` 文件夹，然后直接把你的自定义 Vue 组件放进去。

欲了解更多，请参阅 [自定义](/custom/directory-structure#layouts) 章节。

## 主题提供的布局 {#theme-provided-layouts}

主题可以提供布局或者覆盖已有的。请阅读它们各自的文档，以知晓它们提供了什么。
