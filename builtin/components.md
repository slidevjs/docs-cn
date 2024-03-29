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

Or:

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

参数：

- `x1` (`string | number`, required): start point x position
- `y1` (`string | number`, required): start point y position
- `x2` (`string | number`, required): end point x position
- `y2` (`string | number`, required): end point x position
- `width` (`string | number`, default: `2`): line width
- `color` (`string`, default: `'currentColor'`): line color

### `AutoFitText`

> Experimental

Box inside which the font size will automatically adapt to fit the content. Similar to PowerPoint or Keynote TextBox.

#### Usage

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

Parameters:

- `max` (`string | number`, default `100`): Maximum font size
- `min` (`string | number`, default `30`): Minimum font size
- `modelValue` (`string`, default `''`): text content

### `LightOrDark`

Use it to display one thing or another depending on the active light or dark theme.

#### Usage

Use it with the two named Slots `#dark` and `#light`:

```md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
```

Provided props on `LightOrDark` component will be available using scoped slot props:

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

You can provide markdown in the slots, but you will need to surround the content with blank lines:

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

- `to` (`string | number`): The path of the slide to navigate to (slides starts from `1`)
- `title` (`string`): The title to display

One can use a string as `to`, provided the corresponding route exists, e.g.

```md
---
routeAlias: solutions
---

# Now some solutions!
```

### `RenderWhen`

Render slot only when the context match (for example when we are in presenter view).

#### Usage

```md
<RenderWhen context="presenter">This will only be rendered in presenter view.</RenderWhen>
```

Context type: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Parameters:

- `context` (`Context | Context[]`): context or array of contexts you want the slot to be rendered

### `SlideCurrentNo`

Current slide number.

#### Usage

```md
<SlideCurrentNo />
```

### `SlidesTotal`

Total number of slides.

#### Usage

```md
<SlidesTotal />
```

### `Titles` {#titles}

在一个被解析为 HTML 的幻灯片中插入主标题

标题和标题级别会自动从每张幻灯片的第一个标题元素中检索出来。

You can override this automatic behaviour for a slide by using the front matter syntax:

```yml
---
title: Amazing slide title
level: 2
---
```

#### 用法 {#titles-usage}

The `<Titles>` component is a virtual component you can import with:

```js
import Titles from '/@slidev/titles.md'
```

Then you can use it with:

```md
<Titles no="42" />
```

参数：

- `no` (`string | number`): The number of the slide to display the title from (slides starts from `1`)

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

Parameters:

- `columns` (`string | number`, default: `1`): The number of columns of the display
- `listClass` (`string | string[]`, default: `''`): Classes to apply to the table of contents list
- `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
- `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  - `'all'`: Display all items
  - `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  - `'onlySiblings'`: Display only items that are in current tree and their direct siblings

### `Transform`

Apply scaling or transforming to elements.

#### Usage

```md
<Transform :scale="0.5">
  <YourElements />
</Transform>
```

Parameters:

- `scale` (`number | string`, default `1`): transform scale value
- `origin` (`string`, default `'top left'`): transform origin value

### `Tweet`

Embed a tweet.

#### Usage

```md
<Tweet id="20" />
```

Parameters:

- `id` (`number | string`, required): id of the tweet
- `scale` (`number | string`, default `1`): transform scale value
- `conversation` (`string`, default `'none'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, default `'visible'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

See https://sli.dev/guide/animations.html

### `Youtube`

Embed a youtube video.

#### Usage

```md
<Youtube id="luoMHjh-XcQ" />
```

Parameters:

- `id` (`string`, required): id of the youtube video
- `width` (`number`): width of the video
- `height` (`number`): height of the video

You can also make the video start at specific time if you add `?start=1234` to the id value (where 1234 are seconds),

## 自定义组件 {#custom-components}

在你的项目根目录里创建一个 `components/` 文件夹，然后直接把你的自定义 Vue 组件放进去；然后你就可以在你的 markdown 文件里使用该组件啦！

欲了解更多，请参阅 [自定义](/custom/directory-structure#components) 章节。

## 主题提供的组件 {#theme-provided-components}

同时主题也可以提供组件。请阅读它们各自的文档，以知晓它们提供了什么。

欲了解更多，请参阅 [路径结构](/custom/directory-structure) 章节。
