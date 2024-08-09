---
outline: deep
---

# 语法

Slidev 的幻灯片是用 Markdown 文件编写的，称为 **Slidev Markdown**。演示文稿由一个 Slidev Markdown 作为入口点，该文件默认为 `./slides.md`，你可以将文件路径作为参数传递给 [CLI 命令](../builtin/cli) 来使用别的文件。

在 Slidev Markdown 中，不仅可以像平常一样使用 [基本的 Markdown 功能](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)，Slidev 还提供了额外的功能来增强你的幻灯片。本节介绍了 Slidev 引入的语法。请确保你了解基本的 Markdown 语法后再阅读本指南。

## 分隔符 {#slide-separators}

使用在两侧留有空行的 `---` 来分隔幻灯片：

````md {5,15}
# Title

Hello, **Slidev**!

---

# Slide 2

使用代码块来高亮代码：

```ts
console.log('Hello, World!')
```

---

# Slide 3

使用 UnoCSS 类和 Vue 组件来为你的幻灯片添加样式和丰富内容：

<div class="p-3">
  <Tweet id="..." />
</div>
````

## Frontmatter 和 Headmatter {#frontmatter}

在每张幻灯片的开头，你可以添加一个可选的 [frontmatter](https://jekyllrb.com/docs/front-matter/) 来配置幻灯片。第一个 frontmatter 块称为 **headmatter**，可以配置整个幻灯片集。其余的是用于单个幻灯片的 **frontmatters**。headmatter 或 frontmatter 中的文本应是 [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) 格式的对象。例如：

<!-- eslint-skip -->

```md {1-4,10-14,26-28}
---
theme: seriph
title: Welcome to Slidev
---

# 第一页

第一页的 frontmatter 也是整个演示文稿的 headmatter

---
layout: center
background: /background-1.png
class: text-white
---

# 第二页

本页的布局是 `center`，背景是一张图片

---

# 第三页

本页没有 frontmatter

---
src: ./pages/4.md  # 本页只包含 frontmatter
---

---

# 第五页
```

具体的配置项请参考 [演示文稿的配置](/custom/#headmatter) 和 [每个幻灯片的配置](/custom/#frontmatter) 部分。

你还可以安装 VSCode 扩展来使 headmatter 更易读：

<LinkCard link="features/vscode-extension" />

还可以使用另一种 frontmatter 格式：

<LinkCard link="features/block-frontmatter" />

## 备注 {#notes}

每张幻灯片的末尾的注释块（若有），将被视为幻灯片的备注。它们将在 [演讲者模式](../guide/ui#presenter-mode) 中显示，以供您在演示过程中参考。

```md {9,19-21}
---
layout: cover
---

# 第一页

封面页

<!-- 这是一段 **备注** -->

---

# 第二页

<!-- 这不是备注，因为它不在幻灯片末尾 -->

第二页的内容

<!--
这是另一段备注
-->
```

备注中也支持渲染 Markdown 和 HTML。

<SeeAlso :links="[
  'features/click-marker',
]" />

## 代码块 {#code-block}

创建 Slidev 的一个重要原因是需要在幻灯片中完美地显示代码。在 Slidev 中，你可以使用 Markdown 风格的代码块来高亮你的代码。

````md
```ts
console.log('Hello, World!')
```
````

Slidev 使用 [Shiki](https://github.com/shikijs/shiki) 作为语法高亮器。有关更多详细信息，请参阅 [配置 Shiki](/custom/config-highlighter)。

与代码块相关的更多内容：

<LinkCard link="features/code-block-line-numbers" />
<LinkCard link="features/code-block-max-height" />
<LinkCard link="features/line-highlighting" />
<LinkCard link="features/monaco-editor" />
<LinkCard link="features/monaco-run" />
<LinkCard link="features/monaco-write" />
<LinkCard link="features/shiki-magic-move" />
<LinkCard link="features/twoslash" />
<LinkCard link="features/import-snippet" />

## Latex 公式块 {#latex-block}

Slidev 支持用于渲染数学和化学公式的 LaTeX 公式块：

<LinkCard link="features/latex" />

## 图表 {#diagrams}

Slidev 支持使用 [Mermaid.js](http://mermaid.js.org/) 和 [PlantUML](https://plantuml.com/)，以文本形式创建图表：

<LinkCard link="features/mermaid" />
<LinkCard link="features/plantuml" />

## MDC 语法 {#mdc-syntax}

MDC 语法是将样式和类应用于元素的最简单方法：

<LinkCard link="features/mdc" />

## Scoped CSS {#scoped-css}

Scoped CSS 可以用来为你的幻灯片添加样式：

<LinkCard link="features/slide-scope-style" />

## 导入幻灯片 {#importing-slides}

<LinkCard link="features/importing-slides" />
