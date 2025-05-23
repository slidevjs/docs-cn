# 内置布局

本页列出了 Slidev 提供的所有内置布局。这些布局可以通过幻灯片的 frontmatter 中的 `layout` 选项来使用。

需要注意的是，<LinkInline link="guide/theme-addon" /> 可以提供额外的布局。要添加自己的布局，请参见 <LinkInline link="guide/write-layout" />。

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

### 用法

```yaml
---
layout: image-left

# 图片来源
image: /path/to/the/image

# 内容的自定义 class 名称
class: my-cool-content-on-the-right
---
```

## `image-right`

在屏幕右侧展示图片，屏幕左侧展示内容。

### 用法

```yaml
---
layout: image-right

# 图片来源
image: /path/to/the/image

# 内容的自定义 class 名称
class: my-cool-content-on-the-left
---
```

## `image`

将图片作为页面的主要内容进行展示。

### 用法

```yaml
---
layout: image

# 图片来源
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

### 用法

```yaml
---
layout: iframe-left

# 网页来源
url: https://github.com/slidevjs/slidev

# 内容的自定义 class 名称
class: my-cool-content-on-the-right
---
```

## `iframe-right`

在屏幕右侧通过 `<iframe>` 元素显示网页，内容将位于左侧。

### 用法

```yaml
---
layout: iframe-right

# 网页来源
url: https://github.com/slidevjs/slidev

# 内容的自定义 class 名称
class: my-cool-content-on-the-left
---
```

## `iframe`

幻灯片的内容是嵌入的网页。

### 用法

```yaml
---
layout: iframe

# 网页来源
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

### 用法

```md
---
layout: two-cols
---

# 左

这会在左边显示

::right::

# 右

这会在右边显示
```

## `two-cols-header`

将页面内容分为两列，上方和下方的内容分开，第二行将左右两列分开。

### 用法

```md
---
layout: two-cols-header
---

这会横跨两侧

::left::

# 左

这会在左边显示

::right::

# 右

这会在右边显示
```
