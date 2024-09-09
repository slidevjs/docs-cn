---
outline: deep
---

# 导出幻灯片

通常幻灯片在浏览器中显示，但你也可以将它们导出为 PDF、PPTX、PNG 或 Markdown 文件以便分享或打印。这个功能通过 CLI 命令 [`slidev export`](../builtin/cli#export) 实现。

但是，幻灯片中的交互式功能在导出的文件中可能无法使用。你也可以构建和托管你的幻灯片作为 Web 应用程序以保留交互性。请参阅 [构建和托管](./hosting) 了解更多信息。

## 准备工作 {#preparation}

导出为 PDF、PPTX 或 PNG 依赖于 [Playwright](https://playwright.dev) 来渲染幻灯片。因此，你需要在你的项目中安装 [`playwright-chromium`](https://npmjs.com/package/playwright-chromium)：

::: code-group

```bash [npm]
$ npm i -D playwright-chromium
```

```bash [pnpm]
$ pnpm add -D playwright-chromium
```

```bash [yarn]
$ yarn add -D playwright-chromium
```

:::

## 支持的格式 {#formats}

### PDF

在安装了 `playwright-chromium` 之后，你可以使用以下命令将幻灯片导出为 PDF：

```bash
$ slidev export
```

默认地，PDF 文件会被导出到 `./slides-export.pdf`。

### PPTX

Slidev 也可以将你的幻灯片导出为 PPTX 文件：

```bash
$ slidev export --format pptx
```

需要注意的是，PPTX 文件中的所有幻灯片都会被导出为图片，因此文本不可选择。演讲者备注将以每张幻灯片为单位传递到 PPTX 文件中。

在此模式下，默认启用了 `--with-clicks` 选项。要禁用它，请传递 `--with-clicks false`。

### PNGs 或 Markdown {#pngs-and-markdown}

当传递 `--format png` 选项时，Slidev 会为每张幻灯片导出 PNG 图像而不是 PDF：

```bash
$ slidev export --format png
```

你也可以使用 `--format md` 选项将幻灯片导出为 Markdown 文件：

```bash
$ slidev export --format md
```

## 选项 {#options}

以下是一些常用的 `slidev export` 命令选项。更多选项请参阅 [CLI 文档](../builtin/cli#export)。

### 导出动画步骤 {#export-clicks-steps}

默认地，Slidev 会将每张幻灯片导出为一个页面，不包含点击动画。如果你想要将幻灯片的多个步骤导出为多个页面，可以传递 `--with-clicks` 选项：

```bash
$ slidev export --with-clicks
```

### 指定导出文件名 {#output-filename}

你可以使用 `--output` 选项指定导出文件名：

```bash
$ slidev export --output my-pdf-export
```

或在 headmatter 中指定：

```yaml
---
exportFilename: my-pdf-export
---
```

### 限定导出范围 {#export-with-range}

默认情况下，会导出演示文稿中的所有幻灯片。如果你想要导出特定幻灯片或幻灯片范围，可以使用 `--range` 选项并指定你想要导出的幻灯片：

```bash
$ slidev export --range 1,6-8,10
```

该选项接收特定的幻灯片编号或范围。上例会导出第 1、6、7、8 和 10 张幻灯片。

### 多个幻灯片 {#multiple-slides}

你可以一次导出多个幻灯片：

```bash
$ slidev export slides1.md slides2.md
```

或者使用通配符（仅在部分 shell 下有效）：

```bash
$ slidev export *.md
```

在这种情况下，每个输入文件都会生成自己的 PDF 文件。

### 暗色模式 {#dark-mode}

若要使用主题的暗色版本导出幻灯片，可以使用 `--dark` 选项：

```bash
$ slidev export --dark
```

### 超时 {#timeout}

对于非常大的演示文稿，你可能需要增加 Playwright 的超时时间：

```bash
$ slidev export --timeout 60000
```

### 等待 {#wait}

一些幻灯片可能需要更长的时间来加载和渲染。你可以使用 `--wait` 选项在导出之前等待一段时间：

```bash
$ slidev export --wait 10000
```

此外，还有一个 `--wait-until` 选项，用于在导出每张幻灯片之前等待一个状态。如果你一直遇到超时问题，可以尝试设置此选项：

```bash
$ slidev export --wait-until none
```

该选项接受以下值之一：

- `'networkidle'` - （_默认_）当没有网络连接至少 `500` 毫秒时，认为操作已完成。这是最安全的，但可能会导致超时。
- `'domcontentloaded'` - 当 `DOMContentLoaded` 事件被触发时，认为操作已完成。
- `'load'` - 当 `load` 事件被触发时，认为操作已完成。
- `'none'` - 不等待任何事件。

::: warning
如果指定了 `'networkidle'` 之外的值，请确保打印的幻灯片是完整且正确的。如果某些内容丢失，你可能需要使用 `--wait` 选项。
:::

### 可执行文件路径 {#executable-path}

Chromium 可能缺少一些解码某些视频所需的编解码器等功能。你可以使用 `--executable-path` 选项将 Playwright 的浏览器可执行文件路径设置为 Chrome 或 Edge：

```bash
$ slidev export --executable-path [path_to_chromium]
```

### PDF 大纲 {#pdf-outline}

> 自 v0.36.10 起可用

你可以通过传递 `--with-toc` 选项生成 PDF 大纲：

```bash
$ slidev export --with-toc
```

### Omit Background

When exporting to PNGs, you can remove the default browser background by passing `--omit-background`:

```bash
$ slidev export --omit-background
```

The default browser background is the white background visible on all browser windows and is different than other backgrounds applied throughout the application using CSS styling. [See Playwright docs](https://playwright.dev/docs/api/class-page#page-screenshot-option-omit-background). You will then need to apply additional CSS styling to the application to reveal the transparency.

Here is a basic example that covers all backgrounds in the application:

```css
* {
  background: transparent !important;
}
```
