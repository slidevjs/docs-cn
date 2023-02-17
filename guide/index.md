---
title: 开始使用
---

# 开始使用 {#getting-started}

<<<<<<< HEAD
## 总览 {#overview}
=======
Slidev <sup>(slide + dev, **/slʌɪdɪv/**)</sup> is a web-based slides maker and presenter. It's designed for developers to focus on writing content in Markdown while also having the power of HTML and Vue components to deliver pixel-perfect layouts and designs with embedded interactive demos in your presentations.
>>>>>>> 7f25ea87516174a4aad5140a81bf55677df906c1

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> 是基于 Web 的幻灯片制作和演示工具。它旨在让开发者专注在 Markdown 中编写内容，同时拥有支持 HTML 和 Vue 组件的能力，并且能够呈现像素级完美的布局，还在你的演讲稿中内置了互动的演示样例。

它使用了功能丰富的 markdown 文件来生成精美的幻灯片，具有即时重载的体验。它还拥有很多内置的集成功能，如实时编码、导出 PDF、演讲录制等。由于 Slidev 是由 web 驱动的，因此你可以使用它进行任何操作 —— 具有无限的可能性。

你可以在 [为什么选 Slidev](/guide/why) 部分了解更多关于本项目的设计初衷。

### 功能 {#features}

- 📝 [**Markdown 支持**](/guide/syntax.html) —— 使用你最喜欢的编辑器和工作流编写 Markdown 文件
- 🧑‍💻 [**开发者友好**](/guide/syntax.html#code-blocks) —— 内置代码高亮、实时编码等功能
- 🎨 [**可定制主题**](/themes/gallery.html) —— 以 npm 包的形式共享、使用主题
- 🌈 [**灵活样式**](/guide/syntax.html#embedded-styles) —— 使用 [Windi CSS](https://windicss.org/) 按需使用的实用类和 [UnoCSS](https://github.com/unocss/unocss)
- 🤹 [**可交互**](/custom/directory-structure.html#components) —— 无缝嵌入 Vue 组件
- 🎙 [**演讲者模式**](/guide/presenter-mode.html) —— 可以使用另一个窗口，甚至是你的手机来控制幻灯片
- 🎨 [**绘图**](/guide/drawing.html) - 在你的幻灯片上进行绘图和批注
- 🧮 [**LaTeX 支持**](/guide/syntax.html#latex) —— 内置了对 LaTeX 数学公示的支持
- 📰 [**图表支持**](/guide/syntax.html#diagrams) —— 使用文本描述语言创建图表
- 🌟 [**图标**](/guide/syntax.html#icons) —— 能够直接从任意图标库中获取图标
- 💻 [**编辑器**](/guide/editors.html) —— 集成的编辑器，或者使用 [VS Code 扩展](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**演讲录制**](/guide/recording.html) —— 内置录制功能和摄像头视图
- 📤 [**跨平台**](/guide/exporting.html) —— 能够导出 PDF、PNG 文件，甚至是一个可以托管的单页应用
- ⚡️ [**快速**](https://vitejs.dev) —— 基于 [Vite](https://vitejs.dev) 的即时重载
- 🛠 [**可配置**](/custom/config-vite.html) —— 支持使用 Vite 插件、Vue 组件以及任何的 npm 包

### 技术栈 {#tech-stack}

Slidev 使用了如下的工具和技术：

- [Vite](https://vitejs.dev) —— 一款极速的前端工具
- 基于 [Vue 3](https://v3.vuejs.org/) 的 [Markdown](https://daringfireball.net/projects/markdown/syntax) —— 专注内容的同时，具备 HTML 和 Vue 组件的能力
- [Windi CSS](https://github.com/windicss/windicss) 或 [UnoCSS](https://github.com/unocss/unocss) —— 按需、实用类优先的 CSS 框架，轻松定制你的幻灯片样式
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) —— 具有实时编码能力的一流代码片段支持
- [RecordRTC](https://recordrtc.org) —— 内置录制功能和摄像头视图
- [VueUse](https://vueuse.org) 家族 ——  [`@vueuse/core`](https://github.com/vueuse/vueuse)、[`@vueuse/head`](https://github.com/vueuse/head)、[`@vueuse/motion`](https://github.com/vueuse/motion) 等
- [Iconify](https://iconify.design/) —— 图标库集合
- [Drauu](https://github.com/antfu/drauu) - 支持绘图和批注
- [KaTeX](https://katex.org/) —— LaTeX 数学渲染
- [Mermaid](https://mermaid-js.github.io/mermaid) —— 文本描述语言创建图表

### 搭建你的第一个演讲稿 {#scaffolding-your-first-presentation}

<br>

#### 在线试用 {#try-it-online}

[sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

#### 本地创建 {#create-locally}

使用 NPM：

```bash
$ npm init slidev
```

使用 Yarn：

```bash
$ yarn create slidev
```

根据提示开始创建你的幻灯片吧！想要了解更多关于 Markdown 的语法，请阅读 [语法指南](/guide/syntax)。

### 命令行界面 {#command-line-interface}

在安装了 Slidev 的项目里，你可以在你的 npm scripts 里使用 `slidev` 命令。

```json
{
  "scripts": {
    "dev": "slidev", //  启动 dev server
    "build": "slidev build", // 构建生产环境的单页面应用
    "export": "slidev export" // 将幻灯片导出为 pdf 格式
  }
}
```

或者，你也可以使用 [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

执行 `slidev --help` 命令获取更多选项的详细信息。

### Markdown 语法 {#markdown-syntax}

Slidev 会读取位于项目根目录的 `slides.md` 文件，并将其转换为幻灯片。每当你修改 Markdown 文件，幻灯片的内容都会立刻随之更新。例如：

~~~md
# Slidev

Hello World

---

# 第 2 页

直接使用代码块，能够实现代码高亮

//```ts
console.log('Hello, World!')
//```

---

# 第 3 页
~~~

请阅读 [语法指南](/guide/syntax) 获取更多关于 Slidev Markdown 语法的内容。
