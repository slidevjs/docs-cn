# 编写主题

> 请先阅读 <LinkInline link="guide/theme-addon" />。

每个幻灯片项目只能有一个主题。主题应专注于提供幻灯片的外观。如果功能与外观无关且可以单独使用，则应将其实现为 [插件](./write-addon)。

我们建议您使用我们的生成器来搭建您的第一个主题：

::: code-group

```bash [npm]
$ npm init slidev-theme@latest
```

```bash [pnpm]
$ pnpm init slidev-theme
```

```bash [yarn]
$ yarn create slidev-theme
```

:::

你也可以参考[官方主题](../resources/theme-gallery#official-themes)作为示例。

## 主题能力 {#capability}

一个主题可以实现以下功能：

- 全局样式
- 提供默认配置
- 提供自定义布局或覆盖现有布局
- 提供自定义组件
- 配置 UnoCSS、Shiki 等工具

但是，不建议在主题中实现以下功能，这些功能可能更适合 [实现为插件](./write-addon)：

- 新的代码片段
- 新的代码运行器
- 其他可以单独使用的功能

基本上，提供全局样式、布局、组件和配置工具的方式与在幻灯片项目中提供这些的方式相同。例如，要配置 Shiki，您可以创建一个 `./setup/shiki.ts`，如[配置高亮](../custom/config-highlighter)中所述。您可以参考[自定义指南](/custom/)获取更多信息。

若要提供默认的 Slidev 配置，您可以在 `package.json` 文件中添加一个 `slidev.defaults` 字段，它将与用户的配置合并：

```json
{
  "slidev": {
    "defaults": {
      "transition": "slide-left",
      "aspectRatio": "4/3"
    }
  }
}
```

### 限制 Slidev 版本 {#restrict-version}

若该主题依赖于 Slidev 的某个新功能，您可以设置主题所需的最低 Slidev 版本：

```json
{
  "engines": {
    "slidev": ">=0.48.0"
  }
}
```

当使用不兼容的版本时，将显示错误消息。

### 元信息 {#metadata}

Slidev 默认主题支持浅色模式和深色模式。如果您只希望您的主题在特定颜色模式下呈现，您需要在 `package.json` 中显式指定：

```json
{
  "slidev": {
    "colorSchema": "light" // or "dark" or "both"
  }
}
```

## 预览主题 {#previewing}

你可以通过一个示例幻灯片来预览主题。为此，请创建一个 `./slides.md` 文件，并在其中添加以下 headmatter 配置：

```md
---
theme: ./  # 使用当前目录的作为主题
---
```

其他使用方式与普通的幻灯片相同。

## 发布主题 {#publishing}

当发布主题时，非 JS 文件（如 `.vue` 和 `.ts` 文件）可以直接发布而无需编译。Slidev 在使用主题时会自动编译它们。

主题应遵循以下约定：

- 包名应以 `slidev-theme-` 开头。例如，`slidev-theme-name` 或 `@scope/slidev-theme-name`
- 在 `package.json` 的 `keywords` 字段中添加 `"slidev-theme"` 和 `"slidev"`

主题可以在本地使用而无需发布到 NPM。如果您的主题仅供个人使用，您可以将其简单地用作本地主题，或者将其发布为私有作用域包。但是，如果您想与他人分享，建议将其发布到 NPM。
