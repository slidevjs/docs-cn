---
title: 自定义
---

<<<<<<< HEAD
# 自定义 {#customizations}
=======
Slidev is fully customizable, from styling to tooling configurations. It allows you to configure the tools underneath ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco), etc.)
>>>>>>> 19d3ad78801d41f8e35b2c2f4cbeecc8b90afaea

从样式到工具，Slidev 都是完全可以自定义的。你可以对以下这些工具进行自定义配置（ [Vite](/custom/config-vite) ， [Windi CSS](/custom/config-windicss) ， [Monaco](/custom/config-monaco) ，等等。）

## 扉页配置 {#frontmatter-configures}

你可以在 Slidev 的第一张幻灯片扉页处（文件顶部）进行各项配置，以下是各项的默认参数。

```yaml
---
# 主题id 或 主题包名称
# 了解更多：https://sli.dev/themes/use.html
theme: 'default'
# 幻灯片的总标题，如果没有指定，那么将以第一张拥有标题的幻灯片的标题作为总标题
title: 'Slidev'
# 网页的标题模板，`%s` 会被页面的标题替换
titleTemplate: '%s - Slidev'
# 幻灯片信息，可以是一个 markdown 字符串
info: false

# 激活演讲者模式，可以是 boolean 类型、'dev' 或 'build'
presenter: true
# 在单页（SPA）构建中启用 pdf 下载，也可以指定一个自定义 url
download: false
# 要导出文件的文件名称
exportFilename: 'slidev-exported'
<<<<<<< HEAD
# 语法高亮设置，可以使用 'prism' 或 'shiki' 方案
=======
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# syntax highlighter, can be 'prism' or 'shiki'
>>>>>>> 19d3ad78801d41f8e35b2c2f4cbeecc8b90afaea
highlighter: 'prism'
# 在代码块中显示行号
lineNumbers: false
# 启用 monaco 编辑器，可以是 boolean，'dev' 或者 'build'
monaco: 'dev'
# 使用 vite-plugin-remote-assets 在本地下载远程资源，可以是 boolean，'dev' 或者 'build'
remoteAssets: false
# 控制幻灯片中的文本是否可以选择
selectable: true
# 启用幻灯片录制，可以是 boolean，'dev' 或者 'build'
record: 'dev'

# 幻灯片的配色方案，可以使用 'auto'，'light' 或者 'dark'
colorSchema: 'auto'
# vue-router 模式，可以使用 'history' 或 'hash' 模式
routerMode: 'history'
# 幻灯片的长宽比
aspectRatio: '16/9'
# canvas 的真实宽度，单位为 px
canvasWidth: 980
# 用于主题定制，会将属性 `x` 注入根样式 `--slidev-theme-x`
themeConfig:
  primary: '#5d8392'

# favicon 可以是本地文件路径，也可以是一个 URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# 用于渲染图表的 PlantUML 服务器的 URL
plantUmlServer: 'https://www.plantuml.com/plantuml'
# 字体将从 Google 字体自动导入
# 了解更多：https://sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# 为所有幻灯片添加默认的 frontmatter
defaults:
  layout: 'default'
  # ...

# 绘制选项
# 了解更多：https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML tag attributes
htmlAttrs:
  dir: 'ltr'
  lang: 'en'
---
```

你可以从 [类型定义](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) 获取到更多的配置信息。

<<<<<<< HEAD
## 目录结构 {#directory-structure}
=======
## Per slide configuration

In addition, every slide accepts the following configuration in the Frontmatter block:

* `clicks` (`number`): Custom clicks count (learn more [here](/guide/animations.html#custom-clicks-count)).
* `disabled` (`boolean`): Completely disable the slide.
* `hide` (`boolean`): Hide sub-slides when using `src` (learn more [here](/guide/syntax.html#multiple-entries)).
* `hideInToc` (`boolean`): Hide the slide for the `<Toc>` components (learn more [here](/builtin/components.html#toc)).
* `layout` (`string`): Defines the layout component applied to the slide (learn more [here](/guide/syntax.html#front-matter-layouts) and [here](/builtin/layouts.html)).
* `level` (`number`): Override the title level for the `<Title>` and `<Toc>` components (only if `title` has also been declared, learn more [here](/builtin/components.html#titles)).
* `preload` (`boolean`, default `true`): preload the next slide (learn more [here](/guide/animations.html#motion)).
* `routeAlias` (`string`): create a route alias that can be used in the URL or with the `<Link>` component (learn more [here](/builtin/components.html#link)).
* `src` (`string`): Includes a markdown file (learn more [here](/guide/syntax.html#multiple-entries)).
* `title` (`string`): Override the title for the `<Title>` and `<Toc>` components (learn more [here](/builtin/components.html#titles)).
* `transition` (`string | TransitionProps`): Defines the transition between the slide and the next one (learn more [here](/guide/animations.html#slide-transitions)).

## Directory Structure
>>>>>>> 19d3ad78801d41f8e35b2c2f4cbeecc8b90afaea

Slidev 使用特定的目录结构来减少配置的复杂度，并使功能扩展更加的灵活和直观。

具体请参考 [目录结构](/custom/directory-structure) 章节。

## Config Tools {#config-tools}

<<<<<<< HEAD
- [语法高亮器](/custom/highlighters)
- [配置 Vue](/custom/config-vue)
- [配置 Vite](/custom/config-vite)
- [配置 Windi CSS](/custom/config-windicss)
- [配置 Monaco](/custom/config-monaco)
- [配置 KaTeX](/custom/config-katex)
- [配置 Mermaid](/custom/config-mermaid)
=======
- [Highlighters](/custom/highlighters)
- [Configure Vue](/custom/config-vue)
- [Configure Vite](/custom/config-vite)
- [Configure UnoCSS](/custom/config-unocss)
- [Configure Windi CSS](/custom/config-windicss)
- [Configure Monaco](/custom/config-monaco)
- [Configure KaTeX](/custom/config-katex)
- [Configure Mermaid](/custom/config-mermaid)
>>>>>>> 19d3ad78801d41f8e35b2c2f4cbeecc8b90afaea
