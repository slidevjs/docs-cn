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

### 自定义点击数量 {#custom-clicks-count}

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

## 页面过渡 {#pages-transitions}

<<<<<<< HEAD
> 当前版本尚未提供对幻灯片页面过渡功能的内置支持。我们计划在下一个主版本中增加对其的支持。在此之前，你仍然可以使用自定义样式和工具库来实现页面过渡效果。
=======
> Available since v0.39.0

Slidev supports page transitions out of the box. You can enable it by setting the `transition` frontmatter option:

```md
---
transition: slide-left
---
```

This will give you a nice sliding effects on slide switching. Setting it in the frontmatter will apply to all slides. You can also set different transition per slide.

### Builtin Transitions

- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left, slide to right when going back
- `slide-right` - Slides to the right, slide to left when going back
- `slide-top` - Slides to the top, slide to bottom when going back
- `slide-bottom` - Slides to the bottom, slide to top when going back

### Custom Transitions

Slidev's page transitions are powered by [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). You can provide your custom transitions by:

```md
---
transition: my-transition
---
```

and then in your custom stylesheets:

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

Learn more how it works in [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Forward & Backward Transitions

You can specify different transitions for forward and backward navigation using `|` as a separator in the transition name:

```md
---
transition: go-forward | go-backward
---
```

With this, when you go from slide 1 to slide 2, the `go-forward` transition will be applied. When you go from slide 2 to slide 1, the `go-backward` transition will be applied.

### Advanced Usage

The `transition` field accepts an option that will passed to the [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) component. For example:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
>>>>>>> 2e53e8c41664c5aa920ca84e738e95c8a05fb349
