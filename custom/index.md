# 自定义 {#customizations}

从样式到工具，Slidev 都是完全可以自定义的。你可以对以下这些工具进行自定义配置（[Vite](/custom/config-vite)， [Windi CSS](/custom/config-windicss)， [Monaco](/custom/config-monaco)，等等。）

## 前文配置 {#frontmatter-configures}

你可以在 Slidev 的第一张幻灯片前文处（文件顶部）进行各项配置，以下是各项的默认参数。

```yaml
---
# 主题id 或 主题包名称
theme: "default"
# 幻灯片的总标题，如果没有指定，那么将以第一张拥有标题的幻灯片的标题作为总标题
title: ""
# 在单页（SPA）构建中启用pdf下载，也可以指定一个自定义url
download: true
# 语法高亮设置，可以使用 “prism” 或 “shiki” 方案
highlighter: "prism"
# 启用monaco编辑器，默认情况下仅在开发者（dev）模式中启用
monaco: "dev"
# 幻灯片的配色方案，可以使用 “auto”，“light" 或者 “dark”
colorSchema: "auto"
# vue-router的模式，可以使用 “history” 或 “hash” 模式
routerMode: "history"
# 幻灯片的一些信息，可以使用markdown语法来书写
info: |
  ## Slidev

  我的第一个 [Slidev](http://sli.dev/) 演示!
---
```

你可以从[type definitions](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L16)获取到更多的配置信息。

## 目录结构 {#directory-structure}

Slidev 使用特定的目录结构来减少配置的复杂度，并使功能扩展更加的灵活和直观。

具体请参考[目录结构](/custom/directory-structure)章节。

## `vite.config.ts` {#vite-config-ts}

请参考[Vite 配置](/custom/config-vite)章节。

## `windicss.config.ts` {#windicss-config-ts}

请参考[Windi CSS 配置](/custom/config-windicss)章节。
