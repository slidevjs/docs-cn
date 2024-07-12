---
title: 组件
---

# 组件 {#components}

### `Arrow`

绘制一个箭头。

#### 用法 {#arrow-usage}

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

### `AutoFitText`

> 实验性功能

字体大小会自动适应内容的方框。类似于 PowerPoint 或 Keynote 的文本框。

#### 用法 {#auto-fit-text-usage}

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

参数:

- `max` (`string | number`, 默认为: `100`): 最大字体大小
- `min` (`string | number`, 默认为: `30`): 最小字体大小
- `modelValue` (`string`, 默认为: `''`): 文本内容

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

- `columns` (`string | number`, 默认为: `1`): 显示的列数
- `listClass` (`string | string[]`, 默认为: `''`): 应用于目录列表的类
- `maxDepth` (`string | number`, 默认为: `Infinity`): 要显示的标题的最大深度级别
- `minDepth` (`string | number`, 默认为: `1`): 要显示的标题的最小深度级别
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, 默认为: `'all'`):
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

- `scale` (`number | string`, 默认为 `1`): 大小比例
- `origin` (`string`, 默认为 `'top left'`): 位置

### `Tweet`

嵌入一条推文。

#### Usage

```md
<Tweet id="20" />
```

参数:

- `id` (`number | string`, 必要值): 推文 id
- `scale` (`number | string`, 默认为: `1`): 大小比例
- `conversation` (`string`, 默认为: `'none'`): [推文内嵌参数](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, 默认为: `'visible'`): [推文内嵌参数](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

请见 https://sli.dev/guide/animations.html

### `Youtube`

嵌入 YouTube 视频。

#### Usage

```md
<Youtube id="luoMHjh-XcQ" />
```

Parameters:

- `id` (`string`, 必要值): YouTube 视频 id
- `width` (`number`): 视频宽度
- `height` (`number`): 视频高度

你还可以在 id 值中添加 `?start=1234`（其中 1234 为秒）来让视频在特定时间开始播放。

## 自定义组件 {#custom-components}

在你的项目根目录里创建一个 `components/` 文件夹，然后直接把你的自定义 Vue 组件放进去；然后你就可以在你的 markdown 文件里使用该组件了！

欲了解更多，请参阅 [自定义](/custom/directory-structure#components) 章节。

## 主题提供的组件 {#theme-provided-components}

同时主题也可以提供组件。请阅读它们各自的文档，以知晓它们提供了什么。

欲了解更多，请参阅 [路径结构](/custom/directory-structure) 章节。
