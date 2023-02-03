---
title: 导出
---

<<<<<<< HEAD
# 导出 {#exporting}
=======
## Slides

### PDF
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

## PDF {#pdf}

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

如果你想要导出使用暗色主题的幻灯片，请使用 `--dark` 选项：

```bash
$ slidev export --dark
```

<<<<<<< HEAD
### 导出点击步骤 {#export-clicks-steps}
=======
#### Export Clicks Steps
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

> 自 v0.21 起可用

默认情况下，Slidev 会将每张幻灯片导出为 1 页，并忽略点击动画。如果你想将多个步骤的幻灯片，分解为多个页面，请使用 `--with-clicks` 选项。

```bash
$ slidev export --with-clicks
```

<<<<<<< HEAD
## PNGs {#pngs}
=======
### PNGs
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

当为命令传入 `--format png` 选项时，Slidev 会将每张幻灯片导出为 PNG 图片格式。

```bash
$ slidev export --format png
```

<<<<<<< HEAD
## 单页应用（SPA） {#single-page-application-spa}
=======
### Export a range of slides

By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export. 

```bash
$ slidev export --range 1,6-8,10
```

This option accepts both specific slide numbers and ranges.

The example above would export slides 1,6,7,8, and 10. 

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ slidev export-notes
```

## Single-Page Application (SPA)
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

请参阅 [静态部署](/guide/hosting) 章节。
