---
title: 安装
---

# 安装 {#installation}

## 初始模板 {#starter-template}

> Slidev 需要 [Node.js](https://nodejs.org/) 的版本 **>=14.0.0**

快速开始最好的方式就是使用官方的初始模板。

使用 NPM：

```bash
$ npm init slidev@latest
```

使用 Yarn：

```bash
$ yarn create slidev
```

跟随命令行的提示，它将自动为你打开幻灯片，网址是 http://localhost:3030/。

同时包含了一些基本配置和简单的 demo，为你说明如何开始使用 Slidev。

## 手动安装 {#install-manually}

如果你倾向于手动安装 Slidev，或者想把它集成到你已有的项目中，你可以执行如下操作：

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> 请注意，如果你使用的是 [pnpm](https://pnpm.io)，请先启用 [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) 选项，才能使得 Slidev 正常工作。
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## 全局安装 {#install-globally}

> 自 v0.14 开始可用

你可以使用如下命令在全局安装 Slidev：

```bash
$ npm i -g @slidev/cli
```

然后即可在任何地方使用 `slidev`，而无需每次都创建一个项目。

```bash
$ slidev
```

如果在本地的 `node_modules` 目录下找到了 `@slidev/cli`，此命令也同样有效。

## 在 Docker 上安装 {#install-on-docker}

如果你需要快速的在容器上部署你的演示文稿，你可以使用由 [tangramor](https://github.com/tangramor) 维护的预构建 [docker](https://hub.docker.com/r/tangramor/slidev) 镜像，或者自行构建。

在你的工作目录下运行下面的命令：

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    tangramor/slidev:latest
```

如果你的工作目录为空，容器会在目录下自动创建 `slides.md` 文件和其它相关文件，并基于 `3030` 端口启动 slidev 服务。

你可以通过 http://localhost:3030/ 访问你的幻灯片。


### 构建可部署镜像 {#build-deployable-image}

你也可以把你的 slidev 幻灯片构建到一个 docker 镜像里来进行部署，Dockerfile 如下：

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

使用命令 `docker build -t myppt .` 来构建镜像。

执行 `docker run --name myslides --rm --user node -p 3030:3030 myppt` 命令来运行镜像。

这时你就可用通过 http://localhost:3030/ 来打开你的幻灯片了。


### 构建单网页应用  {#build-hostable-spa-single-page-application}

在前面启动的 `slidev` 容器上运行命令 `docker exec -i slidev npx slidev build` 就可以在 `dist` 目录下将你的幻灯片生成静态 HTML 文件。


#### 使用 Github Pages 托管 {#host-on-github-pages}

你可以在静态 Web 站点上托管生成的静态文件，比如 [Github pages](https://tangramor.github.io/slidev_docker/) 或 Gitlab pages。

由于 Github pages 的 URL 可能包含二级目录，所以你需要修改生成的 `index.html`，把 `href="/assets/xxx` 改为 `href="./assets/xxx` （即使用相对路径）。或者你可以用 vite 的 `--base=/<subfolder>/` 选项来指定二级目录，例如： `docker exec -i slidev npx slidev build --base=/slidev_docker/`。

为了防止触发 Jekyll 构建流程，你需要在静态站根目录下添加一个名为 `.nojekyll` 的空文件


#### 使用 docker 托管 {#host-by-docker}

你当然也可以使用 docker 容器来托管生成的静态文件：

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

或者使用下面的 Dockerfile 来构建一个静态站点的容器镜像：

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html

```

运行 `docker build -t mystaticppt .` 来构建镜像

执行 `docker run --name myslides --rm -p 80:80 mystaticppt` 命令来启动容器。

此时你就可以通过 http://localhost/ 来访问你的幻灯片了。


<<<<<<< HEAD
关于容器的更多详细信息，请参考 [tangramor/slidev_docker 仓库](https://github.com/tangramor/slidev_docker)。
=======
Refer to the [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) for more details.

### Command Line Interface (CLI)

`@slidev/cli` Expose a few commands you can use with `npx slidev ...` or by adding scripts in your `package.json`:
```json
{
  "script": {
    "dev": "slidev"
  }
}
```

In that case you will be able to run `npm run dev`.

You can pass options to any commands:

* boolean option are `true` if they are present, false otherwise (example: `slidev --open`)
* some options can have values you can add just after the option or by using the `=` character (example: `slidev --port 8080` or `slidev --port=8080`)

If you use npm scripts, don't forget to add `--` after the npm command:
```bash
npm run slidev -- --open
```

#### `slidev [entry]`

Start a local server for Slidev.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--port`, `-p` (`number`, default: `3030`): port number.
* `--open`, `-o` (`boolean`, default: `false`): open in browser.
* `--remote [password]` (`string`): listen to public host and enable remote control, if a value is passed then the presenter mode is private and only accessible by passing the given password in the URL query `password` parameter.
* `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
* `--force`, `-f` (`boolean`, default `false`): force the optimizer to ignore the cache and re-bundle.
* `--theme`, `-t` (`string`): override theme.

#### `slidev build [entry]`

Build hostable SPA.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--watch`, `-w` (`boolean`, default: `false`): build watch.
* `--out`, `-o` (`string`, default: `dist`): output dir.
* `--base` (`string`, default: `/`): base URL (see https://cli.vuejs.org/config/#publicpath)
* `--download` (`boolean`, default: `false`): allow to download the slides as PDF inside the SPA.
* `--theme`, `-t` (`string`): override theme.

#### `slidev export [entry]`

Export slides to PDF (or other format).

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--output` (`string`, default: use `exportFilename` (see https://sli.dev/custom/#frontmatter-configures) or use `[entry]-export`): path to the output.
* `--base` (`'pdf', 'png', 'md'`, default: `'pdf'`): output format.
* `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
* `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
* `--dark` (`boolean`, default: `false`): export as dark theme.
* `--with-clicks`, `-c` (`boolean`, default: `false`): export pages for every clicks (see https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): override theme.

#### `slidev format [entry]`

Format the markdown file.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

#### `slidev theme [subcommand]`

Theme related operations.

Subcommands:

* `eject [entry]`: Eject current theme into local file system
  * `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.
  * Options:
    * `--dir` (`string`, default: `theme`): output dir.
    * `--theme`, `-t` (`string`): override theme.
>>>>>>> 87e46ef57643c3aa0f8551691b431a7cec3ed0c4
