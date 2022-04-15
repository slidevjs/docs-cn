---
title: 自定义
---

# 自定义 {#customizations}

从样式到工具，Slidev 都是完全可以自定义的。你可以对以下这些工具进行自定义配置（ [Vite](/custom/config-vite) ， [Windi CSS](/custom/config-windicss) ， [Monaco](/custom/config-monaco) ，等等。）

## 扉页配置 {#frontmatter-configures}

你可以在 Slidev 的第一张幻灯片扉页处（文件顶部）进行各项配置，以下是各项的默认参数。

```yaml
---
# 主题id 或 主题包名称
theme: 'default'
<<<<<<< HEAD
# 幻灯片的总标题，如果没有指定，那么将以第一张拥有标题的幻灯片的标题作为总标题
title: ''
=======
# title of your slide, will auto infer from the first header if not specified
title: 'Slidev'
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false

<<<<<<< HEAD
# 在单页（SPA）构建中启用 pdf 下载，也可以指定一个自定义 url
download: true
# 语法高亮设置，可以使用 'prism' 或 'shiki' 方案
=======
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'slidev-exported.pdf'
# syntax highlighter, can be 'prism' or 'shiki'
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
highlighter: 'prism'
# 在代码块中显示行号
lineNumbers: false
<<<<<<< HEAD
# 启用 monaco 编辑器，默认情况下仅在开发者（dev）模式中启用
=======
# enable monaco editor, can be boolean, 'dev' or 'build'
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
monaco: 'dev'
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: 'dev'

<<<<<<< HEAD
# 幻灯片的配色方案，可以使用 'auto'，'light' 或者 'dark'
colorSchema: 'auto'
# vue-router 模式，可以使用 'history' 或 'hash' 模式
=======
# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
routerMode: 'history'
# 幻灯片的长宽比
aspectRatio: '16/9'
# canvas 的真实宽度，单位为 px
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

# favicon 可以是本地文件路径，也可以是一个 URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
<<<<<<< HEAD
# 字体将从 Google 字体自动导入
# 了解更多：https://sli.dev/custom/fonts
=======
# URL of PlantUML server used to render diagrams
plantUmlServer: 'https://www.plantuml.com/plantuml'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# 为所有幻灯片添加默认的 frontmatter
defaults:
  layout: 'default'
  # ...

<<<<<<< HEAD
# 幻灯片的一些信息，可以使用 markdown 语法来书写
info: |
  ## Slidev
  我的第一个 [Slidev](http://sli.dev/) 演示!
=======
# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
---
```

你可以从 [类型定义](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) 获取到更多的配置信息。

## 目录结构 {#directory-structure}

Slidev 使用特定的目录结构来减少配置的复杂度，并使功能扩展更加的灵活和直观。

具体请参考 [目录结构](/custom/directory-structure) 章节。

## Config Tools {#config-tools}

- [语法高亮器](/custom/highlighters)
- [配置 Vue](/custom/config-vue)
- [配置 Vite](/custom/config-vite)
- [配置 Windi CSS](/custom/config-windicss)
- [配置 Monaco](/custom/config-monaco)
- [配置 KaTeX](/custom/config-katex)
- [配置 Mermaid](/custom/config-mermaid)
