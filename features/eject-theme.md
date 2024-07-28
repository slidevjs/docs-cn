---
depends:
  - guide/theme-addon
tags: [主题, cli]
description: |
  从你的项目中弹出一个已安装的主题以进行自定义。
---

# Eject Theme

If you want to get full control of the current theme, you can **eject** it to your local file system and modify it as you want. By running the following command

```bash
$ slidev theme eject
```

It will eject the theme you are using currently into `./theme`, and change your frontmatter to

```yaml
---
theme: ./theme
---
```

This could also be helpful if you want to make a theme based on an existing one. If you do, remember to mention the original theme and the author :)

For more options of the `theme` command, please refer to the [Theme Command](../builtin/cli#theme) section.
