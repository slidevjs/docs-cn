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

如果你需要快速的在容器上部署你的演示文稿，你可以使用由 [stig124](https://github.com/Stig124) 维护的预构建 [docker](https://hub.docker.com/r/stig124/slidev) 镜像，或者自行构建。

关于容器的更多详细信息，请参考 [slidevjs/container 仓库](https://github.com/slidevjs/container)。
