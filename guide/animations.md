---
outline: deep
---

# 动画指南

动画是幻灯片演示的重要组成部分。Slidev 提供了从简单到复杂的各种幻灯片动画制作方法。本指南将告诉你如何有效地使用它们。

## 点击动画 {#click-animation}

此处我们用 “**点击**” 一词来代表幻灯片中的一步动画。一张幻灯片可以有一个或多个点击，每个点击可以触发一个或多个动画 - 例如，显示或隐藏元素。可以通过按下 <kbd>space</kbd> 键或 <kbd>→</kbd> 键来触发一步点击动画。

> [!NOTE]
> 自 v0.48.0 版起，我们重写了点击动画系统，使其行为更加一致。在一些情况下，它可能会改变现有幻灯片的行为。本页展示的是新的点击系统，您可以在 [#1279](https://github.com/slidevjs/slidev/pull/1279) 中找到有关该重写的更多细节。

### `v-click` {#v-click}

可以使用 `<v-click>` 组件或 `v-click` 指令来为元素应用简单的显示/隐藏动画。

<!-- eslint-skip -->

```md
<!-- 组件用法:
     以下内容在第一步动画后才可见 -->
<v-click> Hello World! </v-click>

<!-- 指令用法:
     以下内容在第二步动画后才可见 -->
<div v-click class="text-xl"> Hey! </div>
```

### `v-after` {#v-after}

`v-after` 用于在前一个 `v-click` 触发时显示元素。下例中，在一步动画后，`Hello` 和 `World` 将同时出现。

```md
<div v-click> Hello </div>
<div v-after> World </div>  <!-- 或 <v-after> World </v-after> -->
```

### 点击后隐藏 {#hide-after-clicking}

指令用法下，可以使用 `.hide` 修饰符来隐藏元素：

```md
<div v-click> 一步动画后可见 </div>
<div v-click.hide> 两步动画后隐藏 </div>
<div v-after.hide> 两步动画后隐藏 </div>
```

组件用法下，可以使用 `hide` prop 来隐藏元素：

```md
<v-click> 一步动画后可见 </v-click>
<v-click hide> 两步动画后隐藏 </v-click>
<v-after hide> 两步动画后隐藏 </v-after>
```

### `v-clicks` {#v-clicks}

`v-clicks` 只能作为组件使用。它是将 `v-click` 指令应用于其所有子元素的简写。在处理列表和表格时特别有用：

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

每一步动画会依次显示列表中的元素。它还接受 `depth` prop 用于嵌套列表：

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

另外，你可以使用 `every` prop 来指定每次点击后显示的项目数：

```md
<v-clicks every="2">

- Item 1.1
- Item 1.2
- Item 2.1
- Item 2.2

</v-clicks>
```

### 动画时机 {#positioning}

默认情况下，点击动画是依次触发的。你可以通过使用 `at` prop 或带有值的 `v-click` 指令来自定义的动画发生时机。

就像 CSS 布局系统一样，点击动画发生时机可以是 “相对的” (relative) 或 “绝对的” (absolute)：

#### 相对的时机 {#relative-position}

动画发生时机基于相对于前一个也是相对的时机的动画计算。若该动画是第一个相对时机的动画，则从 0 开始计算：

````md
<div v-click> 1 步动画后显示 </div>
<v-click at="+2"><div> 3 步动画后显示 </div></v-click>
<div v-click.hide="'-1'"> 2 步动画后隐藏 </div>

```js {none|1|2}{at:'+5'}
1  // 第 7 步时高亮
2  // 第 8 步时高亮
```
````

> [!NOTE]
> 当没有给 `v-click` 传入参数时，将使用默认值 `'+1'`，即动画发生在上一个动画的后一步。

事实上，`v-after` 只是带有 `at="+0"` 的 `v-click` 的简写：

```md
<!-- 以下两种写法等价 -->
<img v-after />
<img v-click="'+0'" />

<!-- 以下三种写法等价 -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

::: tip `at` prop 的格式

只有以 `'+'` 或 `'-'` 开头的字符串值，如 `'+1'`，才会被视为相对位置：

| Value          | Kind     |
| -------------- | -------- |
| `'-1'`, `'+1'` | 相对时机 |
| `+1` === `1`   | 绝对时机 |
| `'1'`          | 绝对时机 |

故不要忘记为相对值添加单引号。

:::

#### 绝对时机 {#absolute-position}

传入的值就是触发动画所需的点击次数：

````md
<div v-click="3"> 3 步动画后显示 </div>
<v-click at="2"><div> 2 步动画后显示 </div></v-click>
<div v-click.hide="1"> 1 步动画后隐藏 </div>

```js {none|1|2}{at:3}
1  // 3 步动画后高亮
2  // 4 步动画后高亮
```
````

#### 混合情况 {#mixed-case}

你可以混合地使用绝对和相对时机：

```md
<div v-click> 1 步点击后显示 </div>
<div v-click="3"> 3 步点击后显示 </div>
<div v-click> 2 步点击后显示 </div>
<div v-click="'-1'"> 1 步点击后显示 </div>
<div v-click="4"> 4 步点击后显示 </div>
```

下例中，两个代码块的高亮是同步进行的：

````md {1,6}
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
= 2
= 'ab'
```
````

### 显示后隐藏 {#enter-leave}

你还可以通过传递一个数组来为 `v-click` 指令指定显示的时机和隐藏的时机：

```md
<div v-click.hide="[2, 4]">
  在第 2 和 3 步时动画显示，之后隐藏。
</div>
<div v-click />
<div v-click="'[+1, +1]'">
  这将在第 3 步动画后显示，之后在第 4 步动画后隐藏。
</div>
```

你也可以使用 `v-switch` 组件来实现相同的效果：

```md
<v-switch>
  <template #1> 在第 1 步动画显示 </template>
  <template #2> 在第 2,3,4 步动画显示 </template>
  <template #5-7>  在第 5,6 步动画显示 </template>
</v-switch>
```

更多细节请查阅 [`VSwitch` 组件](/builtin/components#vswitch)。

### 自定义步骤总数 {#total}

默认地，Slidev 会自动计算在下一张幻灯片之前需要多少次动画。你可以通过 frontmatter 中的 `clicks` 选项来覆盖这个值：

```yaml
---
# 10 步动画后进入下一张幻灯片
clicks: 10
---
```

### 过渡效果 {#element-transitions}

When you apply the `v-click` directive to your elements, it will attach the class name `slidev-vclick-target` to it. When the elements are hidden, the class name `slidev-vclick-hidden` will also be attached. For example:

当 `v-click` 指令应用于元素时，元素会拥有 `slidev-vclick-target` 类名。当元素被隐藏时，还会附加类名 `slidev-vclick-hidden`。例如：

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

点击一次后，它可能会变成：

```html
<div class="slidev-vclick-target">Text</div>
```

默认地，以下样式会应用于这些类：

```css
.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

你可以在自定义样式表中覆盖它们，以自定义过渡效果。例如，你可以通过以下方式实现缩放效果：

```css
/* styles.css */

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

若要针对某几张幻灯片或布局指定动画：

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

参阅 [自定义样式](/custom/directory-structure#style) 以了解更多。

## Motion 动画 {#motion}

Slidev 内置了 [@vueuse/motion](https://motion.vueuse.org/)。你可以使用 `v-motion` 指令来赋予元素 Motion 动画：

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :leave="{ x: 80 }"
>
  Slidev
</div>
```

The text `Slidev` will move from `-80px` to its original position when entering the slide. When leaving, it will move to `80px`.

上例中，当切换至这张幻灯片时，`Slidev` 几个字将从 `-80px` 移动到原始位置。当离开该幻灯片时，它将移动到 `80px`。

> 在 v0.48.9 之前，你需要在幻灯片的 frontmatter 中添加 `preload: false` 来启用 motion。

### 基于点击动画的 Motion {#motion-with-clicks}

> 自 v0.48.9 后可用

也可以通过点击动画来触发 Motion。例如：

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0, y: 0 }"
  :click-1="{ x: 0, y: 30 }"
  :click-2="{ y: 60 }"
  :click-2-4="{ x: 40 }"
  :leave="{ y: 0, x: 80 }"
>
  Slidev
</div>
```

或者组合 `v-click` 和 `v-motion`：

```html
<div v-click="[2, 4]" v-motion
  :initial="{ x: -50 }"
  :enter="{ x: 0 }"
  :leave="{ x: 50 }"
>
  在第 2 步动画后显示，在第 4 步动画后隐藏。
</div>
```

字段的含义：

- `initial`: 当 `currentPage < thisPage` 或 `v-click` 因为 `$clicks` 太小而隐藏了该元素。
- `enter`: 当 `currentPage === thisPage` 且 `v-click` 显示元素时。_优先级：最低_
- `click-x`: `x` 是一个表示 **绝对** 点击数的数字。如果 `$clicks >= x`，则变体将生效。_优先级：`x`_
- `click-x-y`: 如果 `x <= $clicks < y`，则变体将生效。_优先级：`x`_
- `leave`: `currentPage > thisPage`，或 `v-click` 隐藏当前元素，因为 `$clicks` 太大。

字段的值将根据上述定义的优先级进行合并。

::: warning
由于 Vue 内部的 [bug](https://github.com/vuejs/core/issues/10295)，目前 **只有** `v-click` 被作用于和 `v-motion` 相同的元素才能控制 Motion 动画。作为变通方案，你可以使用 `v-if="3 < $clicks"` 来实现类似的效果。
:::

了解更多：[Demo](https://sli.dev/demo/starter/10) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)

## Slide Transitions

<div id="pages-transitions" />

Slidev 内置了幻灯片过渡效果。你可以在 frontmatter 中设置 `transition` 来启用它：

```md
---
transition: slide-left
---
```

这将提供一个幻灯片切换时的滑动效果。在 headmatter 中设置将应用于所有幻灯片。你也可以在 frontmatter 中为每张幻灯片设置不同的过渡效果。

### 内置的过渡效果 {#builtin-transitions}

- `fade` - 淡入淡出
- `fade-out` - 淡出再淡入
- `slide-left` - 向左滑动（向右滑动时后退）
- `slide-right` - 向右滑动（向左滑动时后退）
- `slide-up` - 向上滑动（向下滑动时后退）
- `slide-down` - 向下滑动（向上滑动时后退）
- `view-transition` - 使用 View Transitions API 过渡

### 使用 View Transition API {#view-transitions}

View Transitions API 提供了一种在不同 DOM 状态之间轻松创建动画过渡的机制。可以在 [View Transitions API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) 中了解更多。

:::warning
实验性：并非所有浏览器都支持。在使用前请查看 [浏览器兼容性表](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility)。
:::

You can use the `view-transition-name` CSS property to name view transitions, which creates connections between different page elements and smooth transitions when switching slides.

可以使用 `view-transition-name` CSS 属性来命名 view transitions，它会在切换幻灯片时创建不同页面元素之间的连接，并实现平滑的过渡效果。

同时，你还可以启用 [MDC (Markdown Component) 语法](/guide/syntax#mdc-syntax) 来更加方便的方便地设置 `view-transition-name`：

```md
---
transition: view-transition
mdc: true
---

# View Transition {.inline-block.view-transition-title}

---

# View Transition {.inline-block.view-transition-title}
```

### 自定义过渡效果 {#custom-transitions}

Slidev 的幻灯片过渡效果由 [Vue Transition](https://vuejs.org/guide/built-ins/transition.html) 提供。你可以通过以下方式提供自定义过渡效果：

```md
---
transition: my-transition
---
```

并在你的自定义样式表中添加以下内容：

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

参阅 [Vue Transition](https://vuejs.org/guide/built-ins/transition.html) 以了解更多。

### 前进后退过渡 {#forward-backward-transitions}

你可以为前进和后退导航指定不同的过渡效果，使用 `|` 作为过渡名称的分隔符：

```md
---
transition: go-forward | go-backward
---
```

在上例中，当你从幻灯片 1 切换到幻灯片 2 时，将应用 `go-forward` 过渡效果。当你从幻灯片 2 切换到幻灯片 1 时，将应用 `go-backward` 过渡效果。

### 高级过渡选项 {#advanced-usage}

`transition` 字段接受一个选项对象，该选项对象将传递给 [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) 组件。例如：

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
