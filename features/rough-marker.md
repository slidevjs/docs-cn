---
depends:
  - guide/animations
relates:
  - Rough Notation: https://github.com/linkstrifer/react-rough-notation
since: v0.48.0
tags: [绘图, 动画]
description: |
  集成 Rough Notation 来在你的幻灯片中标记或突出显示元素。
---

# Rough Markers

Slidev 集成了 [Rough Notation](https://github.com/linkstrifer/react-rough-notation) 许在幻灯片中标记或高亮元素。

---

### `v-mark` 指令

Rough Notation 集成了 `v-mark` 指令。

#### 类型

`v-mark.underline` 进行下划线标记, `v-mark.circle` 进行圆圈标记，以此类推。默认为 `underline`。

#### Color

`v-mark.red` 会将标记设定为 `red`. 支持 UnoCSS 的内置颜色主题。对于自定义颜色，请使用对象语法 `v-mark="{ color: '#234' }"`。

#### 点击事件

`v-mark` 的工作方式类似于 `v-click` 并会在点击后触发。 与 `v-click`相同, 它允许你传递一个自定义的点击值，比如`v-mark="5"` 或 `v-mark="'+1'"`。

#### 选项

你还可以向 `v-mark` 传递一个对象来制定选项，例如：

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
重要的文字
</span>
```

#### 预览

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>
