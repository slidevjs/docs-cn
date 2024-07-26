---
title: 自定义
---

从样式到工具，Slidev 都是完全可以自定义的。你可以对以下这些工具进行自定义配置（ [Vite](/custom/config-vite) ，  [UnoCSS](/custom/config-unocss)， [Monaco](/custom/config-monaco) ，等等。）

## 扉页配置 {#headmatter}

你可以在 Slidev 的第一张幻灯片扉页处（文件顶部）进行各项配置，以下是各项的默认参数。


```yaml
---
# 主题 id 或 主题包名称
# 了解更多：https://cn.sli.dev/guide/theme-addon#use-theme
theme: default
# 附加组件, 一个可以含包名或本地路径的数组。
# 了解更多： https://cn.sli.dev/guide/theme-addon#use-addon
addons: []
# 幻灯片的总标题，如果没有指定，那么将以第一张拥有标题的幻灯片的标题作为总标题。
title: Slidev
# 网页的标题模板，`%s` 会被页面的标题替换。
titleTemplate: '%s - Slidev'
# 幻灯片信息，可以是一个 markdown 字符串。
info: false
# 导出的 PDF 或 PPTX 文件中的作者字段。
author: Your Name Here
# 导出的 PDF 文件中的关键字，以逗号分割。
keywords: keyword1,keyword2

# 启用演讲者模式，可以是一个 boolean 值、'dev' 或 'build'
presenter: true
# 在单页（SPA）构建中启用 pdf 下载，也可以指定一个自定义 url
download: false
# 要导出文件的文件名称
exportFilename: slidev-exported
# 导出选项
# 使用驼峰命名法的导出 CLI 选项
# 了解更多： https://cn.sli.dev/guide/exporting
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# 语法高亮设置，可以使用 'prism' 或 'shiki'(已弃用) 方案
highlighter: shiki
# 启用 twoslash, 可以是一个 boolean 值、'dev' 或 'build'
twoslash: true
# 在代码块中显示行号
lineNumbers: false
# 启用 monaco 编辑器，可以是一个 boolean 值，'dev' 或 'build'
monaco: true
# 从何处加载 monaco 的类型，可以是 'cdn'， 'local' 或 ‘none’
monacoTypesSource: local
# 指定额外的本地包以导入 monaco 类型
monacoTypesAdditionalPackages: []
# 指定额外的本地模块作为 monaco 可运行的依赖项
monacoRunAdditionalDeps: []
# 使用 vite-plugin-remote-assets 在本地下载远程资源，可以是一个 boolean 值，'dev' 或者 'build'
remoteAssets: false
# 控制幻灯片中的文本是否可以被选择
selectable: true
# 启用幻灯片录制，可以是一个 boolean 值，'dev' 或者 'build'
record: dev
# 启用 Slidev 的前后文菜单，可以是一个 boolean 值，'dev' 或者 'build'
contextMenu: true
# 防止休眠，可以是一个 boolean 值，'dev' 或者 'build'
wakeLock: true

# 幻灯片的配色方案，可以使用 'auto'，'light' 或者 'dark'
colorSchema: auto
# vue-router 模式，可以使用 'history' 或 'hash' 模式
routerMode: history
# 幻灯片的长宽比
aspectRatio: 16/9
# canvas 的真实宽度，单位为 px
canvasWidth: 980
# 用于主题定制，会将属性 `x` 注入根样式 `--slidev-theme-x`
themeConfig:
  primary: '#5d8392'

# favicon 可以是本地文件路径，也可以是一个 URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# 用于渲染图表的 PlantUML 服务器的 URL
# 了解更多： https://cn.sli.dev/features/plantuml.html
plantUmlServer: https://www.plantuml.com/plantuml
# 字体将从 Google 字体自动导入
# 了解更多： https://cn.sli.dev/custom/config-fonts
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# 为所有幻灯片添加默认的 frontmatter
defaults:
  layout: default
  # ...

# 绘制选项
# 了解更多：https://cn.sli.dev/features/drawing
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML 标签属性
htmlAttrs:
  dir: ltr
  lang: en
---
```

你可以从 [类型定义](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) 获取到更多的配置信息。

## 单页幻灯片配置 {#frontmatter}

此外，每张幻灯片都允许单独声明以下 Frontmatter 配置：
以下为相应 frontmatter 默认值

```yaml
---
# 自定义点击计数
# 了解更多： https://cn.sli.dev/guide/animations#custom-total-clicks-count
clicks: 0
# 自定义初始点击次数
clicksStart: 0
# 完全禁用和隐藏幻灯片
disabled: false
# 作用参考 `disabled` 配置。
hide: false
# 为 `<Toc>` 组件隐藏幻灯片
hideInToc: false
# 定义应用于幻灯片的布局组件
layout: <"cover" if the slide is the first slide, otherwise "default">
# 仅当同时声明了 `title` 配置时，为 `<TitleRenderer>` 和 `<Toc>` 提供组件级的标题覆盖
level: 1
# 预加载下一张幻灯片
preload: true
# 创建一个路由别名，可用于 URL 或 `<Link>` 组件
routeAlias: undefined # 或 string
# 引入一个 Markdown 文件
# 了解更多： https://cn.sli.dev/guide/syntax.html#importing-slides
src: undefined # 或 string
# 仅当同时声明了 `level` 配置时，覆盖 `<TitleRenderer>` 和 `<Toc>` 组件的标题
title: undefined # 或 string
# 定义幻灯片与下一张幻灯片之间的过渡
# 了解更多： https://cn.sli.dev/guide/animations.html#slide-transitions
transition: undefined # 或 string | TransitionProps
# 自定义缩放比例
# 适用于内容较多的幻灯片
zoom: 1
# 用于可拖动元素的位置
# 了解更多： https://cn.sli.dev/features/draggable.html
dragPos: {} # 类型: Record<string,string>
---
```

## 目录结构

Slidev 使用特定的目录结构来减少配置的复杂度，并使功能扩展更加的灵活和直观。

具体请参考 [目录结构](/custom/directory-structure) 章节。

## 配置工具

<script setup>
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import customizations from '../.vitepress/customizations'
</script>

<li v-for="c of customizations.slice(2)" :key="c.text">
  <VPLink :href="c.link">
    {{ c.text }}
  </VPLink>
</li>
