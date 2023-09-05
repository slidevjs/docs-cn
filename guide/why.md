---
title: 为什么选择 Slidev
---

# 为什么选择 Slidev {#why-slidev}

有很多功能丰富的、通用的、所见即所得的幻灯片制作工具，例如 [微软 PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) 或 [苹果 Keynote](https://www.apple.com/keynote/). 它们在制作带有动画、图表和许多其他漂亮的幻灯片方面效果相当好，同时非常直观和容易学习。那么，为什么要费心制作 Slidev 呢？

Slidev 旨在为开发者提供灵活性和交互性，通过使用他们已经熟悉的工具和技术，使他们的演示文稿更加有趣、更具表现力和吸引力。 

当使用所见即所得的编辑器时，人们很容易被样式选项所干扰。Slidev 通过分离内容和视觉效果来弥补这一点。这使你能够一次专注于一件事，同时也能够重复使用社区中的主题。Slidev 并不寻求完全取代其他幻灯片制作工具。相反，它专注于迎合开发者社区的需求。

## Slidev {#slidev}

![](/screenshots/cover.png)

以下是 Slidev 的一些最酷的功能:

## 支持 Markdown 语法 {#markdown-based}

Slidev 使用一种扩展的 Markdown 格式，在一个纯文本文件中存储和组织你的幻灯片。这让你专注于制作内容。而且由于内容和样式是分开的，这也使得在不同的主题之间切换变得更加容易。

欲了解更多，请参阅 [Slidev 的 Markdown 语法](/guide/syntax)。

## 可定制主题 {#themable}

Slidev 的主题可以通过 `npm` 包的形式来分享和安装。你只需要使用一行配置就可以应用它们。

点击查看 [主题库](/themes/gallery) 或者 [学习如何制作一个主题](/themes/write-a-theme)。

## 对开发者友好 {#developer-friendly}

Slidev 为开发者提供了一流的代码片段支持。它同时支持 [Prism](https://prismjs.com/) 和 [Shiki](https://github.com/shikijs/shiki) 以获得像素级的完美语法高亮，并且能够随时修改代码。通过内置的 [Monaco 编辑器](https://microsoft.github.io/monaco-editor/)，它还能让你在演示文稿中进行现场编码/演示，并支持自动补全、类型悬停、甚至是 `TypeScript` 类型检查。

欲了解更多，请参阅 [语法高亮](/custom/highlighters) 和 [Monaco 配置](/custom/config-monaco)。

## 快速 {#fast}

<<<<<<< HEAD
Slidev 得益于 [Vite](https://vitejs.dev/)，[Vue 3](https://v3.vuejs.org/) 和 [Windi CSS](https://windicss.org/)，为你带来了最美妙的创作体验。你所做的每一个改变都会**立即反映**到你的幻灯片上。
=======
Slidev is powered by [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) and [UnoCSS](https://unocss.dev/), which give you the most wonderful authoring experience. Every change you made will reflect to your slides **instantly**.
>>>>>>> c3ab95101a7969966fbbe64508636a84d73d63ba

查找更多关于 [技术栈](/guide/#tech-stack).

## 互动性 & 直观表达 {#interactive-expressive}

你可以编写自定义的 Vue 组件并直接在你的 MarkDown 文件中使用它们。你也可以在演示文稿中与它们互动，以更深入和直观的方式表达你的想法。

## 支持录制 {#recording-support}

Slidev 提供了内置的录音和摄像头视图。你可以将你的演示文稿与你的相机视图一起分享，或者为你的屏幕和相机分别录制并保存。所有这些都是内置的，不需要额外的工具。

欲了解更多，请参阅 [录制](/guide/recording)。

## 可移植性 {#portable}

用一个命令就可以将你的幻灯片导出为 PDF 或 PNG，甚至是可托管的单页应用程序（SPA），并在任何地方分享它们。

欲了解更多，请参阅 [导出文档](/guide/exporting)。

## 可配置 {#hackable}

由于 Slidev 基于 Web 技术，任何可以在 Web 应用中完成的事情，Slidev 也可以做到。例如，`WebGL`、`API请求`、`iframes`，甚至是实时共享。完全取决于你的想象力!

## 即刻体验 {#give-it-a-try}

开始一个 Slidev 项目无需长篇大论。只需要一个命令即可:

```bash
$ npm init slidev
```

或者你也可以通过下方的视频进行快速预览:

<div class="aspect-9/16 relative">
<iframe class="rounded w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
