---
relates:
  - VS Code: https://code.visualstudio.com/
  - View in Marketplace: https://marketplace.visualstudio.com/items?itemName=antfu.slidev
  - View in OVSX: https://open-vsx.org/extension/antfu/slidev
tags: [编辑器]
description: |
  帮助你更好的组织你的幻灯片并进行快速浏览。
---

# VS Code 拓展

<p align="center">
    <a href="https://github.com/slidevjs/slidev" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/logo-for-vscode.png" alt="Slidev" width="300" />
    </a>
</p>

<a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
  <img inline src="https://img.shields.io/visual-studio-marketplace/v/antfu.slidev.svg?color=4EC5D4&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
</a> &nbsp;
<a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
  <img inline src="https://img.shields.io/visual-studio-marketplace/d/antfu.slidev.svg?color=2B90B6" alt="Visual Studio Marketplace Downloads" />
</a>

Slidev 的 VS Code 扩展提供了一些特性来帮助你更好的组织你的幻灯片并进行快速浏览。

### 特性

- 在侧边面板中预览幻灯片
- 幻灯片树形图
- 为幻灯片重新排序
- 幻灯片块的折叠
- 多幻灯片项目支持
- 一键启动开发服务器

![](https://github.com/slidevjs/slidev/assets/63178754/2c9ba01a-d21f-4b33-b6b6-4e249873f865)

<TheTweet id="1395333405345148930" />

<TheTweet id="1789684139152810151" />

### 安装

你可以从 [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.slidev) 或者 [Open VSX Registry](https://open-vsx.org/extension/antfu/slidev) 中安装扩展

### 用法

单击活动栏中的 `Slidev` 图标打开**Slidev面板**。在Slidev面板中，你可以看到项目树形图、幻灯片树形图和预览 webview。

在**项目树形图**中，你可以看到工作区中的所有 Slidev 项目。你可以单击该项目以打开相应的文件，然后单击其上的 <codicon-eye/> 图标以切换当前项目。<codicon-add/> 图标允许你加载未自动扫描的幻灯片项目。

在**幻灯片树形图**中，你可以看到当前项目中的所有幻灯片。你可以单击该项目将光标移动到编辑器中的幻灯片上，然后拖放以重新排序幻灯片。

在**webview预览**中，你可以单击 <codicon-run-all/> 图标启动开发服务器，然后单击 <codico-globe/> 图标在浏览器中打开幻灯片。切换 <codicon-lock/> 图标以将预览导航与编辑器光标同步/取消同步。

你还可以使用一些**命令**。在命令面板中键入 `Slidev` 以查看它们。

你可以将 glob 模式添加 `slidev.include` 配置中，以将文件作为 Slidev 条目包含在内。默认值为`[“**/*.md”]`。例子：

```json
{
  "slidev.include": ["**/presentation.md"]
}
```
