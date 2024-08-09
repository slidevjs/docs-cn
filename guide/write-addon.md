# 编写插件

> 请先阅读 <LinkInline link="guide/theme-addon" /> 和 <LinkInline link="guide/write-theme" />。

每个演示文稿只能有一个主题，但可以安装多个插件。

## 插件能力 {#capability}

理论上，插件可以实现主题的所有功能。但是，插件更像是扩展 Slidev 功能的插件。

建议在插件中实现以下功能之一或多个：

- 提供自定义组件
- 提供 _新的_ 布局
- 提供新的代码片段
- 提供新的代码运行器
- 配置 UnoCSS、Vite 等工具

但是，不建议在插件中实现以下功能，这些功能可能更适合 [实现为主题](./write-theme)：

- 通配符全局样式
- 覆盖现有布局
- 覆盖配置
- 其他可能与主题和其他插件不兼容的功能

一个插件可以像主题一样指定它所需的 Slidev 版本。

## 预览插件 {#previewing}

与主题类似，你可以通过以下 `./slides.md` 文件预览你的插件：

```md
---
addons:
  - ./
---
```

## 发布插件 {#publishing}

当发布插件时，非 JS 文件（如 `.vue` 和 `.ts` 文件）可以直接发布而无需编译。Slidev 在使用插件时会自动编译它们。

插件应遵循以下约定：

- 包名应以 `slidev-addon-` 开头。例如，`slidev-addon-name` 或 `@scope/slidev-addon-name`
- 在 `package.json` 的 `keywords` 字段中添加 `"slidev-addon"` 和 `"slidev"`

主题可以在本地使用而无需发布到 NPM。如果你的插件仅供个人使用，你可以将其简单地用作本地插件，或者将其发布为私有作用域包。但是，如果你想与他人分享，建议将其发布到 NPM。
