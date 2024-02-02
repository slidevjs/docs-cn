---
title: 编写主题
---

# 编写主题 {#write-a-theme}

首先，我们推荐你使用预设的生成器来快速搭建一个主题：

```bash
$ npm init slidev-theme
```

之后便可以尝试对主题进行改动并使用。你也可以参阅 [官方主题](/themes/gallery) 中的案例。

## 主题能力 {#capability}

一个主题可以自定义以下功能：

<<<<<<< HEAD
- 全局样式
- 提供默认配置（字体、配色方案、语法高亮器等）
- 自定义布局或者重写现有布局
- 自定义组件或者重写现有组件
- 扩展 Windi CSS 配置
- 配置 Monaco, Prism 等工具
=======
- Global styles
- Provide default configurations (fonts, color schema, highlighters, etc.)
- Provide custom layouts or override the existing one
- Provide custom components or override the existing one
- Extend UnoCSS/Windi CSS configurations
- Configure tools like Monaco and Prism
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

## 约定 {#conventions}

主题发布到 npm，需遵循以下约定：

- 包名应该以 `slidev-theme-` 开头，例如：`slidev-theme-awesome`
- 在主题 `package.json` 的 `keywords` 中添加 `slidev-theme` 和 `slidev` 关键词

## 配置说明 {#setup}

如果想要测试自己编写的主题，你可以新建 `example.md` 并在 frontmatter 中增加以下代码，以告知 Slidev 你正在使用当前目录作为一个主题。

```md
---
theme: ./
---
```

你还可以在 `packages.json` 增加一些脚本以方便测试：

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

你只需在命令行中执行 `npm publish` 就可以发布自己的主题，并不需要额外的构建过程（这意味着你可以直接发布 `.vue` 和 `.ts` 文件，Slidev 可以直接识别它们）。

<<<<<<< HEAD
主题可以定制的范围与本地自定义相一致，可以参阅 [自定义文档](/custom/)。
=======
Theme contribution points follow the same conventions as local customization, please refer to [the docs for the naming conventions](/custom/).
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

## 默认配置 {#default-configurations}

> 自 v0.19 起可用

主题可以通过 `package.json` 提供默认的 [配置](/custom/#frontmatter-configures)。

```json
// package.json
{
  "slidev": {
    "defaults": {
      "aspectRatio": "16/9",
      "canvasWidth": 980,
      "fonts": {
        "sans": "Robot",
        "mono": "Fira Code"
      }
    }
  }
}
```

字体将从 [Google Fonts](https://fonts.google.com/) 自动导入。

欲了解更多，请参阅 [fonts](/custom/fonts) 和 [frontmatter 配置](/custom/#frontmatter-configures)。

## 主题元数据 {#theme-metadata}

### 配色方案 {#color-schema}

默认情况下，Sildev 假定主题会同时支持亮色与暗色两种模式。如果希望自己的主题只以某种预设的配色方案展现，你需要在 `package.json` 中显式指定：

```json
// package.json
{
  "name": "slidev-theme-my-cool-theme",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light" // 还可选 "dark" 或 "both"
  }
}
```

当在编写自己的主题样式时，如果需要设置暗色模式下的样式，你可以将特定使用在暗色模式下的样式放置在指定的 `dark` 类下：

```css
/* 共通 css 样式 */

html:not(.dark) {
  /* 亮色模式 css 样式 */
}

html.dark {
  /* 暗色模式 css 样式 */
}
```

在切换为暗色模式时 Slidev 会为页面中的 `html` 元素添加 `dark` 类。

### 语法高亮器 {#highlighter}

<<<<<<< HEAD
主题中也可以设置代码高亮配色，我们同时支持 [Prism](https://prismjs.com/) 和 [Shiki](https://github.com/shikijs/shiki)。欲了解更多，请参阅 [语法高亮文档](/custom/highlighters)。
=======
Syntax highlighting colors are also provided in the theme. We support both [Prism](https://prismjs.com/), [Shiki](https://github.com/shikijs/shiki). For more information please refer to [the syntax highlighting docs](/custom/highlighters).
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

你可以选择使用其中任意一种或同时使用。可以参考默认主题配置示例中的 [`./styles/code.css`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/styles/code.css) 和 [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/setup/shiki.ts)。

另外，不要忘记在 `package.json` 中指定想要支持的高亮工具：

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // or "prism" or "both"
  }
}
```

### Slidev 版本 {#slidev-version}

如果主题依赖于 Slidev 的某项新特性，你可以为主题设置最小的 Slidev 版本，以使你的主题可以正常工作：

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

如果用户使用的是旧版本的 Slidev，将会抛出错误。
