# 静态部署 {#static-hosting}

## 构建单页应用（SPA） {#build-single-page-application-spa}

<<<<<<< HEAD
你还可以将幻灯片构建成可部署的单页应用（SPA）：
=======
You can build the slides into a self-hostable SPA:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev build
```

生成的应用程序会保存在 `dist/` 目录下，然后你可以将该目录部署在 [GitHub Pages](https://pages.github.com/)，[Netlify](https://netlify.app/)，[Vercel](https://vercel.com/)，等你想部署的任何地方。接着，就可以将你幻灯片的链接分享给任何人。

您可以使用 web 服务器（Apache、NGINX、Caddy等）或直接在项目中运行 `npx vite preview` 来测试生成的构建文件：。

<<<<<<< HEAD
### 配置基础路径 {#base-path}
=======
Then you can host it on [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), or whatever other web server or service that you want. Now you can share your slides with the rest of the world with a single link.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

如果你需要将幻灯片部署在网站的子路由下，你可以使用 `--base` 选项来进行修改。`--base` 选项必须以斜线 `/` 开始和结束；例如：

```bash
$ slidev build --base /talks/my-cool-talk/
```

欲了解更多，请参阅 [Vite 的文档](https://cn.vitejs.dev/guide/build.html#public-base-path)。

<<<<<<< HEAD
### 提供可下载的 PDF {#provide-downloadable-pdf}
=======
### Provide a Downloadable PDF
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

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

你也可以通过 CLI 的 `--download` 选项来指定（仅限 `boolean`）。

```bash
$ slidev build --download
```

When using the download option, you can also provide the export options:

除了使用 `--download` 选项，你还可以提供导出选项：

- 使用 [CLI 导出选项](/guide/exporting.html)
- 或 [frontmatter 导出选项](/custom/#frontmatter-configures)

### 输出目录 {#output-directory}

你可以使用 `--out` 来更改输出目录。

```bash
$ slidev build --out my-build-folder
```

### 监听模式 {#watch-mode}

通过传递 `--watch` 选项，构建会以监听模式运行，并在源代码发生变化时进行更新。

```bash
$ slidev build --watch
```

### 批量导出 {#multiple-entries}

<<<<<<< HEAD
你还可以一次导出多个幻灯片。
=======
You can build multiple slide decks at once.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
$ slidev build slides1.md slides2.md
```

或者

```bash
$ slidev build *.md
```

在这种情况下，每个输入文件都将生成自己的构建文件夹。

### 示例 {#examples}

下面是几个导出为单页应用的示例：

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)

欲了解更多，请参阅 [Showcases](/showcases)。

## 部署 {#deploy}

我们建议使用 `npm init slidev@latest` 来为你初始化你的项目，它包含了部署服务开箱即用的配置文件。

### Netlify

- [Netlify](https://netlify.com/)

在你项目的根目录创建 `netlify.toml` 文件，其内容如下：

```toml
[build]
publish = 'dist'
command = 'npm run build'

[build.environment]
NODE_VERSION = '20'

[[redirects]]
from = '/*'
to = '/index.html'
status = 200
```

接着，去 Netlify 的仪表盘，选择对应仓库并创建新的站点。

### Vercel

- [Vercel](https://vercel.com/)

在你项目的根目录创建 `vercel.json` 文件，其内容如下：

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

接着，去 Vercel 的仪表盘，选择对应仓库并创建新的站点。

### GitHub Pages

- [GitHub Pages](https://pages.github.com/)

<<<<<<< HEAD
将你的幻灯片部署到 GitHub Pages：
- 上传你的仓库里该项目的全部文件（例如，名字为 `name_of_repo`）
- 创建 `.github/workflows/deploy.yml` 文件，并包含如下内容。然后通过 Github Action 将你的幻灯片部署到 Github Pages。在该文件中，用 `name_of_repo` 替换 `<name_of_repo>`。
=======
To deploy your slides on GitHub Pages:

- upload all the files of the project in your repo (i.e. named `name_of_repo`)
- create `.github/workflows/deploy.yml` with the following content to deploy your slides to GitHub Pages via GitHub Actions.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```yaml
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build -- --base /${{github.event.repository.name}}/

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

- 在你的仓库里，选择 “Settings > Pages”。在 “Build and deployment” 下，选择 “Deploy from a branch”，选择 “gh-pages” 和 “root”，点击保存。
- 最终，在全部工作流执行之后，在 “Settings > Pages” 下会出现幻灯片的链接。
