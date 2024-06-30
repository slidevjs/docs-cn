---
title: 导出
---

# 导出 {#exporting}
## Slides {#slides}

### PDF {#pdf}

<<<<<<< HEAD

> 导出为 PDF 或 PNG 的功能基于 [Playwright](https://playwright.dev) 实现渲染。因此，使用此功能前需要安装 [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary)。
> 如果你需要在 CI 环境下进行导出，那么阅读 [playwright CI 指南](https://playwright.dev/docs/ci) 会对你有所启发。

安装 `playwright-chromium`：
=======
> Exporting to PDF, PPTX, or PNG relies on [Playwright](https://playwright.dev) for rendering. You will therefore need to install [`playwright-chromium`](https://npmjs.com/package/playwright-chromium) to use this feature.
> If you are exporting within a CI environment, [the playwright CI guide](https://playwright.dev/docs/ci) can be helpful.

1. Install `playwright-chromium`:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ npm i -D playwright-chromium
```

<<<<<<< HEAD
接着，使用如下命令即可将你的幻灯片导出为 PDF：
=======
2. Now export your slides to PDF using the following command:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export
```

稍作等待，即可在 `./slides-export.pdf` 路径下看到你幻灯片的 PDF 文件。

<<<<<<< HEAD
如果你想要导出使用暗色主题的幻灯片，请使用 `--dark` 选项：
=======
### PNGs and Markdown

When passing in the `--format png` option, Slidev will export PNG images for each slide instead of a PDF:

```bash
$ slidev export --format png
```

You can also compile a markdown file composed of compiled png using `--format md`:

```bash
$ slidev export --format md
```

### PPTX (Microsoft PowerPoint)

Slidev can also export your slides as a PPTX file:

```bash
$ slidev export --format pptx
```

Note that all the slides in the PPTX file will be exported as images, so the text will not be selectable. Presenter notes will be conveyed into the PPTX file on a per-slide basis.

In this mode, the `--with-clicks` option is enabled by default. To disable it, use `--with-clicks false`.

### Dark mode

In case you want to export your slides using the dark version of the theme, use the `--dark` option:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export --dark
```

#### 导出点击步骤 {#export-clicks-steps}

> 自 v0.21 起可用

<<<<<<< HEAD
默认情况下，Slidev 会将每张幻灯片导出为 1 页，并忽略点击动画。如果你想将多个步骤的幻灯片，分解为多个页面，请使用 `--with-clicks` 选项。
=======
By default, Slidev exports one page per slide with clicks animations disabled. If you want to export slides with multiple steps into multiple pages, pass the `--with-clicks` option:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export --with-clicks
```

<<<<<<< HEAD
### PNGs and Markdown {#pngs-and-markdown}

当为命令传入 `--format png` 选项时，Slidev 会将每张幻灯片导出为 PNG 图片格式。

```bash
$ slidev export --format png
```

### 导出一系列幻灯片 {#export-a-range-of-slides}
=======
### PDF outline
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

默认情况下会导出演示文稿中的全部幻灯片。如果要导出特定的幻灯片或幻灯片范围，可以设置 `--range` 选项指定要导出的幻灯片。

<<<<<<< HEAD
你还可以使用 `--format md` 编译由编译后的 png 组成的 markdown 文件。

```bash
$ slidev export --format md
```

### 暗黑模式 {#dark-mode}

如果你想使用深色主题导出幻灯片，请使用 `--dark` 选项：

```bash
$ slidev export --dark
```

### 导出点击步骤

> 自 v0.21 起可用

默认情况下，Slidev 导出每张幻灯片一页并禁用点击动画。如果要将包含多个步骤的幻灯片导出到多个页面，请传递 `--with-clicks` 选项。

```bash
$ slidev export --with-clicks
```

### PDF 大纲 {#pdf-outline}

> 自 v0.36.10 起可用

你可以使用 `--with-toc` 选项来生成 PDF 大纲。
=======
You can generate the PDF outline by passing the `--with-toc` option:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export --with-toc
```

### 输出文件名 {#output-filename}

<<<<<<< HEAD
你可以使用 `--output` 选项指定输出的文件名。
=======
You can specify the output filename with the `--output` option:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export --output my-pdf-export
```

你也可以在 frontmatter 配置中指定：

```yaml
---
exportFilename: my-pdf-export
---
```

### Export a range of slides

<<<<<<< HEAD
默认情况下，演示文稿中的所有幻灯片都会导出。如果想导出特定幻灯片或一定范围的幻灯片，可以设置 `--range`，并指定要导出的幻灯片。
=======
By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export --range 1,6-8,10
```

该选项接受特定的幻灯片编号和范围。

上面的示例将导出幻灯片第 1、6、7、8、10 页。

### 批量导出 {#multiple-entries}

<<<<<<< HEAD
你还可以一次导出多个幻灯片。
=======
You can also export multiple slides at once:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export slides1.md slides2.md
```

Or

```bash
$ slidev export *.md
```

<<<<<<< HEAD
在这种情况下，每个输入文件都将生成自己的 PDF 文件。
=======
In this case, each input file will generate its own PDF file.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## 演讲者注释 {#presenter-notes}

> 自 v0.36.8 起可用

<<<<<<< HEAD
只将演示者注释(每张幻灯片的最后一个注释块)导出到 PDF 格式的文本文档中。
=======
Export only the presenter notes (the last comment block for each slide) into a text document in PDF:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev export-notes
```

此命令还接受多个条目，例如 [导出命令](#multiple-entries)

## 单页应用（SPA） {#single-page-application-spa}

请参阅 [静态部署](/guide/hosting) 章节。


<<<<<<< HEAD
## 支持导出功能的镜像

为了支持 Slidev 的导出功能，这里还提供了另一个更大的镜像，带有 **playwright** 标签。在你的工作目录下运行下面的命令：
=======
To support the export feature, there is a [docker image](/guide/install#install-on-docker) (maintained by [@tangramor](https://github.com/tangramor)) with tag **playwright**. Run following command in your work folder:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
docker run --name slidev -d --rm -it \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:playwright
```

<<<<<<< HEAD
然后你可以你的工作目录下像这样使用 Slidev 的导出功能：
=======
Then you can use the export feature like the following under your work folder:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
docker exec -i slidev npx slidev export --timeout 2m --output slides.pdf
```
<<<<<<< HEAD
=======

## Troubleshooting

### Timeouts

For big presentations you might want to increase the Playwright timeout with `--timeout`:

```bash
$ slidev export --timeout 60000
```

### Wait

Some parts of your slides may require a longer time to render. You can use the `--wait` option to have an extra delay before exporting:

```bash
$ slidev export --wait 10000
```

There is also a `--wait-until` option to wait for a state before exporting each slide:

```bash
$ slidev export --wait-until none
```

Possible values:

- `'networkidle'` - (_default_) consider operation to be finished when there are no network connections for at least `500` ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
- `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
- `'load'` - consider operation to be finished when the `load` event is fired.
- `'none'` - do not wait for any event.

::: warning
When specifying values other than `'networkidle'`, please make sure the printed slides are complete and correct. If some contents are missing, you may need to use the `--wait` option.
:::

### Executable path

Chromium may miss some features like codecs that are required to decode some videos. You can set the browser executable path for Playwright to your Chrome or Edge using `--executable-path`:

```bash
$ slidev export --executable-path [path_to_chromium]
```
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
