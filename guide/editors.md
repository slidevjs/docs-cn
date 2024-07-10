---
title: 编辑器整合
---

<<<<<<< HEAD
# 编辑器整合 {#editor-support}
=======
Since Slidev uses Markdown as the source entry, you can use any editor you prefer to create your slides.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

因为 Slidev 使用 Markdown 作为源文件，所以你可以使用任何你喜欢的编辑器。

如果你想对幻灯片进行一些高级管理，我们为你提供了以下编辑器集成！

<<<<<<< HEAD
## 编辑器集成 {#integrated-editor}
=======
Slidev comes with an integrated editor that will instantly reload and save the changes to your file.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Slidev 带有一个集成的 [CodeMirror](https://codemirror.net/) 编辑器，可以立即重新加载并保存更改到文件中。

点击 <carbon-edit class="inline-icon-btn"/> 按钮来打开它。

![](/screenshots/integrated-editor.png)

## VS Code 插件 {#vs-code-extension}

<p align="center">
    <a href="https://github.com/slidevjs/slidev" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/logo-for-vscode.png" alt="Slidev" width="300"/>
    </a>
    <br>
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/v/antfu.slidev.svg?color=4EC5D4&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
    </a>
    &nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/d/antfu.slidev.svg?color=2B90B6" alt="Visual Studio Marketplace Downloads" />
    </a>
</p>

VS Code 插件提供一些特性，这些特性可以帮你更好的组织幻灯片并且可以快速浏览。

### 特性 {#features}

<<<<<<< HEAD
- 在侧边面板中查看幻灯片
- 下一页 / 上一页按钮
- 对幻灯片重新排序
- 幻灯片折叠
- 将 Markdown 转为 HTML
=======
- Preview slides in the side panel
- Slides tree view
- Re-ordering slides
- Folding for slide blocks
- Multiple slides project support
- Start the dev server with one click
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

![](https://github.com/slidevjs/slidev/assets/63178754/2c9ba01a-d21f-4b33-b6b6-4e249873f865)

::: code-group

<TheTweet id="1395333405345148930" />

<<<<<<< HEAD
## Prettier 插件 {#prettier-plugin}
=======
<TheTweet id="1789684139152810151" />

:::

### Installation

You can install the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.slidev).

### Usage

Click the `Slidev` icon in the activity bar to open the **Slidev panel**. In the Slidev panel, you can see the projects tree view, slides tree view, and the preview webview.

In the **projects tree view**, you can see all the Slidev projects in your workspace. You can dlick the item to open the corresponding file, and click the <codicon-eye /> icon over it to switch the active project. The <codicon-add /> icon allows you to load a slides project that wasn't scanned automatically.

In the **slides tree view**, you can see all the slides in the active project. You can click the item to move you cursor to the slide in the editor, and drag and drop to reorder the slides.

In the **preview webview**, you can click the <codicon-run-all /> icon to start the dev server and click the <codicon-globe /> icon to open the slides in the browser. Toggle <codicon-lock /> icon to sync/unsync the preview navigation with the editor cursor.

There are also some **commands** you can use. Type `Slidev` in the command palette to see them.

You can add glob patterns to the `slidev.include` configuration to include files as Slidev entries. The default value is `["**/*.md"]`. Example:

```json
{
  "slidev.include": ["**/presentation.md"]
}
```

## Prettier Plugin
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Slidev 还提供了 Prettier 插件来格式化幻灯片。你可以将它与支持 Prettier 的编辑器一起使用。该插件的文档可以在[此处](https://github.com/slidevjs/prettier-plugin)找到。
