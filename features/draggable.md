---
tags: [布局]
description: |
  可以用鼠标拖动来移动、旋转和调整大小的元素。
---

# 可拖拽元素

可拖动元素使你能够通过鼠标拖动来移动、调整大小和旋转元素。这对于在幻灯片中创建浮动元素非常有用。

## 指令式用法

### 在 frontmatter 中设定

```md
---
dragPos:
  square: Left,Top,Width,Height,Rotate
---

<img v-drag="'square'" src="https://sli.dev/logo.png">
```

### 在指令值中设定

::: warning
Slidev 使用正则表达式来更新幻灯片内容中的位置值。如果你遇到问题，请使用 frontmatter 来定义值。
:::

```md
<img v-drag="[Left,Top,Width,Height,Rotate]" src="https://sli.dev/logo.png">
```

## 组件式用法

### 在 frontmatter 中设定

```md
---
dragPos:
  foo: Left,Top,Width,Height,Rotate
---

<v-drag pos="foo" text-3xl>
  <carbon:arrow-up />
  使用`v-drag`组件来创建一个可拖动的容器！
</v-drag>
```

### 通过 props 设定

```md
<v-drag pos="Left,Top,Width,Height,Rotate" text-3xl>
  <carbon:arrow-up />
  使用`v-drag`组件来创建一个可拖动的容器！
</v-drag>
```

## 创建一个可拖拽元素

创建新的可拖动元素时，不需要指定位置值（但如果要使用  frontmatter，则需要指定位置名称）。Slidev 将帮你自动生成初始位置值。

## 自动调整高度

你可以将 `Height` 设置为 `NaN`（in）或 `_`（如果使用组件），使可拖动元素的高度根据它的内容自动调整。


## 控制

- 双击可拖动元素以开始拖动。
- 你还可以使用箭头键移动元素。
- 拖动时按住 `Shift` 键以保持其纵横比。
- 单击可拖动元素以外区域以停止拖动。

## 可拖动剪头

`<v-drag-arrow>` 组件创建了一个可拖动的箭头元素。使用它只需要这样做：

```md
<v-drag-arrow />
```

你会得到一个可拖动的箭头元素。其他 props 与 [ `Arrow` 组件](/buildin/components#Arrow)相同。

