# Layouts

This page lists all the built-in layouts provided by Slidev. These layouts can be used via the `layout` option in the frontmatters of your slides.

Note that <LinkInline link="guide/theme-addon" /> may provide additional layouts or override the existing ones. To add your own layouts, see <LinkInline link="guide/write-layout" />.

## `center`

在屏幕中间展示内容。

## `cover`

用来展示演讲稿的封面页，可以包含演讲的标题、演讲者、时间等。

## `default`

最基础的布局，用于展示任意类型的内容。

## `end`

演讲的最后一页。

## `fact`

用来在屏幕上突出展示很多事实或数据。

## `full`

使用屏幕全部空间来展示内容。

## `image-left`

在屏幕左侧展示图片，屏幕右侧展示内容。

### Usage

```yaml
---
layout: image-left

# the image source
image: /path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

## `image-right`

在屏幕右侧展示图片，屏幕左侧展示内容。

### Usage

```yaml
---
layout: image-right

# the image source
image: /path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

## `image`

将图片作为页面的主要内容进行展示。

### Usage

```yaml
---
layout: image

# the image source
image: /path/to/the/image
---
```

你可以使用 `backgroundSize` 选项来控制背景图片的大小：

```yaml
---
layout: image
image: /path/to/the/image
backgroundSize: contain
---
```

```yaml
---
layout: image-left
image: /path/to/the/image
backgroundSize: 20em 70%
---
```

## `iframe-left`

在屏幕左侧通过 `<iframe>` 元素显示网页，内容将位于右侧。

### Usage

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

## `iframe-right`

在屏幕右侧通过 `<iframe>` 元素显示网页，内容将位于左侧。

### Usage

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

## `iframe`

Shows a web page as the main content of the page.

### Usage

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```

## `intro`

介绍演讲稿，通​​常带有演讲稿标题、简述、作者等信息。

## `none`

没有任何样式的布局。

## `quote`

突出显示引文。

## `section`

用来标记演讲稿的新部分的开始。

## `statement`

将主张/声明作为主要页面内容。

## `two-cols`

将页面内容分为两列。

### Usage

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

## `two-cols-header`

将页面内容分为两列，上方和下方的内容分开，第二行将左右两列分开。

### Usage

```md
---
layout: two-cols-header
---

This spans both

::left::

# Left

This shows on the left

::right::

# Right

This shows on the right
```
