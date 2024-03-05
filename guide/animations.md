---
<<<<<<< HEAD
title: 动画
---
=======
outline: deep
---

# Animations
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

# 动画 {#animations}

## 点击动画 {#click-animations}

> [!NOTE]
> Since v0.48.0, we are rewritten the click animations system with much more consistent behaviors. It might change the behaviors of your existing slides in edge cases. While this page is showing the new click system, you can find more details about the refactor in [#1279](https://github.com/slidevjs/slidev/pull/1279).

### `v-click`

如需为元素添加 “点击动画”，你可以使用 `v-click` 指令或 `<v-click>` 组件

```md
<!-- Component usage:
     this will be invisible until you press "next" -->
<v-click> Hello **World** </v-click>

<<<<<<< HEAD
<!-- 组件用法：在你按下 “下一步” 之前，这是不可见的 -->
<v-click>

Hello World

</v-click>

<!-- 指令用法：在你第二次按下 “下一步” 之前，这是不可见的 -->
<div v-click class="text-xl p-2">

Hey!

</div>
=======
<!-- Directive usage:
     this will be invisible until you press "next" the second time -->
<div v-click class="text-xl"> Hey! </div>
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0
```

### `v-after`

<<<<<<< HEAD
`v-after` 和 `v-click` 用法类似，但是 `v-after` 会在上一个 `v-click` 触发后使元素可见。
=======
`v-after` is only provided as a directive. It will turn the element visible when the previous `v-click` is triggered.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

```md
<div v-click> Hello </div>
<div v-after> World </div>
```

<<<<<<< HEAD
当你点击了“下一步”按钮之后，`Hello` 和 `World` 会同时出现。
=======
When you press "next", both `Hello` and `World` will show up together.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

### Hide after clicking

<<<<<<< HEAD
与 `v-click` 相同，但不是让元素出现，而是让元素在点击后不可见。
=======
Add a `.hide` modifier to `v-click` or `v-after` to make the element invisible after clicking, instead of showing up.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

```md
<div v-click> Visible after 1 click </div>
<div v-click.hide> Hidden after 2 click </div>
<div v-after.hide> Hidden after 2 click </div>
```

For `v-click` component, you can use the `hide` prop to achieve the same effect:

```md
<v-click> Visible after 1 click </v-click>
<v-click hide> Hidden after 2 click </v-click>
```

### `v-clicks`

<<<<<<< HEAD
`v-clicks` 仅作为组件提供。它可以快速将其子元素全部添加 `v-click` 指令。它在列表中尤为实用。
=======
`v-clicks` is only provided as a component. It's a shorthand to apply the `v-click` directive to all its child elements. It is especially useful when working with lists and tables.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

<<<<<<< HEAD
每次你点击“下一步”按钮时，元素会逐条依次出现。

### 自定义点击数量 {#custom-clicks-count}
=======
An item will become visible each time you click "next".
It accepts a `depth` prop for nested list:

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

Also, you can use the `every` prop to specify the number of items to show after each click:

```md
<v-clicks every="2">

- Item 1 (part 1)
- Item 1 (part 2)
- Item 2 (part 1)
- Item 2 (part 2)

</v-clicks>
```

### Positioning

By default, the clicking animations take place one by one. You can customize the animation position of elements by using the `at` prop or the `v-click` directive with value.

Like the CSS layout system, click-animated elements can be "relative" or "absolute":

#### Relative Position

This actual position of relative elements are calculated based on the previous relative elements:

~~~md
<div v-click> visible after 1 click </div>
<v-click at="+2"><div> visible after 3 clicks </div></v-click>
<div v-click.hide="'-1'"> hidden after 2 clicks </div>

```js {none|1|2}{at:'+5'}
1  // highlighted after 7 clicks
2  // highlighted after 8 clicks
```
~~~

> [!NOTE]
> The default value of `v-click` is `'+1'` when you don't specify it.

In fact, `v-after` are just shortcuts for `v-click` with `at` prop:

```md
<!-- The following 2 usages are equivalent -->
<img v-after />
<img v-click="'+0'" />

<!-- The following 3 usages are equivalent -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

:::info
Only string values start with `'+'` or `'-'` like `'+1'` are treated as relative positions:

| Value          | Kind     |
| -------------- | -------- |
| `'-1'`, `'+1'` | Relative |
| `+1` === `1`   | Absolute |
| `'1'`          | Absolute |

So don't forget the single quotes for the relative values.
:::

#### Absolute Position

The given value is the exact click count to show the element:

~~~md
<div v-click="3"> visible after 3 clicks </div>
<v-click at="2"><div> visible after 2 clicks </div></v-click>
<div v-click.hide="1"> hidden after 1 click </div>

```js {none|1|2}{at:3}
1  // highlighted after 3 clicks
2  // highlighted after 4 clicks
```
~~~

#### Mixed Case

You can mix the absolute and relative positions:

~~~md
<div v-click> visible after 1 click </div>
<div v-click="3"> visible after 3 clicks </div>
<div v-click> visible after 2 click </div>
<div v-click="'-1'"> visible after 1 click </div>
<div v-click="4"> visible after 4 clicks </div>
~~~

The following example synchronizes the highlighting of the two code blocks:

~~~md
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
2
'ab'
```
~~~

### Enter & Leave

> Available since v0.43.0

You can also specify the enter and leave index for the `v-click` directive by passing an array. The end index is exclusive.

```md
<div v-click="[2, 4]">This will be shown on the 2nd and 3rd clicks, and hide again after the 4th.</div>
```

### Custom Total Clicks Count
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

默认情况下，Slidev 会计算进入下一张幻灯片之前需要执行多少步。你可以在 frontmatter 选项中设置 `clicks` 来覆盖该设置：

```yaml
---
# 在你进入下一页之前，需要点击 10 次
clicks: 10
---
```

<<<<<<< HEAD
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
=======
### Element Transitions
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

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

<<<<<<< HEAD
你可以在你的自定义样式表中自定义过渡效果来覆盖默认配置。

例如，你可以通过以下方式实现缩放过渡效果：
=======
You can override them to customize the transition effects in your custom stylesheets.

For example, you can achieve the scaling up transitions by:
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

```css
/* styles.css */

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

<<<<<<< HEAD
## 运动 {#motion}
=======
## Rough Markers

> Available since v0.48.0

Slidev integrates [Rough Notation](https://github.com/linkstrifer/react-rough-notation) to allow marking or highlighting elements in your slides.

### `v-mark`

Rough Notation integrates comes with the `v-mark` directive.

#### Type

`v-mark.underline` for Underline mark, `v-mark.circle` for Circle mark, etc. Default to `underline`

#### Color

`v-mark.red` make the notation `red`. Supported builtin color themes from UnoCSS. For custom colors, use object syntax `v-mark="{ color: '#234' }"`

#### Clicks

`v-mark` works like `v-click` and will trigger after a click. Same as `v-click`, it allows you to pass a custom click value, like `v-mark="5"` or `v-mark="'+1'"`.

#### Options

Optionally you can pass an object to `v-mark` to specify the options, for example:

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
Important text
</span>
```

#### Preview

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>

## Motion
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

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

<<<<<<< HEAD
学习模式： [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)
=======
Learn mode: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

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

<<<<<<< HEAD
- `fade` - 淡入/淡出
- `fade-out` - 淡出，然后淡入
- `slide-left` - 向左滑动 (后退时向右滑动)
- `slide-right` - 向右滑动 (后退时向左滑动)
- `slide-up` - 向上滑动 (后退时向下滑动)
- `slide-down` - 向下滑动 (后退时向上滑动)
=======
- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left (slide to right when going backward)
- `slide-right` - Slides to the right (slide to left when going backward)
- `slide-up` - Slides to the top (slide to bottom when going backward)
- `slide-down` - Slides to the bottom (slide to top when going backward)
- `view-transition` - Slides with the view transitions API

### View Transitions

> Available since v0.43.0

The **View Transitions API** provides a mechanism for easily creating animated transitions between different DOM states. Learn more how it works in [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

:::warning
Experimental: This is not supported by all browsers. Check the [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility) carefully before using this.
:::

You can use the `view-transition-name` CSS property to name view transitions, which creates connections between different page elements and smooth transitions when switching slides.

You can enable [MDC (Markdown Component) Syntax](/guide/syntax#mdc-syntax) support to conveniently name view-transitions:

```md
---
transition: view-transition
mdc: true
---
# View Transition {.inline-block.view-transition-title}
---
# View Transition {.inline-block.view-transition-title}
```
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

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
