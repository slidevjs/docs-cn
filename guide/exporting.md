# 导出 {#exporting}

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

稍作等待，即可在 `./slides-exports.pdf` 路径下看到你幻灯片的 PDF 文件。

## PNGs {#pngs}

当为命令传入 `--format png` 选项时，Slidev 会将每张幻灯片导出为 PNG 图片格式。

```bash
$ slidev export --format png
```

## 单页应用（SPA） {#single-page-application-spa}

你还可以将幻灯片构建成可部署的单页应用（SPA）：

```bash
$ slidev build
```

生成的应用程序会保存在 `dist/` 目录下，然后你可以将该目录部署在 [GitHub Pages](https://pages.github.com/)，[Netlify](https://netlify.app/)，[Vercel](https://vercel.com/)，等你想部署的任何地方。接着，就可以将你幻灯片的链接分享给任何人。

### 配置基础路径 {#base-path}

如果你需要将幻灯片部署在网站的子路由下，你可以使用 `--base` 选项来进行修改。例如：

```bash
$ slidev build --base /talks/my-cool-talk/
```

欲了解更多，请参阅 [Vite 的文档](https://cn.vitejs.dev/guide/build.html#public-base-path)。

### 提供可下载的 PDF {#provide-downloadable-pdf}

你可以向浏览幻灯片单页应用的观众提供一个可下载的 PDF。你可以通过如下配置来启用它：

```md
---
download: true
---
```

配置好后，Slidev 将生成一个 PDF 文件，并在单页应用中展示下载按钮。

你也可以为 PDF 提供一个自定义的 URL。在这种情况下，PDF 的渲染过程将被忽略。

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

### 示例 {#examples}

下面是几个导出为单页应用的示例：

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)
