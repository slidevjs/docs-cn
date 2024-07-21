---
outline: deep
---

# 为什么选 Slidev

There have been lots of feature-rich WYSIWYG slides makers like [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) and [Apple Keynote](https://www.apple.com/keynote/) _(see [Comparisons](#comparisons))_. They are intuitive and easy to learn. So why bother making Slidev?

Slidev aims to provide flexibility and interactivity for **developers** to make their presentations much more interesting, expressive, and attractive by using technologies they are familiar with. Slidev is also open source with a strong community.

Slidev is Markdown-based, which helps you **focus on the content**. Slidev is also Web-based, which means **nothing is impossible** - everything you can do in a web app can apply to your slides.

Slidev is also **progressive**. You can start with a super simple Markdown file, and then use the [built-in features](../features/) when you need them without any configuration. There are also [themes and addons](./theme-addon) you can optionally install to enhance your slides.

![demo slide](/screenshots/cover.png) {#welcome}

## 优势

### 📝 基于 Markdown

Slidev uses an extended Markdown format to organize your slides in a single plain text file. This helps you focus on the content while allowing you to use Git and any editor you like.

> Learn more: <LinkInline link="guide/syntax"/>.

### 🧑‍💻 开发者友好

Slidev provides first-class support for code snippets for developers. It uses [Shiki](https://github.com/shikijs/shiki) to get the most accurate syntax highlighting. Slidev also supports <LinkInline link="features/shiki-magic-move"/> and <LinkInline link="features/twoslash"/>. These make Slidev the best choice for tech talks.

### 🎨 主题丰富

Themes for Slidev can be shared via npm packages. You apply a theme within one line of code.

Check out the [Theme Gallery](../resources/theme-gallery) for the beautiful themes made by the official team and the community.

### ⚡ 快速

Every change you make in the editor will be updated to your slides in the browser **instantly** without reloading, thanks to [Vite's HMR feature](https://vitejs.dev/guide/features.html#hot-module-replacement).

### 🤹 可交互

You can write Vue components and use them in your slides, which you can then interact with during the presentation to express your idea in a more interesting and intuitive way.

Slidev also has built-in support of <LinkInline link="features/monaco-editor"/>, which empowers you to do live coding in your presentation with auto-completion and hover messages.

### 🎥 录制功能

Slidev provides built-in recording and camera view. You can share your presentation with your camera view inside, or record and save your screen and camera separately.

> Learn more: <LinkInline link="features/recording"/>.

### 📤 跨平台

You can export your slides into PDF, PPTX, PNGs, or even a single-page application (SPA) via a single command. Then you can share or host it anywhere you like.

> Learn more: <LinkInline link="guide/exporting"/> and <LinkInline link="guide/hosting"/>.

### 🛠 可自定义

Because Slidev is web-based, everything that can be done in a normal web app can be applied to your slides. For example, WebGL, API requests, iframes, or even live sharing. It's up to your imagination!

> Learn more: [Customization](../custom/).

## 与其他工具的比较

::: details Slidev vs. 微软 PPT / Apple Keynote

[Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) and [Apple Keynote](https://www.apple.com/keynote/) are feature-rich WYSIWYG slides makers. They are intuitive and easy to learn, which makes them one of the best choices for non-developers.

Compared to them, Slidev has the following advantages:

- Developer-friendly: Code snippets are first-class citizens in Slidev.
- Markdown-based: Focus on the content, and version control your slides with Git.
- Web-based: Everything you can do in a web app can apply to your slides.
- Hackable: Customize anything you like with web technologies.
- Open source: Slidev is completely open source, and has a strong community.

:::

::: details Slidev vs. Reveal.js

[Reveal.js](https://revealjs.com/) is a popular HTML presentation framework. It is also open source and supports Markdown.

Compared to Reveal.js, Slidev has the following advantages:

- More concise: Slidev uses an extended Markdown format, while Reveal.js encourages you to write HTML to organize your slides.
- Vue support: You can use Vue components in Slidev to make your slides interactive.
- Vite-based: Slidev is built on top of Vite, which provides instant HMR and flexible plugin API.
- Atomatic CSS: You can [UnoCSS](https://unocss.dev/) out of the box to style your slides.

:::

::: details Slidev vs. Marp

[Marp](https://marp.app/) is a Markdown presentation tool that focuses on simplicity and portability. It is also open source and supports Markdown.

Compared to Marp, Slidev has the following advantages:

- The same simplicity: Slidev's slides can start as simple as Marp's.
- More features: Slidev supports many features that Marp doesn't.
- Vue support: You can use Vue components in Slidev to make your slides interactive.
- Vite-based: Slidev is built on top of Vite, which provides instant HMR and flexible plugin API.
- Atomatic CSS: You can [UnoCSS](https://unocss.dev/) out of the box to style your slides.

:::

## 尝试使用 Slidev

Playing around with Slidev will tell you more than thousands of words. Check the [Getting Started](./) guide to create your first Slidev project in one click or one command.

Or you can have a quick preview of it:

<iframe class="aspect-16/9 rounded-xl w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
