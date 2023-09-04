---
title: 编写扩展插件
---

# 编写扩展插件 {#write-an-addon}

> 自 v0.32.1 起可用

## 扩展插件能力 {#capability}

<<<<<<< HEAD
一个扩展插件可以自定义以下功能：
=======
- Global styles (use with caution has it is more the role of [themes](/themes/use))
- Provide custom layouts or override the existing one
- Provide custom components or override the existing one
- Extend UnoCSS/Windi CSS configurations
- Configure tools like Monaco and Prism
>>>>>>> 4b8e2bb7224b7e213ae6dee3f33b6f36fa32f0d1

- 全局样式（谨慎使用，它更通常作为 [主题](/themes/use) 的能力）
- 自定义布局或者重写现有布局
- 自定义组件或者重写现有组件
- 扩展 Windi CSS 配置
- 配置 Monaco、Prism 等工具

## 约定 {#conventions}

扩展插件发布到 npm，需遵循以下约定：

- 包名应该以 `slidev-addon-` 开头，例如：`slidev-addon-awesome`
- 在主题 `package.json` 的 `keywords` 中添加 `slidev-addon` 和 `slidev` 关键词

## 配置说明 {#setup}

### 初始化 {#initialization}

如果想要创建扩展插件，请首先创建一个带有 `package.json` 文件的目录（你可以使用 `npm init`）。

然后，安装 Slidev 依赖项：

```bash
$ npm install -D @slidev/cli
```

### 测试 {#testing}

如果想要测试自己编写的扩展插件，你可以新建 `example.md` 并在其内填写一些内容。

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

你只需在命令行中执行 `npm publish` 就可以发布自己的扩展插件，并不需要额外的构建过程（这意味着你可以直接发布 `.vue` 和 `.ts` 文件，Slidev 可以直接识别它们）。

扩展插件可以定制的范围与本地自定义相一致，可以参阅 [自定义文档](/custom/)。

## 扩展插件原数据 {#addon-metadata}

### Slidev 版本 {#slidev-version}

如果主题依赖于 Slidev 的某项新特性，你可以为主题设置最小的 Slidev 版本，以使你的主题可以正常工作：

```json
// package.json
{
  "engines": {
    "slidev": ">=0.32.1"
  }
}
```

如果用户使用的是旧版本的 Slidev，将会抛出错误。
