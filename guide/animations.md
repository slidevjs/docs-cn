---
outline: deep
---

# 动画

## 点击动画

> [!NOTE] 注意
> 自 v0.48.0 起，我们重写了点击动画系统，现在的行为将更加一致。这可能会改变你现有幻灯片在边缘情况下的行为。此页面展示了新的点击系统，你还可以前往 [#1279](https://github.com/slidevjs/slidev/pull/1279) 找到关于重构的更多详情。

### `v-click`

要为元素应用 "点击动画"，可以使用 `v-click` 指令或 `<v-click>` 组件

<!-- eslint-skip -->

```md
<!-- 组件用法:
     此行将在你点击“下一页”前不可见 -->
<v-click> Hello World! </v-click>

<!-- 指令用法:
     此行将在你第二次点击“下一页”时不可见 -->
<div v-click class="text-xl"> Hey! </div>
```

### `v-after`

`v-after` 仅作为指令提供。它将在触发前一个 `v-click` 时使元素变为可见。

```md
<div v-click> Hello </div>
<div v-after> World </div>
```

当你点击“下一步”时，“Hello”和“World”将同时显示。

### 点击后隐藏

你可以为 `v-click` 或 `v-after` 添加 `.hide` 修饰符，使元素在点击后不可见，而不是显示出来。

```md
<div v-click> Visible after 1 click </div>
<div v-click.hide> Hidden after 2 click </div>
<div v-after.hide> Hidden after 2 click </div>
```

对于 `v-click` 组件，可以使用 `hide` 参数来达到同样的效果：

```md
<v-click> Visible after 1 click </v-click>
<v-click hide> Hidden after 2 click </v-click>
```

### `v-clicks`

`v-clicks` 仅作为一个组件提供。它是将 `v-click` 指令应用于所有子元素的简写。它在处理列表和表格时尤其出色。

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

每次点击“下一步“时，一个项目就会变得可见。
它同时接受用于嵌套列表的 `depth` 属性：

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

此外，你还可以使用 `every` 属性来指定每次点击后要显示的项目数：

```md
<v-clicks every="2">

- Item 1 (part 1)
- Item 1 (part 2)
- Item 2 (part 1)
- Item 2 (part 2)

</v-clicks>
```

### 定位

默认情况下，点击动画是逐个进行的。你可以使用 `at` prop 或 `v-click` 指令自定义元素的动画位置。

与 CSS 布局系统一样，点击动画元素可以是“相对”或“绝对”的：

#### 相对定位

相对元素的实际位置是根据之前的相对元素计算出来的：

````md
<div v-click> visible after 1 click </div>
<v-click at="+2"><div> visible after 3 clicks </div></v-click>
<div v-click.hide="'-1'"> hidden after 2 clicks </div>

```js {none|1|2}{at:'+5'}
1  // highlighted after 7 clicks
2  // highlighted after 8 clicks
```
````

> [!NOTE] 注意
> `v-click` 的默认值为 `'+1'`

归根结底，`v-after` 只是自带了 `at` 属性的 `v-click` 的快捷方式：

```md
<!-- The following 2 usages are equivalent -->
<img v-after />
<img v-click="'+0'" />

<!-- The following 3 usages are equivalent -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

::: info 提示
只有以 `'+'` 或 `'-'`（如 `'+1'`）开头的字符串值才会被视为相对位置：

| 属性值         | 类型 |
| -------------- | ---- |
| `'-1'`, `'+1'` | 相对 |
| `+1` === `1`   | 绝对 |
| `'1'`          | 绝对 |

因此，不要忘记为相对值加上单引号。
:::

#### 绝对定位

传递的值为需要操作的精确点击次数：

````md
<div v-click="3"> visible after 3 clicks </div>
<v-click at="2"><div> visible after 2 clicks </div></v-click>
<div v-click.hide="1"> hidden after 1 click </div>

```js {none|1|2}{at:3}
1  // highlighted after 3 clicks
2  // highlighted after 4 clicks
```
````

#### 混合使用

你可以将绝对位置和相对位置的用法混合使用：

```md
<div v-click> visible after 1 click </div>
<div v-click="3"> visible after 3 clicks </div>
<div v-click> visible after 2 click </div>
<div v-click="'-1'"> visible after 1 click </div>
<div v-click="4"> visible after 4 clicks </div>
```

下面的示例同步了两个代码块的高亮显示：

````md
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
2
'ab'
```
````

### 进入和离开

> 自 v0.43.0 起可用

你也可以通过传递一个数组为 `v-click` 指令指定进入和离开的时间。显示/隐藏周期是不包含结束索引在内的。

```md
<div v-click="[2, 4]">This will be shown on the 2nd and 3rd clicks, and hide again after the 4th.</div>
```

### 自定义总点击次数

默认情况下，Slidev 会计算进入下一张幻灯片前需要多少步。你可以通过 `clicks` frontmatter 选项来覆盖这一设置：

```yaml
---
# 10 clicks in this slide, before going to the next
clicks: 10
---
```

### 元素过渡

当你将 `v-click` 指令应用于元素时，它将附加 `slidev-vclick-target` 类名。相反，当元素被隐藏时，类名 `slidev-vclick-hidden` 会被附加。例如：

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

点击后，它将变成

```html
<div class="slidev-vclick-target">Text</div>
```

默认情况下，这些类别会使用透明度过渡：

```css
/* below shows the default style */

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

你可以覆盖它们，在自定义样式表中定制过渡效果。

例如，你可以通过以下方法实现放大转换：

```css
/* styles.css */

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

仅为某些幻灯片或布局指定动画

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

进一步了解 [自定义样式](/custom/directory-structure#style).

### 特定方向动画

> 自 v0.48.0 起可用

在某些情况下，你可能希望在前进和后退时使用不同的动画。在切换幻灯片时，Slidev 将对 slide 容器应用 `.slidev-nav-go-forward` 或 `.slidev-nav-go-backward` 类。

因此，你可以利用这一点为不同的方向应用不同的动画：

```css
/* example: delay on only forward but not backward */
.slidev-nav-go-forward .slidev-vclick-target {
  transition-delay: 500ms;
}
.slidev-nav-go-backward .slidev-vclick-target {
  transition-delay: 0;
}
```


为了简化操作，我们还提供了一些 [UnoCSS variants built-in](https://github.com/slidevjs/slidev/blob/6adcf2016b8fb0cab65cf150221f1f67a76a2dd8/packages/client/uno.config.ts#L32-L38)，你可以在任何实用程序类中添加 `forward:` 或 `backward:` 前缀，以便有条件地应用它们。

```html
<div v-click class="transition delay-300">Element</div> // [!code --]
<div v-click class="transition forward:delay-300">Element</div> // [!code ++]
```

## 标记

> 自 v0.48.0 起可用

Slidev 集成了 [Rough Notation](https://github.com/linkstrifer/react-rough-notation)，允许在幻灯片中标记或突出显示元素。

### `v-mark`

Rough Notation 集成了 `v-mark` 指令。

#### 标记

`v-mark.underline` 用于下划线标记，`v-mark.circle` 用于圆形标记等。默认为 `underline`。

#### 颜色

`v-mark.red` 使符号成为红色。`v-mark` 支持 UnoCSS 的内置颜色主题。对于自定义颜色，请使用对象语法 `v-mark="{ color: '#234' }"`。

#### 点击触发

`v-mark` 的工作原理与 `v-click` 相似，会在点击后触发。与 `v-click` 相同，它允许传递自定义点击值，如 `v-mark="5"` 或 `v-mark="'+1'"`。

#### 选项

你可以选择将一个对象传递给 `v-mark` 来指定选项，例如：

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
Important text
</span>
```

#### 预览

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>

## 元素运动

Slidev 内置了 [@vueuse/motion](https://motion.vueuse.org/)。你可以对任何元素使用 `v-motion` 指令来对其应用运动。例如：

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

文本 `Slidev` 将在初始化时从 `-80px` 移动到原来的位置。

> 注意：Slidev 会预加载下一张幻灯片以提高性能，这意味着动画可能会在你导航到该页面之前开始。为了使其正常工作，你可以禁用特定幻灯片的预加载：
>
> ```md
> ---
> preload: false
> ---
> ```
>
> 或使用 `v-if` 控制元素生命周期，以实现精细控制：
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

了解更多: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)

## 幻灯片过渡

<div id="pages-transitions" />

> 自 v0.39.0 起可用

Slidev 支持开箱即用的幻灯片过渡效果。你可以通过设置 `transition` frontmatter 选项来启用它：

```md
---
transition: slide-left
---
```

这将在幻灯片切换时带来顺滑的滑动效果。在前面板中进行设置将适用于所有幻灯片。你还可以为每张幻灯片设置不同的过渡效果。

### 内置过渡

- `fade` - 交叉淡入/淡出
- `fade-out` - 淡出后再淡入
- `slide-left` - 向左滑动（后退时向右滑动）
- `slide-right` - 向右滑动（后退时向左滑动）
- `slide-up` - 向上方滑动（向后时向下方滑动）
- `slide-down` - 向下滑动（向后时滑动到顶部）
- `view-transition` - 使用视图转换 API (View Transitions API) 的幻灯片

### View 过渡

> 自 v0.43.0 起可用

**View Transitions API** 提供了一种在不同 DOM 状态之间轻松创建动画转换的机制。要详细了解其工作原理，请参考 [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)。

:::警告
实验性功能：并非所有浏览器都支持此功能。使用此功能之前请检查[浏览器兼容性表](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility)。
:::

你可以使用 `view-transition-name` CSS 属性来命名过渡动画，这样就能在不同页面元素之间建立连接，并在切换幻灯片时实现平滑过渡。

你可以启用 [MDC（Markdown 组件）语法](/guide/syntax#mdc-syntax) 支持，让命名视图转换更便捷：

```md
---
transition: view-transition
mdc: true
---

# View Transition {.inline-block.view-transition-title}

---

# View Transition {.inline-block.view-transition-title}
```

### 自定义过渡

Slidev 的幻灯片过渡效果由 [Vue Transition](https://vuejs.org/guide/built-ins/transition.html) 实现。因此你也可以通过以下方式提供自定义过渡效果：

```md
---
transition: my-transition
---
```

然后在自定义样式表中添加：

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

有关其工作原理的更多信息，请参阅 [Vue Transition](https://vuejs.org/guide/built-ins/transition.html)。

### 前后过渡

你可以在过渡名称中使用 `|` 作为分隔符，为向前和向后导航指定不同的过渡：

```md
---
transition: go-forward | go-backward
---
```

添加以上配置后，当你从幻灯片 1 切换到幻灯片 2 时，将应用 `go-forward` 过渡。相反，从幻灯片 2 转到幻灯片 1 时，将应用 `go-backward` 过渡。

### 进阶用法

`transition` 字段接受一个选项，该选项将传递给 [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) 组件。例如：

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
