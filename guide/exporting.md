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

如果你想要导出使用暗色主题的幻灯片，请使用 `--dark` 选项：

```bash
$ slidev export --dark
```

#### 导出点击步骤 {#export-clicks-steps}

> 自 v0.21 起可用

默认情况下，Slidev 会将每张幻灯片导出为 1 页，并忽略点击动画。如果你想将多个步骤的幻灯片，分解为多个页面，请使用 `--with-clicks` 选项。

```bash
$ slidev export --with-clicks
```

### PNGs {#pngs}

当为命令传入 `--format png` 选项时，Slidev 会将每张幻灯片导出为 PNG 图片格式。

```bash
$ slidev export --format png
```

### 导出一系列幻灯片 {#export-a-range-of-slides}

默认情况下会导出演示文稿中的全部幻灯片。如果要导出特定的幻灯片或幻灯片范围，可以设置 `--range` 选项指定要导出的幻灯片。

```bash
$ slidev export --range 1,6-8,10
```

该选项接受特定的幻灯片编号和范围。

上面的示例将导出幻灯片第 1、6、7、8、10 页。

## 演讲者注释 {#presenter-notes}

> 自 v0.36.8 起可用

只将演示者注释(每张幻灯片的最后一个注释块)导出到 PDF 格式的文本文档中。

```bash
$ slidev export-notes
```

## 单页应用（SPA） {#single-page-application-spa}

请参阅 [静态部署](/guide/hosting) 章节。


## 支持导出功能的镜像

为了支持 Slidev 的导出功能，这里还提供了另一个更大的镜像，带有 **playwright** 标签。在你的工作目录下运行下面的命令：

```bash
docker run --name slidev --rm -it \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:playwright
```

然后你可以你的工作目录下像这样使用 Slidev 的导出功能：

```bash
docker exec -i slidev npx slidev export --timeout 2m --output slides.pdf
```

