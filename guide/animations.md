---
title: 动画
---

# 动画 {#animations}

## 点击动画 {#click-animations}

### `v-click`

如需为元素添加 “点击动画”，你可以使用 `v-click` 指令或 `<v-click>` 组件

```md
# Hello

<!-- 组件用法：在你按下 “下一步” 之前，这是不可见的 -->
<v-click>

Hello World

</v-click>

<!-- 指令用法：在你第二次按下 “下一步” 之前，这是不可见的 -->
<div v-click class="text-xl p-2">

Hey!

</div>
```

### `v-after`

`v-after` 和 `v-click` 用法类似，但是 `v-after` 会在上一个 `v-click` 触发后使元素可见。

```md
<div v-click>Hello</div>
<div v-after>World</div>
```

当你点击了“下一步”按钮之后，`Hello` 和 `World` 会同时出现。

### `v-click-hide`

与 `v-click` 相同，但不是让元素出现，而是让元素在点击后不可见。

```md
<div v-click-hide>Hello</div>
```

### `v-clicks`

`v-clicks` 仅作为组件提供。它可以快速将其子元素全部添加 `v-click` 指令。它在列表中尤为实用。

```md
<v-clicks>

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>
```

每次你点击“下一步”按钮时，元素会逐条依次出现。

<<<<<<< HEAD
### 自定义点击数量 {#custom-clicks-count}
=======
It accepts a `depth` props for nested list:

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

### Custom Clicks Count
>>>>>>> 86744c7f6c0257bbc850cc76bc921ff08eb82107

默认情况下，Slidev 会计算进入下一张幻灯片之前需要执行多少步。你可以在 frontmatter 选项中设置 `clicks` 来覆盖该设置：

```yaml
---
# 在你进入下一页之前，需要点击 10 次
clicks: 10
---
```

### 排序 {#ordering}

通过传递点击索引，你可以自定义展示的顺序

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- 顺序颠倒了 -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- 三次点击后可见 -->
<v-clicks at="3">
  <div>Hi</div>
</v-clicks>
```

### 元素过渡 {#element-transitions}

当你在元素中应用 `v-click` 指令时，它会给该元素添加名为 `slidev-vclick-target` 的类。当元素隐藏时，还加上了 `slidev-vclick-hidden` 类。例如：

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

点击后，会变成：

```html
<div class="slidev-vclick-target">Text</div>
```

默认情况下，这些类都应用了半透明的过渡效果：

```css
// the default

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

你可以在你的自定义样式表中自定义过渡效果来覆盖默认配置。

例如，你可以通过以下方式实现缩放过渡效果：

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

只为某页幻灯片或布局指定动画：

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

欲了解更多详细信息，请参阅 [自定义样式](/custom/directory-structure#style)。

## 运动 {#motion}

Slidev 内置了 [@vueuse/motion](https://motion.vueuse.org/)。你可以对任何元素应用 `v-motion` 指令，以对它们施加运动效果。例如：

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

文本 `Slidev` 将从其初始化位置 `-80px` 移至其原始位置。

> 注意：Slidev 会预加载下一张幻灯片以提高性能，这意味着动画可能会在你导航到该页面之前就开始了。为了使其正常工作，你可以禁用指定幻灯片的预加载
>
> ```md
> ---
> preload: false
> ---
> ```
>
> 或者使用 `v-if` 控制元素的生命周期来获得对组件更细粒度的控制
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

学习模式： [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)

## 幻灯片过渡 {#slide-transitions}

<div id="pages-transitions" />

> 自 v0.39.0 开始可用

Slidev 支持开箱即用的幻灯片过渡，你可以通过设置  `transition` 扉页配置项来启用它:

```md
---
transition: slide-left
---
```

这将给你一个很好的滑动幻灯片切换效果。将其设置在扉页会应用到所有幻灯片。你还可以为每张幻灯片设置不同的过渡。

### 内置过渡 {#builtin-transitions}

- `fade` - 淡入/淡出
- `fade-out` - 淡出，然后淡入
- `slide-left` - 向左滑动 (后退时向右滑动)
- `slide-right` - 向右滑动 (后退时向左滑动)
- `slide-up` - 向上滑动 (后退时向下滑动)
- `slide-down` - 向下滑动 (后退时向上滑动)

### 自定义过渡 {#custom-transitions}

Slidev 的幻灯片过渡是由 [Vue 过渡](https://vuejs.org/guide/built-ins/transition.html)驱动的，你可以通过以下方式提供自定义过渡:

```md
---
transition: my-transition
---
```

然后在你的自定义样式表中如下配置:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

在 [Vue 过渡](https://vuejs.org/guide/built-ins/transition.html)中了解更多。

### 向前和向后过渡 {#forward-backward-transitions}

你可以使用 `|` 作为过渡名称中的分隔符来指定向前和向后导航的不同过渡属性:

```md
---
transition: go-forward | go-backward
---
```

这样，当你从幻灯片 1 到幻灯片 2 时， `go-forward` 过渡生效；从幻灯片 2 到幻灯片 1 时，`go-backward` 过渡生效。

### 高级用法 {#advanced-usage}

`transition` 字段还可以是一个选项，该选项会传递给 [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) 组件：

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
