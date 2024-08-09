---
outline: deep
---

# 常见问答

## 处理静态资源 {#assets-handling}

你可以在幻灯片中使用静态资源，如图片和视频。由于 Slidev 基于 Vite，你可以直接在 Markdown 文件中导入它们。

可用被静态分析的 URL 可以使用相对路径：

```md
![alt](./image.png)
<img src="./image.png" />
```

在上例中，URL 将在构建时被解析为 `/BASE_URL/assets/image.png`。

但是，frontmatter 和其他组件中的相对路径在构建后将会失效：

```md
---
background: ./image.png  # 构建后可能会失效
---

<Comp src="./image.png" />
```

上例中的两个 URL 不会被静态分析，构建后将保留原样，这将导致构建后的 404 错误。

要解决这个问题，你可以将这些资源放在 [public 文件夹](../custom/directory-structure#public) 中，并使用绝对路径导入它们：

```md
---
background: /image.png
---

<Comp src="/image.png" />
```

更多细节请参阅 [Vite 的文档](https://cn.vitejs.dev/guide/assets.html).

## 定位元素 {#positioning}

Slidev 基于 Web，CSS 是定位元素的主要方式。以下是一些有用的定位元素的技巧：

### Grids 和 Flexboxes {#grids-and-flexboxes}

可以使用 CSS Grids 来创建复杂的布局：

::: code-group

```md [Two columns]
<div class="grid grid-cols-2 gap-4">
  <div>
    第一列
  </div>
  <div>
    第二列
  </div>
</div>
```

```md [Complex case]
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
  <div>
    第一列 (200px)
  </div>
  <div>
    第二列 (auto fit)
  </div>
  <div>
    第三列 (10% width to parent container)
  </div>
</div>
```

:::

或使用 Flexboxes 来创建更具响应性的布局：

::: code-group

```md [Horizontal]
<div class="flex items-center">
  <div>
    第一块
  </div>
  <div>
    第二块
  </div>
</div>
```

```md [Vertical]
<div class="flex flex-col items-center">
  <div>
    居中的内容
  </div>
</div>
```

:::

了解更多：[CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/)，[flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)，以及 [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/)。

### 绝对定位 {#absolute-positioning}

可以使用 UnoCSS 来绝对定位元素：

```md
<div class="absolute left-30px bottom-30px">
  这是一个在左下角的页脚
</div>
```

或者使用可拖动元素的功能：

<LinkCard link="features/draggable" />

## 调整大小 {#adjust-size}

- 调整所有幻灯片的大小：

<LinkCard link="features/canvas-size" />

- 调整某几张幻灯片的大小：

<LinkCard link="features/zoom-slide" />

- 调整一些元素的大小：

<LinkCard link="features/transform-component" />
