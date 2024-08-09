# Slidev 命令行工具 (CLI)

`@slidev/cli` 提供了一个名为 `slidev` 的可执行命令，你可以用它来开发、构建和导出你的幻灯片。

## 基本信息 {#prerequisites}

可以通过全局安装 `@slidev/cli` 来使用 CLI，也可以在你的 Node.js 项目中本地安装。如果你的项目是通过 `npm init slidev` 创建的，则 CLI 已经被自动安装了。

::: warning
通常无法使用 `npx slidev`，因为包名实际上是 `@slidev/cli`。
:::

命令行选项遵循以下规则：

- 选项的值可以在空格或 `=` 字符后传递：

  例子: `slidev --port 8080` 等价于 `slidev --port=8080`

- 对于布尔选项，`true` 值可以省略：

  例子: `slidev --open` 等价于 `slidev --open true`

::: info

如果你使用 npm，请不要忘记在选项前加上 `--` 以将它们传递给 Slidev：

```bash
npm run slidev -- --remote --port 8080 --open
```

:::

## `slidev [entry]` {#dev}

启动一个本地 Slidev 服务器。

- `[entry]` (`string`, default: `slides.md`): path to the markdown file containing your slides.

选项：

- `--port`, `-p` (`number`, default: `3030`): port number.
- `--open`, `-o` (`boolean`, default: `false`): open in the browser.
- `--remote [password]` (`string`): listen to the public host and enable remote control, if a value is passed then the presenter mode is private and only accessible by passing the given password in the URL query `password` parameter.
- `--bind` (`string`, default: `0.0.0.0`): specify which IP addresses the server should listen on in the remote mode.
- `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
- `--force`, `-f` (`boolean`, default: `false`): force the optimizer to ignore the cache and re-bundle.
- `--theme`, `-t` (`string`): override theme.

## `slidev build [entry]` {#build}

构建一个可托管的 SPA。参阅 <LinkInline link="guide/hosting" /> 了解更多。

- `[entry]` (`string`, default: `slides.md`): path to the slides markdown file.

选项：

- `--out`, `-o` (`string`, default: `dist`): output directory
- `--base` (`string`, default: `/`): base URL (see https://cli.vuejs.org/config/#publicpath)
- `--download` (`boolean`, default: `false`): allow the download of the slides as a PDF inside the SPA
- `--theme`, `-t` (`string`): override theme

## `slidev export [...entry]` {#export}

Export slides to PDF (or other format). See [Exporting](../guide/exporting) for more details.

- `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

选项：

- `--output` (`string`, default: use `exportFilename` (see https://sli.dev/custom/#frontmatter-configures) or use `[entry]-export`): path to the output.
- `--format` (`'pdf', 'png', 'pptx', 'md'`, default: `'pdf'`): output format.
- `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
- `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
- `--dark` (`boolean`, default: `false`): export as dark theme.
- `--with-clicks`, `-c` (`boolean`, default: `false`): export pages for every click animation (see https://sli.dev/guide/animations.html#click-animation).
- `--theme`, `-t` (`string`): override theme.

## `slidev format [entry]` {#format}

格式化 markdown 文件。请注意，这不会格式化幻灯片的内容，只会格式化 markdown 文件的组织结构。

- `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

## `slidev theme [subcommand]` {#theme}

主题相关的操作。

子命令：

- `eject [entry]`: Eject the current theme into the local file system. See <LinkInline link="features/eject-theme" />.
  - `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.
  - 选项：
    - `--dir` (`string`, default: `theme`): the output dir.
    - `--theme`, `-t` (`string`): override theme.
