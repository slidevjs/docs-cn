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

- `[entry]` (`string`, 默认值: `slides.md`): 幻灯片的 markdown 文件路径.

选项:

- `--port`, `-p` (`number`, 默认值: `3030`): 端口号
- `--open`, `-o` (`boolean`, 默认值: `false`): 自动在浏览器中打开
- `--remote [password]` (`string`): 监听公共主机并启用远程控制。如果传递了一个值，演示者模式将会是私有的，只能通过在URL中添加 `password` 的 query 来传递密码以访问。
- `--bind` (`string`, 默认值: `0.0.0.0`): 指定服务器在远程模式下应监听哪些IP地址
- `--log` (`'error', 'warn', 'info', 'silent'`, 默认值: `'warn'`): 日志等级
- `--force`, `-f` (`boolean`, 默认值: `false`): 强制忽略缓存并重新打包
- `--theme`, `-t` (`string`): 覆盖文件中设定的主题

## `slidev build [entry]` {#build}

构建一个可托管的 SPA。参阅 <LinkInline link="guide/hosting" /> 了解更多。

- `[entry]` (`string`, default: `slides.md`): path to the slides markdown file.

选项：

- `--out`, `-o` (`string`, 默认值: `dist`): 输出目录
- `--base` (`string`, 默认值: `/`): 基本 URL (参考 https://vitejs.dev/config/shared-options.html#base)
- `--download` (`boolean`, 默认值: `false`): 允许在构建后下载相应 幻灯片的 PDF 文件
- `--theme`, `-t` (`string`): 覆盖文件中设定的主题

## `slidev export [...entry]` {#export}

将幻灯片导出为 PDF（或其他格式）。请参阅 <LinkInline link="guide/exporting" /> 以了解更多。

- `[entry]` (`string`, 默认值: `slides.md`): 幻灯片的 markdown 文件路径

选项：

- `--output` (`string`, 默认值: use `exportFilename` (参考 https://cn.sli.dev/custom/#frontmatter-configures) 或使用 `[entry]-export`): 导出的路径.
- `--format` (`'pdf', 'png', 'md'`, 默认值: `'pdf'`): 输出格式.
- `--timeout` (`number`, 默认值: `30000`): 渲染打印页面的超时时间 (参考 https://playwright.dev/docs/api/class-page#page-goto)
- `--range` (`string`): 导出的页面范围 (示例: `'1,4-5,6'`).
- `--dark` (`boolean`, 默认值: `false`): 导出为暗黑模式
- `--with-clicks`, `-c` (`boolean`, 默认值: `false`): 为每次点击分别导出 (参考 https://cn.sli.dev/guide/animations.html#click-animations).
- `--theme`, `-t` (`string`): 覆盖文件中设定的主题
- `--omit-background` (`boolean`, default: `false`): 不导出浏览器默认的背景色

## `slidev format [entry]` {#format}

格式化 markdown 文件。请注意，这不会格式化幻灯片的内容，只会格式化 markdown 文件的组织结构。

- `[entry]` (`string`, 默认值: `slides.md`): 幻灯片的 markdown 文件路径

## `slidev theme [subcommand]` {#theme}

主题相关的操作。

子命令：

- `eject [entry]`: 将当前主题弹出到本地文件中
  - `[entry]` (`string`, 默认值: `slides.md`): 幻灯片的 markdown 文件路径
  - 选项:
    - `--dir` (`string`, 默认值: `theme`): 输出文件夹
    - `--theme`, `-t` (`string`): 覆盖文件中设定的主题
