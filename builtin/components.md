# 内置组件

本页列出了 Slidev 的所有内置组件。这些组件可以在你的幻灯片中**直接**使用，无需显式导入。

需要注意的是，<LinkInline link="guide/theme-addon" /> 可以提供额外的组件。要添加自己的组件，请参见 <LinkInline link="guide/component#write" />。

## `Arrow`

绘制一个箭头。

### 使用方式

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

或者:

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

参数：

- `x1` (`string | number`, 必要值): 起始 x 位置
- `y1` (`string | number`, 必要值): 起始 y 位置
- `x2` (`string | number`, 必要值): 终点 x 位置
- `y2` (`string | number`, 必要值): 终点 y 位置
- `width` (`string | number`, 默认为: `2`): 线宽
- `color` (`string`, 默认为: `'currentColor'`): 颜色
- `two-way` (`boolean`, 默认为: `false`): 是否为双向箭头

## `VDragArrow`

类似 `Arrow` 组件，但可以拖动。

### 使用方式

<LinkCard link="features/draggable#draggable-arrow" />

与箭头位置无关的参数与 [`Arrow` 组件](#arrow) 相同。

## `AutoFitText`

> 实验性功能

字体大小会自动适应内容的方框。类似于 PowerPoint 或 Keynote 的文本框。

### 用法 {#auto-fit-text-使用方式}

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

参数:

- `max` (`string | number`, 默认为: `100`): 最大字体大小
- `min` (`string | number`, 默认为: `30`): 最小字体大小
- `modelValue` (`string`, 默认为: `''`): 文本内容

## `LightOrDark`

你可以使用它来根据当前的主题色(亮色或暗色)，显示不同的内容。

### 用法 {#light-or-dark-使用方式}

与 `#dark` 和 `#light` 插槽一起使用：

```md
<LightOrDark>
  <template #dark>正在使用暗色主题</template>
  <template #light>正在使用亮色主题</template>
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

## `Link`

插入一个链接，你可以用它来导航到一个指定的幻灯片。

### 使用方式

```md
<Link to="42">跳转到第 42 张 slide</Link>
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

# 现在来些解决方案！
```

## `PoweredBySlidev`

添加一个带有指向 slidev 网站的 “Powered by Slidev” 标志到幻灯片信息中。
你可以在导航栏中点击<carbon-information class="inline-icon-btn"/>来查看

## `RenderWhen`

插槽仅在上下文满足条件时（如处于演示者视图中时）才会渲染。

### 使用方式

```md
<RenderWhen context="presenter">这只会在演讲者视图中显示。</RenderWhen>
```

context 的类型: `'main' | 'visible' | 'print' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

尝试:

- `context` (`Context | Context[]`): 要求的渲染上下文或渲染上下文数组
  - `'main'`: 在幻灯片和演示者视图中渲染（相当于 ['slide', 'presenter']）,
  - `'visible'`: 如果当前可见则渲染
  - `'print'`: 在打印模式下渲染
  - `'slide'`: 在普通播放模式中渲染
  - `'overview'`: 在概览中渲染
  - `'presenter'`: 在演示者视图中渲染
  - `'previewNext'`: 在演示者的下一张幻灯片视图中渲染

插槽:

- `#default`: 在 context 符合时显示
- `#fallback`: 在 context 不符合时显示

## `SlideCurrentNo`

当前幻灯片编号。

### 使用方式

```md
<SlideCurrentNo />
```

## `SlidesTotal`

幻灯片总数。

### 使用方式

```md
<SlidesTotal />
```

## `TitleRenderer`

在一个被解析为 HTML 的幻灯片中插入主标题

标题和标题级别会自动从每张幻灯片的第一个标题元素中检索出来。

您可以使用 front matter 语法来覆盖幻灯片的这种自动行为：

```yml
---
title: 一个令人惊叹的标题
level: 2
---
```

### 使用方式

`<TitleRenderer>` 组件是一个虚拟组件，可以使用以下方式导入：

```js
import TitleRenderer from '#slidev/title-renderer'
```

然后像这样使用：

```md
<TitleRenderer no="42" />
```

参数:

- `no` (`string | number`): 显示标题的幻灯片编号（幻灯片从 `1` 开始）

## `Toc`

插入目录

如果你想让一张幻灯片不出现在 `<Toc>` 组件中，你可以在幻灯片的 matter 块中使用 `hideInToc` 属性：


```yml
---
hideInToc: true
---
```

标题使用 [`<Titles>` 组件](#titles) 来展示。

### 使用方式

```md
<Toc />
```

参数：

- `columns` (`string | number`, 默认为: `1`): 显示的列数
- `listClass` (`string | string[]`, 默认为: `''`): 应用于目录列表的类
- `maxDepth` (`string | number`, 默认为: `Infinity`): 要显示的标题的最大深度级别
- `minDepth` (`string | number`, 默认为: `1`): 要显示的标题的最小深度级别
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, 默认为: `'all'`):
  - `'all'`: 显示所有项目
  - `'onlyCurrentTree'`: 仅显示当前树中的项目（活动项目、活动项目的父项和子项）
  - `'onlySiblings'`: 仅显示当前树中的项目及其直系同级项目

## `Transform`

为元素应用缩放变换。

### 使用方式

```md
<Transform :scale="0.5">
  <YourElements />
</Transform>
```

参数:

- `scale` (`number | string`, 默认为 `1`): 大小比例
- `origin` (`string`, 默认为 `'top left'`): 原点位置

## `Tweet`

嵌入一条推文。

### 使用方式

```md
<Tweet id="20" />
```

参数:

- `id` (`number | string`, 必要值): 推文 id
- `scale` (`number | string`, 默认为: `1`): 大小比例
- `conversation` (`string`, 默认为: `'none'`): [推文内嵌参数](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, 默认为: `'visible'`): [推文内嵌参数](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

## `VAfter`, `VClick` 以及 `VClicks`

<LinkCard link="guide/animations#click-animation" />

## `VSwitch`

根据点击动画切换显示的插槽。

<LinkCard link="guide/animations#enter-leave" />

- 当 `unmount` 属性设置为 `true` 时，切换到下一个插槽时，上一个插槽的内容将被卸载。默认为 `false`。
- 使用 `tag` 和 `childTag` 属性来更改组件及其子元素的默认标签。默认为 `div`。
- 使用 `transition` 属性来更改过渡效果。默认为 `false`（禁用）。

## `VDrag`

<LinkCard link="features/draggable" />

## `SlidevVideo`

嵌入一个视频。

### 使用方式

```md
<SlidevVideo v-click autoplay controls>
  <!-- 可以加入 HTML video 元素中能包含的任何内容。 -->
  <source src="/myMovie.mp4" type="video/mp4" />
  <source src="/myMovie.webm" type="video/webm" />
  <p>
    你的浏览器不支持播放该视频，请点击
    <a href="/myMovie.mp4">此处</a>
    下载。
  </p>
</SlidevVideo>
```

查阅 [HTML video 元素文档](https://developer.mozilla.org/docs/Web/HTML/Element/Video) 以了解可以包含在此组件插槽中的内容。

参数:

- `controls` (`boolean`, 默认为 `false`): 显示视频控件
- `autoplay` (`boolean | 'once'`, 默认为 `false`):
  - `true` 或 `'once'`: 仅播放一次视频，结束或暂停后不会重新开始
  - `false`: 从不自动播放视频（依赖于 `controls`）
- `autoreset` (`'slide' | 'click'`, 默认为 `undefined`):
  - `'slide'`: 返回到幻灯片时重新开始视频
  - `'click'`: 返回到组件的点击轮次时重新开始视频
- `poster` (`string | undefined`, 默认为 `undefined`):
  - 视频未播放时显示的图像源。
- `printPoster` (`string | undefined`, 默认为 `undefined`):
  - 打印时 `poster` 的覆盖。
- `timestamp` (`string | number`, 默认为 `0`):
  - 视频的开始时间（秒）。
- `printTimestamp` (`string | number | 'last' | undefined`, 默认为 `undefined`):
  - 打印时 `timestamp` 的覆盖。

::: warning
在导出时，视频可能无法加载，因为 Chromium 不支持某些视频格式。在这种情况下，你可以指定浏览器的可执行路径。更多信息请参见 [配置 Chromium 可执行路径](/guide/exporting.html#executable-path)。
:::

## `Youtube`

嵌入 YouTube 视频。

### 使用方式

```md
<Youtube id="luoMHjh-XcQ" />
```

Props:

- `id` (`string`, 必要值): YouTube 视频 id
- `width` (`number`): 视频宽度
- `height` (`number`): 视频高度

你还可以在 id 值中添加 `?start=1234`（其中 1234 为秒）来让视频在特定时间开始播放。
