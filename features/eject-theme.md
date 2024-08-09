---
depends:
  - guide/theme-addon
tags: [主题, CLI]
description: |
  项目中弹出已安装的主题以进行自定义。
---

# 弹出主题

如果你想对当前的主题拥有完全的掌控，你可以将它 **弹出**（eject）到本地的文件系统，并且随心所欲地修改它。可以使用以下命令：

```bash
$ slidev theme eject
```

这会将你当前使用的主题弹出到 `./theme` 目录下，然后自动将你的 frontmatter 修改为：

```yaml
---
theme: ./theme
---
```

如果你想在现有的主题上制作主题，这样会很方便。当然如果你这么做了，记得标明原主题和作者哦 :)

关于命令 `theme` 的更多选项，请参考 [Theme 命令](../builtin/cli#theme) 部分