---
depends:
  - guide/exporting
  - guide/hosting
relates:
  - CLI export 命令: /builtin/cli#export
  - Headmatter: /custom/#headmatter
tags: [导出, 构建]
description: |
  在构建时生成可供下载的 PDF。
---

# 在构建时生成 PDF

你可以在 headmatter 中使用以下配置，在已构建的幻灯片中提供一个可下载的 PDF：

```md
---
download: true
---
```

Slidev 将在构建时生成一个 PDF 文件，并在构建的输出中显示一个下载按钮。

你也可以提供一个 PDF 的链接，这样 Slidev 将跳过渲染过程。

```md
---
download: 'https://myslide.com/my-talk.pdf'
---
```

这也可以通过 CLI 选项 `--download` (只接受 `boolean`值)来完成。

```bash
$ slidev build --download
```

启用下载选项时，你还可以通过以下方式提供导出选项：

- [CLI 导出选项](/builtin/cli#export)
- [Headmatter 导出选项](/custom/#frontmatter-configures)
