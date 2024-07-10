---
<<<<<<< HEAD
title: 组件
---
=======
outline: [2, 3]
---

# Components
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

# 组件 {#components}

### `Arrow`

绘制一个箭头。

#### 用法 {#arrow-usage}

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

Or:

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

参数：

<<<<<<< HEAD
- `x1` (`string | number`, required): 起始 x 位置
- `y1` (`string | number`, required): 起始 y 位置
- `x2` (`string | number`, required): 终点 x 位置
- `y2` (`string | number`, required): 终点 y 位置
- `width` (`string | number`, default: `2`): 线宽
- `color` (`string`, default: `'currentColor'`): 颜色
=======
- `x1` (`string | number`, required): start point x position
- `y1` (`string | number`, required): start point y position
- `x2` (`string | number`, required): end point x position
- `y2` (`string | number`, required): end point x position
- `width` (`string | number`, default: `2`): line width
- `color` (`string`, default: `'currentColor'`): line color
- `two-way` (`boolean`, default: `false`): draw a two-way arrow

### `VDragArrow`

An `Arrow` component that can be dragged.

#### Usage

See https://sli.dev/guide/draggable.html#draggable-arrow

Parameters not related to position are the same as [the `Arrow` component](#arrow).
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

### `AutoFitText`

> 实验性功能

字体大小会自动适应内容的方框。类似于 PowerPoint 或 Keynote 的文本框。

#### 用法 {#auto-fit-text-usage}

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

参数:

- `max` (`string | number`, default `100`): 最大字体大小
- `min` (`string | number`, default `30`): 最小字体大小
- `modelValue` (`string`, default `''`): 文本内容

### `LightOrDark`

你可以使用它来根据活动的亮色或暗色主题，显示一种或另一种内容。

#### 用法 {#light-or-dark-usage}

与 `#dark` 和 `#light` 插槽一起使用：

```md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
```

在 `LightOrDark` 组件上提供的 props 将可以使用作用域插槽 props 来访问：

```md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
```

你可以在插槽中提供 markdown，但需要用空行分隔内容：

```md
<LightOrDark>
  <template #dark>

![dark](/dark.png)

  </template>
  <template #light>

![light](/light.png)

  </template>
</LightOrDark>
```

### `Link` {#link}

插入一个链接，你可以用它来导航到一个指定的幻灯片。

#### 用法 {#link-usage}

```md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
<Link to="solutions" title="Go to solutions"/>
```

参数：

- `to` (`string | number`): 导航到的幻灯片的路径 (幻灯片从 `1` 开始计数)
- `title` (`string`): 要显示的标题

只要存在相应的路由，就可以使用字符串作为 `to`，例如：

```md
---
routeAlias: solutions
---

# Now some solutions!
```

### `PoweredBySlidev`

Renders "Powered by Slidev" with a link to the Slidev website.

### `RenderWhen`

插槽仅在上下文满足条件时（如处于演示者视图中时）才会渲染。

#### 用法 {#render-when-usage}

```md
<RenderWhen context="presenter">This will only be rendered in presenter view.</RenderWhen>
```

上下文类型: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

参数:

- `context` (`Context | Context[]`): 渲染插槽的上下文或上下文数组

### `SlideCurrentNo`

当前幻灯片编号。

#### 用法 {#slide-current-no-usage}

```md
<SlideCurrentNo />
```

### `SlidesTotal`

幻灯片总数。

#### 用法 {#slides-total-usage}

```md
<SlidesTotal />
```

### `Titles` {#titles}

在一个被解析为 HTML 的幻灯片中插入主标题

标题和标题级别会自动从每张幻灯片的第一个标题元素中检索出来。

您可以使用 front matter 语法来覆盖幻灯片的这种自动行为：

```yml
---
title: Amazing slide title
level: 2
---
```

#### 用法 {#titles-usage}

`<Titles>` 组件是一个虚拟组件，可以使用以下方式导入：

```js
import Titles from '/@slidev/titles.md'
```

然后像这样使用：

```md
<Titles no="42" />
```

参数：

- `no` (`string | number`): 显示标题的幻灯片编号（幻灯片从 `1` 开始）

### `Toc`

插入目录

如果你想让一张幻灯片不出现在 `<Toc>` 组件中，你可以在幻灯片的 matter 块中使用如下属性：

```yml
---
hideInToc: true
---
```

标题使用 [`<Titles>` 组件](#titles) 来展示。

#### 用法 {#toc-usage}

```md
<Toc />
```

参数：

- `columns` (`string | number`, default: `1`): 显示的列数
- `listClass` (`string | string[]`, default: `''`): 应用于目录列表的类
- `maxDepth` (`string | number`, default: `Infinity`): 要显示的标题的最大深度级别
- `minDepth` (`string | number`, default: `1`): 要显示的标题的最小深度级别
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  - `'all'`: 显示所有项目
  - `'onlyCurrentTree'`: 仅显示当前树中的项目（活动项目、活动项目的父项和子项）
  - `'onlySiblings'`: 仅显示当前树中的项目及其直系同级项目

### `Transform`

对元素进行缩放或变换。

#### Usage

```md
<Transform :scale="0.5">
  <YourElements />
</Transform>
```

Parameters:

- `scale` (`number | string`, default `1`): 大小比例
- `origin` (`string`, default `'top left'`): 位置

### `Tweet`

嵌入一条推文。

#### Usage

```md
<Tweet id="20" />
```

Parameters:

- `id` (`number | string`, required): 推文 id
- `scale` (`number | string`, default `1`): 大小比例
- `conversation` (`string`, default `'none'`): [推文内嵌参数](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, default `'visible'`): [推文内嵌参数](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

请见 https://sli.dev/guide/animations.html

### `VSwitch`

Switch between multiple slots based on clicks.

See https://sli.dev/guide/animations.html#enter-leave

- If the `unmount` prop is set to `true`, the previous slot will be unmounted when switching to the next slot. Default is `false`.
- Use the `tag` and `childTag` props to change the default tag of the component and its children. Default is `div`.
- Use the `transition` prop to change the transition effect. Default is `false` (disabled).

### `VDrag`

See https://sli.dev/guide/draggable.html

### `SlidevVideo`

Embed a video.

#### Usage

```md
<SlidevVideo v-click autoplay controls>
  <!-- Anything that can go in a HTML video element. -->
  <source src="/myMovie.mp4" type="video/mp4" />
  <source src="/myMovie.webm" type="video/webm" />
  <p>
    Your browser does not support videos. You may download it
    <a href="/myMovie.mp4">here</a>.
  </p>
</SlidevVideo>
```

Check [HTML video element's doc](https://developer.mozilla.org/docs/Web/HTML/Element/Video) to see what can be included in this component's slot.

Parameters:

- `controls` (`boolean`, default: `false`): show the video controls
- `autoplay` (`boolean | 'once'`, default: `false`):
  - `true` or `'once'`: start the video only once and does not restart it once ended or paused
  - `false`: never automatically start the video (rely on `controls` instead)
- `autoreset` (`'slide' | 'click'`, default: `undefined`):
  - `'slide'`: go back to the start of the video when going back to the slide
  - `'click'`: go back to the start of the video when going back to the component's click turn
- `poster` (`string | undefined`, default: `undefined`):
  - The source of the image to print when the video is not playing.
- `printPoster` (`string | undefined`, default: `undefined`):
  - The override for `poster` when printing.
- `timestamp` (`string | number`, default: `0`):
  - The starting time of the video in seconds.
- `printTimestamp` (`string | number | 'last' | undefined`, default: `undefined`):
  - The override for `timestamp` when printing.

::: warning
When exporting, the video may fail to load because Chromium does not support some video formats. In this case, you can specify the executable path of the browser. See [Chromium executable path](/guide/exporting.html#executable-path) for more information.
:::

### `Youtube`

嵌入 YouTube 视频。

#### Usage

```md
<Youtube id="luoMHjh-XcQ" />
```

Parameters:

- `id` (`string`, required): YouTube 视频 id
- `width` (`number`): 视频宽度
- `height` (`number`): 视频高度

你还可以在 id 值中添加 `?start=1234`（其中 1234 为秒）来让视频在特定时间开始播放。

## 自定义组件 {#custom-components}

在你的项目根目录里创建一个 `components/` 文件夹，然后直接把你的自定义 Vue 组件放进去；然后你就可以在你的 markdown 文件里使用该组件了！

欲了解更多，请参阅 [自定义](/custom/directory-structure#components) 章节。

## 主题提供的组件 {#theme-provided-components}

同时主题也可以提供组件。请阅读它们各自的文档，以知晓它们提供了什么。

欲了解更多，请参阅 [路径结构](/custom/directory-structure) 章节。
