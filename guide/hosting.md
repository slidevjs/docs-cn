---
outline: deep
---

# 编译和部署

Slidev 被设计为在编辑或展示幻灯片时作为 Web 服务器运行。然而，在展示之后，你可能希望与他人分享你的**交互式**幻灯片。本指南将向你展示如何构建和部署你的幻灯片。

## 编译为静态网页 {#spa}

你可以通过以下命令将幻灯片构建为静态的 [单页应用 (SPA)](https://developer.mozilla.org/en-US/docs/Glossary/SPA)：

```bash
$ slidev build
```

默认情况下，生成的文件会被放在 `dist` 文件夹中。你可以通过运行 `npx vite preview` 或任何其他静态服务器来测试你的幻灯片的构建版本。

### 基础路径 {#base}

若要将你的幻灯片部署在子目录下，你需要传递 `--base` 选项。`--base` 路径**必须以斜杠 `/` 开头和结尾**。例如：

```bash
$ slidev build --base /talks/my-cool-talk/
```

参阅 [Vite 文档](https://cn.vitejs.dev/guide/build.html#public-base-path) 了解更多细节。

### 输出目录 {#output}

你可以通过 `--out` 选项更改输出目录：

```bash
$ slidev build --out my-build-folder
```

### 多个幻灯片 {#multiple-slides}

你可以通过传递多个 Markdown 文件作为参数一次性构建多个幻灯片：

```bash
$ slidev build slides1.md slides2.md
```

或者，如果你的 shell 支持，你可以使用通配符：

```bash
$ slidev build *.md
```

在上例中，每个输入文件将在输出目录中生成一个包含构建的文件夹。

### 例子 {#examples}

以下是一些导出的 SPA 的例子：

- [Demo Slides](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)
- 更多请查阅 [案例展示](../resources/showcases)

### 选项 {#options}

<LinkCard link="features/build-with-pdf" />
<LinkCard link="features/bundle-remote-assets" />

## 静态部署 {#hosting}

我们推荐使用 `npm init slidev@latest` 来初始化你的项目，它包含了一些常用的部署配置文件。

### GitHub Pages {#github-pages}

要通过 GitHub Actions 在 [GitHub Pages](https://pages.github.com/) 上部署你的幻灯片，请按照以下步骤操作：

1. 在你的仓库中上传所有项目文件（例如命名为 `name_of_repo`）。
2. 创建 `.github/workflows/deploy.yml` 文件，内容如下，以通过 GitHub Actions 将你的幻灯片部署到 GitHub Pages。

::: details deploy.yml

```yaml
name: Deploy pages

on:
  workflow_dispatch:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Setup @antfu/ni
        run: npm i -g @antfu/ni

      - name: Install dependencies
        run: nci

      - name: Build
        run: nr build --base /${{github.event.repository.name}}/

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

:::

3. 在你的仓库中，转到 `Settings` > `Pages`。在 `Build and deployment` 下，选择 `GitHub Actions`。
4. 最后，在工作流执行后，幻灯片的链接应该会出现在 `Settings` > `Pages` 下。

### Netlify

创建项目根目录下的 `netlify.toml` 文件，内容如下：

::: details netlify.toml

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

:::

然后，你可以在 [Netlify dashboard](https://netlify.com/) 中创建一个新站点，并将仓库与之关联。

### Vercel

创建项目根目录下的 `vercel.json` 文件，内容如下：

::: details vercel.json

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

:::

然后，你可以在 [Vercel dashboard](https://vercel.com/) 中创建一个新站点，并将仓库与之关联。

### 在 Docker 上部署 {#docker}

如果你需要一个快速的容器运行幻灯片的方式，你可以使用由 [tangramor](https://github.com/tangramor) 维护的预构建 [Docker Image](https://hub.docker.com/r/tangramor/slidev)，或者自己构建一个。

::: details 使用 Docker Image

只需在你的工作目录中运行以下命令：

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

**_Note_**: 你可以使用 `NPM_MIRROR` 来指定一个 npm 镜像以加快安装过程。

如果你的工作目录为空，它将在你的工作目录下生成一个模板 `slides.md` 和其他相关文件，并在端口 `3030` 上启动服务器。然后，你可以从 `http://localhost:3030/` 访问你的幻灯片。

若要用你的幻灯片创建一个 Docker Image，你可以使用以下 Dockerfile：

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

创建 Docker Image：`docker build -t myslides .`

运行容器：`docker run --name myslides --rm --user node -p 3030:3030 myslides`

然后，你可以从 `http://localhost:3030/` 访问你的幻灯片。

:::
