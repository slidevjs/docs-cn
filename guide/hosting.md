
# 静态部署 {#static-hosting}

## 构建单页应用（SPA） {#build-single-page-application-spa}

你还可以将幻灯片构建成可部署的单页应用（SPA）：

```bash
$ slidev build
```

<<<<<<< HEAD
生成的应用程序会保存在 `dist/` 目录下，然后你可以将该目录部署在 [GitHub Pages](https://pages.github.com/)，[Netlify](https://netlify.app/)，[Vercel](https://vercel.com/)，等你想部署的任何地方。接着，就可以将你幻灯片的链接分享给任何人。
=======
The generated application will be available under `dist/`.

You can test the generated build using a web server (Apache, NGINX, Caddy...etc.) or in the project you can directly run: `npx vite preview`.

Then you can host it on [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), or whatever you want. Now you can share your slides with the rest of the world with a single link.
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

### 配置基础路径 {#base-path}

<<<<<<< HEAD
如果你需要将幻灯片部署在网站的子路由下，你可以使用 `--base` 选项来进行修改。例如：
=======
To deploy your slides under sub-routes, you will need to pass the `--base` option. The `--base` path **must begin and end** with a slash `/`; for example:
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

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

<<<<<<< HEAD
### 示例 {#examples}
=======
This can also be done with the CLI option `--download` (`boolean` only).

```bash
$ slidev build --download
```

When using the download option, you can also provide the export options:

* By using [CLI export options](/guide/exporting.html)
* Or [frontmatter export options](/custom/#frontmatter-configures)

### Output directory

You can change the output directory using `--out`.

```bash
$ slidev build --out my-build-folder
```

### Watch mode

By passing the `--watch` option the build will run in watch mode and will rebuild anytime the source changes.

```bash
$ slidev build --watch
```

### Multiple entries

You can also build multiple slides at once.

```bash
$ slidev build slides1.md slides1.md
```

Or

```bash
$ slidev build *.md
```

In this case, each input file will generate a folder containing the build in the output directory.

## Examples
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

下面是几个导出为单页应用的示例：

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)

欲了解更多，请参阅 [Showcases](/showcases)。

## 部署

我们建议使用 `npm init slidev@latest` 来为你初始化你的项目，它包含了部署服务开箱即用的配置文件。

### Netlify

- [Netlify](https://netlify.com/)

在你项目的根目录创建 `netlify.toml` 文件，其内容如下：

```ts
[build.environment]
  NODE_VERSION = "14"

[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
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
- create `.github/workflows/deploy.yml` with following content to deploy your slides to GitHub Pages via GitHub Actions. In this file, replace `<name_of_repo>` with `name_of_repo`. Make sure to leave the leading and trailing slashes in place.
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

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
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build -- --base /<name_of_repo>/

      - uses: actions/configure-pages@v3

      - uses: actions/upload-pages-artifact@v1
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v2
```
<<<<<<< HEAD
- 在你的仓库里，选择 “Settings > Pages”。在 “Build and deployment” 下，选择 “Deploy from a branch”，选择 “gh-pages” 和 “root”，点击保存。
- 最终，在全部工作流执行之后，在 “Settings > Pages” 下会出现幻灯片的链接。
=======
- In your repository, go to Settings>Pages. Under "Build and deployment", select "Github Actions".
- Finally, after all workflows are executed, a link to the slides should appear under Settings>Pages.
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024
