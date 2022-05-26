---
title: 组件
---

# 组件 {#components}

## 内置组件 {#built-in-components}

> 这部分文档尚未完成。在完成之前，你可以直接去看看 [源码](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin)。

### `Toc` {#toc}

插入目录。

如果你想让一张幻灯片不出现在 `<Toc>` 组件中，你可以在幻灯片的 matter 块中使用如下属性：
```yml
---
hideInToc: true
---
```

标题使用 [`<Titles>` 组件](#titles) 来展示

#### 用法 {#toc-usage}

~~~md
<Toc />
~~~

参数：

* `columns` (`string | number`，默认值：`1`)：要显示的列数The number of columns of the display
* `listClass` (`string | string[]`，默认值：`''`)：用于修饰目录的 class
* `maxDepth` (`string | number`，默认值：`Infinity`)：要显示标题的最大深度
* `minDepth` (`string | number`，默认值：`1`)：要显示标题的最小深度
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`，默认值：`'all'`):
  * `'all'`：显示所有项目
  * `'onlyCurrentTree'`：只显示当前树中的项目（活跃的项目，及其父节点以及子节点）
  * `'onlySiblings'`：只显示当前树中的项目和它们的直接兄弟姐妹

### `Link` {#link}

插入一个链接，你可以用它来导航到一个指定的幻灯片。

#### 用法 {#link-usage}

~~~md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
~~~

参数：

* `to` (`string | number`)：幻灯片的路径，以导航到对应位置（幻灯片下标从 `1` 开始）
* `title` (`string`)：要显示的标题

### `Titles` {#titles}

在一个被解析为 HTML 的幻灯片中插入主标题

标题和标题级别会自动从每张幻灯片的第一个标题元素中检索出来。

目录的标题和标题层级根据每张幻灯片上的第一个标题元素自动生成。

可以使用前端语法覆盖幻灯片的这种自动生成目录行为：
```yml
---
title: Amazing slide title
level: 2
---
```

#### 用法 {#titles-usage}

`<Titles>` 组件是一个虚拟组件，你可以使用如下方式导入：
```js
import Titles from '/@slidev/titles.md'
```

然后你可以这样使用：
~~~md
<Titles no="42" />
~~~

参数：

* `no` (`string | number`): 显示标题的幻灯片编号（幻灯片下标从 `1` 开始）

## 自定义组件 {#custom-components}

在你的项目根目录里创建一个 `components/` 文件夹，然后直接把你的自定义 Vue 组件放进去；然后你就可以在你的 markdown 文件里使用该组件啦！

欲了解更多，请参阅 [自定义](/custom/directory-structure#components) 章节。

## 主题提供的组件 {#theme-provided-components}

同时主题也可以提供组件。请阅读它们各自的文档，以知晓它们提供了什么。

欲了解更多，请参阅 [路径结构](/custom/directory-structure) 章节。
