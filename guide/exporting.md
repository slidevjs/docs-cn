---
title: 导出
---

# 导出 {#exporting}
## Slides {#slides}

### PDF {#pdf}


> 导出为 PDF 或 PNG 的功能基于 [Playwright](https://playwright.dev) 实现渲染。因此，使用此功能前需要安装 [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary)。
> 如果你需要在 CI 环境下进行导出，那么阅读 [playwright CI 指南](https://playwright.dev/docs/ci) 会对你有所启发。

安装 `playwright-chromium`：

```bash
$ npm i -D playwright-chromium
```

接着，使用如下命令即可将你的幻灯片导出为 PDF：

```bash
$ slidev export
```

稍作等待，即可在 `./slides-export.pdf` 路径下看到你幻灯片的 PDF 文件。

<<<<<<< HEAD
如果你想要导出使用暗色主题的幻灯片，请使用 `--dark` 选项：
=======
### PNGs and Markdown

When passing in the `--format png` option, Slidev will export PNG images for each slide instead of a PDF.

```bash
$ slidev export --format png
```

You can also compile a markdown file composed of compiled png using `--format md`.

```bash
$ slidev export --format md
```

### Dark mode

In case you want to export your slides using the dark version of the theme, use the `--dark` option:
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a

```bash
$ slidev export --dark
```

<<<<<<< HEAD
#### 导出点击步骤 {#export-clicks-steps}
=======
### Export Clicks Steps
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a

> 自 v0.21 起可用

<<<<<<< HEAD
默认情况下，Slidev 会将每张幻灯片导出为 1 页，并忽略点击动画。如果你想将多个步骤的幻灯片，分解为多个页面，请使用 `--with-clicks` 选项。
=======
By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` option.
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a

```bash
$ slidev export --with-clicks
```

<<<<<<< HEAD
### PNGs {#pngs}

当为命令传入 `--format png` 选项时，Slidev 会将每张幻灯片导出为 PNG 图片格式。
=======
### Slide range

You can also specify a range of slides to export with the `--range` option.
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a

```bash
$ slidev export --range 1,4-5,6
```

### PDF outline

> Available since v0.36.10

You can generate the PDF outline by passing the `--with-toc` option.

```bash
$ slidev export --with-toc
```

### Output filename

You can specify the output filename with the `--output` option.

```bash
$ slidev export --output my-pdf-export
```

Or in the frontmatter configuration:

```yaml
---
exportFilename: my-pdf-export
---
```

### 导出一系列幻灯片 {#export-a-range-of-slides}

默认情况下会导出演示文稿中的全部幻灯片。如果要导出特定的幻灯片或幻灯片范围，可以设置 `--range` 选项指定要导出的幻灯片。

```bash
$ slidev export --range 1,6-8,10
```

该选项接受特定的幻灯片编号和范围。

<<<<<<< HEAD
上面的示例将导出幻灯片第 1、6、7、8、10 页。
=======
The example above would export slides 1,6,7,8, and 10.


### Multiple entries

You can also export multiple slides at once.

```bash
$ slidev export slides1.md slides1.md
```

Or

```bash
$ slidev export *.md
```

In this case, each input file will generate its own PDf file.
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a

## 演讲者注释 {#presenter-notes}

> 自 v0.36.8 起可用

只将演示者注释(每张幻灯片的最后一个注释块)导出到 PDF 格式的文本文档中。

```bash
$ slidev export-notes
```

<<<<<<< HEAD
## 单页应用（SPA） {#single-page-application-spa}

请参阅 [静态部署](/guide/hosting) 章节。
=======
This command also accept multiple entries like for the [export command](#multiple-entries)

## Single-Page Application (SPA)

See [Static Hosting](/guide/hosting).

## Troubleshooting

### Timeout

For big presentation you might want to increase the playwrigth timeout with `--timeout`

```bash
$ slidev export --timeout 60000
```

### Executable path

You can set the browser executable path for playwright using `--executable-path`

```bash
$ slidev export --executable-path [path_to_chromium]
```
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a
