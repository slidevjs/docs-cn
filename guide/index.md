---
outline: deep
---

# 快速上手 {#getting-started}

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> 是基于 Web 的幻灯片制作和演示工具。它旨在让开发者专注在 Markdown 中编写内容，同时拥有支持 HTML 和 Vue 组件的能力，并且能够呈现像素级完美的布局，还在你的演讲稿中内置了互动的演示样例。

::: tip 温馨提示

你可以在 <LinkInline link="guide/why" /> 中进一步了解 Slidev 背后的原理。

:::

<!--
- 📝 [**Markdown-based**](/guide/syntax) - focus on content and use your favorite editor
- 🧑‍💻 [**Developer Friendly**](/guide/syntax#code-blocks) - built-in code highlighting, live coding, etc.
- 🎨 [**Themable**](/resources/theme-gallery) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax#embedded-styles) - on-demand utilities via [UnoCSS](https://github.com/unocss/unocss).
- 🤹 [**Interactive**](/custom/directory-structure#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/ui#presenter-mode) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/features/drawing) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax#diagrams) - creates diagrams using textual descriptions with [Mermaid.js](https://mermaid.js.org/)
- 🌟 [**Icons**](/guide/syntax#icons) - access to icons from any icon set directly
- 💻 [**Editor**](/guide/index#editor) - integrated editor, or the [VSCode extension](/features/vscode-extension)
- 🎥 [**Recording**](/features/recording) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting) - export into PDF, PNGs, or PPTX
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/) - using Vite plugins, Vue components, or any npm packages
-->

<!-- <FeaturesAnimation /> -->

## 创建幻灯片 {#create-slides}

### 在线体验 {#try-it-online}

你可以使用 StackBlitz 在浏览器中直接体验 Slidev：[sli.dev/new](https://sli.dev/new)

### 本地创建 {#create-locally}

> 要求 [Node.js](https://nodejs.org) 最低版本满足 >= 18.0。

你可以在本地运行以下命令，创建一个新的 Slidev 项目：

::: code-group

```bash [npm]
npm init slidev@latest
```

```bash [pnpm]
pnpm create slidev
```

```bash [yarn]
yarn create slidev
```

:::

根据提示开始创建你的幻灯片吧！创建成功后，幻灯片的内容将存放在 `slides.md` 中，其中预置了大多数 Slidev 功能的演示。如果你想要了解关于 Markdown 的语法，请阅读 <LinkInline link="guide/syntax" />。

:::: details 单文件用法（不推荐）

如果你倾向于使用单个 Markdown 文件作为幻灯片，你也可以全局安装 Slidev CLI：

::: code-group

```bash [npm]
npm i -g @slidev/cli
```

```bash [pnpm]
pnpm i -g @slidev/cli
```

```bash [yarn]
yarn global add @slidev/cli
```

:::

之后，你可以通过以下方式创建并启动单个文件幻灯片：

```bash
slidev slides.md
```

::::

## 基础命令 {#basic-commands}

Slidev 在其命令行工具中提供了一系列命令。以下是一些常用的命令：

- `slidev` - 启动开发服务器。细节请参见 [dev 命令](../builtin/cli#dev)
- `slidev export` - 将幻灯片导出为 PDF、PPTX 或 PNG 文件。细节请参见 <LinkInline link="guide/exporting" />
- `slidev build` - 将幻灯片构建为静态网页。细节请参见 <LinkInline link="guide/hosting" />
- `slidev format` - 将幻灯片格式化。细节请参见 [format 命令](../builtin/cli#format)
- `slidev --help` - 显示帮助信息

想要运行这些命令，你可以将它们添加到 `package.json` 文件的脚本中（如果项目是通过 `npm init slidev` 命令创建的，那上述命令将在项目创建时通过初始化脚本为你做好预设）：

```json
{
  "scripts": {
    "dev": "slidev --open",
    "build": "slidev build",
    "export": "slidev export"
  }
}
```

之后，你可以轻松的使用 `npm run dev`、`npm run build` 和 `npm run export` 命令了。

有关 Slidev 命令行的更多信息，请查看[命令行指南]（../builtin/CLI）。

## 编辑器配置 {#editor}

由于 Slidev 使用 Markdown 作为源文件，你可以使用任何你喜欢的编辑器来创建幻灯片。我们还提供了一些工具，帮助你更方便地编辑幻灯片：

<LinkCard link="features/vscode-extension" />
<LinkCard link="features/side-editor" />
<LinkCard link="features/prettier-plugin" />

## 加入社区 {#join-the-community}

你可以加入官方 [Discord 服务器](https://chat.sli.dev/) 以获得帮助、分享你的幻灯片或讨论任何有关 Slidev 的话题。

如果你遇到问题，请随时在 [GitHub](https://github.com/slidevjs/slidev/issues/new/choose) 上创建 Issue。

## 技术栈 {#tech-stack}

Slidev 使用了以下工具和技术栈。得益于它们，让 Slidev 变得无限可能。

- [Vite](https://vitejs.dev) - 一个高效极速的前端开发服务器
- 基于 [Vue 3](https://v3.vuejs.org/) 驱动的 [Markdown](https://daringfireball.net/projects/markdown/syntax) - 专注内容的同时，具备 HTML 和 Vue 组件的强大能力
- [UnoCSS](https://github.com/unocss/unocss) - 按需、实用类优先的 CSS 框架，轻松定制你的幻灯片样式
-
- [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - 具有实时编码能力的一流代码片段支持
- [RecordRTC](https://recordrtc.org) - 内置录制功能和摄像头视图
- [VueUse](https://vueuse.org) 家族 - [`@vueuse/core`](https://github.com/vueuse/vueuse)、[`@vueuse/head`](https://github.com/vueuse/head)、[`@vueuse/motion`](https://github.com/vueuse/motion) 等。
- [Iconify](https://iconify.design/) - 图标库集合
- [Drauu](https://github.com/antfu/drauu) - 支持绘图和批注
- [KaTeX](https://katex.org/) - LaTeX 数学公式渲染
- [Mermaid](https://mermaid-js.github.io/mermaid) - 基于文本的图表描述语言
