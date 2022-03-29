---
title: 组件
---

# 组件 {#components}

## 内置组件 {#built-in-components}

> 这部分文档尚未完成。在完成之前，你可以直接去看看 [源码](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin)。

### `TOC` {#toc}

插入目录。

目录的标题和标题层级根据每张幻灯片上的第一个标题元素自动生成。

可以使用前端语法覆盖幻灯片的这种自动生成目录行为：
```yml
---
title: Amazing slide title
level: 2
---
```

如果你不希望在幻灯片中出现目录，可以使用：
```yml
---
hideInToc: true
---
```

#### 用法 {#usage}
~~~md
<Toc />
~~~

参数：

* `columns` (`string | number`, 默认值：`1`)：显示的列数
* `maxDepth` (`string | number`, 默认值：`Infinity`): 显示标题的最大层级
* `minDepth` (`string | number`,  默认值：`1`): 显示标题的最小层级
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`,  默认值：`'all'`):
  * `'all'`: 显示全部元素
  * `'onlyCurrentTree'`: 仅显示包含当前页面的树中的元素(活动元素，活动元素的父项和子项)
  * `'onlySiblings'`: 仅显示包含当前页面树中的元素及其兄弟元素

## 自定义组件 {#custom-components}

在你的项目根目录里创建一个 `components/` 文件夹，然后直接把你的自定义 Vue 组件放进去；然后你就可以在你的 markdown 文件里使用该组件啦！

欲了解更多，请参阅 [自定义](/custom/directory-structure#components) 章节。

## 主题提供的组件 {#theme-provided-components}

同时主题也可以提供组件。请阅读它们各自的文档，以知晓它们提供了什么。

欲了解更多，请参阅 [路径结构](/custom/directory-structure) 章节。
