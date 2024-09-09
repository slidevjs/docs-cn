---
outline: deep
---

# 为什么选 Slidev

有许多功能丰富、所见即所得的幻灯片制作工具可供选择，比如 [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) 和 [Apple Keynote](https://www.apple.com/keynote/) _(参见 [与其他工具的比较](#comparisons))_。它们直观易学。那么为什么要选择 Slidev 呢？

Slidev 旨在为**开发者**制作的幻灯片提供极强的灵活性和交互性，并帮助开发者使用熟悉的技术来使演示更加有趣、有表现力和吸引力。Slidev 也是一个拥有活跃社区开源项目。

Slidev 的幻灯片以 Markdown 的格式编写。这帮助您**专注于内容**。同时，Slidev 的幻灯片在浏览器中呈现，这意味着**几乎没有什么效果不可能被实现** - 一切您在 Web 应用中能做的都可以应用到您的幻灯片中。

Slidev 也具有**渐进式**的设计。您可以从一个超级简单的 Markdown 文件开始，然后在需要时随时用上丰富的[内置功能](../features/)。您还可以选择安装[主题和插件](./theme-addon)来增强您的幻灯片。

![demo slide](/screenshots/cover.png) {#welcome}

## 优势

### 📝 基于 Markdown

Slidev 使用拓展的 Markdown 格式来编写幻灯片。这帮助您专注于内容，并且可以使用 Git 和您喜欢的任何编辑器。

> 了解更多：<LinkInline link="guide/syntax"/>

### 🧑‍💻 开发者友好

Slidev 为在幻灯片中加入代码片段提供了一流支持。它使用 [Shiki](https://github.com/shikijs/shiki) 来提供最准确的语法高亮。Slidev 还支持 <LinkInline link="features/shiki-magic-move"/> 和 <LinkInline link="features/twoslash"/>。这使得 Slidev 成为技术演讲的最佳选择。

### 🎨 主题丰富

主题可以通过 npm 包来安装。只需一行代码就可以将主题应用在您的幻灯片中。

访问[主题合集](../resources/theme-gallery)来了解由官方团队和社区打造的精美主题。

### ⚡ 快速

您在编辑器中对幻灯片的每一个修改都会**立即**更新到浏览器中，无需刷新。这得益于 [Vite 的 HMR 功能](https://vitejs.dev/guide/features.html#hot-module-replacement)。

### 🤹 可交互

您可以在幻灯片中编写 Vue 组件，并在演示过程中与之交互，以更有趣、直观的方式表达您的想法。

此外，您还可以在幻灯片中嵌入带有自动补全和悬停提示功能的 <LinkInline link="features/monaco-editor"/>（即 VSCode 的编辑器组件），在演示中进行实时编码。

### 🎥 录制功能

Slidev 还提供了内置的录制和摄像头视图功能。您可以在演示中分享您的摄像头视图，或者分别录制并保存您的屏幕和摄像头视图。

> 了解更多：<LinkInline link="features/recording"/>

### 📤 跨平台

Slidev 的幻灯片支持导出为 PDF、PPTX 和图片格式，也可以通过一个简单的命令编译为静态网页，以便您分享或部署到任何地方。

> 了解更多：<LinkInline link="guide/exporting"/>、<LinkInline link="guide/hosting"/>

### 🛠 可自定义

Slidev 以 Web 为平台的展示您的幻灯片，因此任何可以在 Web 应用中实现的功能都可以应用到您的幻灯片中。例如，WebGL、API 请求、iframe 等。您的想象力在 Slidev 有着自由发挥的空间。

> 了解更多：[自定义配置](../custom/)

## 与其他工具的比较

::: details Slidev vs. 微软 PPT / Apple Keynote

[Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) 和 [Apple Keynote](https://www.apple.com/keynote/) 是功能丰富的所见即所得幻灯片制作工具。它们直观易学，这使得它们成为非开发者制作幻灯片的最佳选择之一。

和它们相比，Slidev 有以下优势：

- 开发者友好：对代码片段的一流支持等。
- 基于 Markdown：专注于内容，允许使用 Git 进行版本控制。
- 基于 Web：一切您在 Web 应用中能做的都可以应用到您的幻灯片中。
- 可定制：使用 Web 技术自定义您喜欢的任何东西。
- 开源：Slidev 是完全开源的，并且拥有强大的社区。

:::

::: details Slidev vs. Reveal.js

[Reveal.js](https://revealjs.com/) 是一个流行的 HTML 幻灯片框架。它也是开源的，并支持 Markdown。

和 Reveal.js 相比，Slidev 有以下优势：

- 更简洁：Slidev 使用拓展的 Markdown 格式，而 Reveal.js 鼓励您使用 HTML 来组织您的幻灯片。
- Vue 支持：您可以在 Slidev 中使用 Vue 组件使您的幻灯片更具交互性。
- 基于 Vite：Slidev 是基于 Vite 构建的，提供了即时更新和灵活的插件 API。
- 原子化 CSS：您可以直接使用 [UnoCSS](https://unocss.dev/) 来为您的幻灯片添加样式。

:::

::: details Slidev vs. Marp

[Marp](https://marp.app/) 是一个专注于简单性和可移植性的 Markdown 幻灯片工具。它也是开源的，并支持 Markdown。

与 Marp 相比，Slidev 有以下优势：

- 同样的简易性：基础的 Slidev 的幻灯片和 Marp 一样简单。
- 更多功能：Slidev 支持很多 Marp 不支持的功能。
- Vue 支持：您可以在 Slidev 中使用 Vue 组件使您的幻灯片更具交互性。
- 基于 Vite：Slidev 是基于 Vite 构建的，提供了即时更新和灵活的插件 API。
- 原子化 CSS：您可以直接使用 [UnoCSS](https://unocss.dev/) 来为您的幻灯片添加样式。

:::

## 尝试使用 Slidev

动手尝试胜于千言万语。查看 <LinkInline link="guide/"/> 指南，即刻创建您的第一个 Slidev 项目。

或者您也可以通过下方的视频进行快速预览:

<iframe class="aspect-16/9 rounded-xl w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
