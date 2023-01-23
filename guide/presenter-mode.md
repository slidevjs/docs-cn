---
title: 演讲者模式
---

# 演讲者模式 {#presenter-mode}

点击导航面板上的 <carbon-user-speaker class="inline-icon-btn"/> 按钮，或者手动访问 `http://localhost:3030/presenter` 地址，即可进入演讲者模式。每当你进入演示者模式，其他页面实例会自动与演示者保持同步。

![](/screenshots/presenter-mode.png)

## Disabling

Presenter mode is enabled by default.

You can disable this feature with the following config:

```md
---
presenter: false
---
```

Or you can enable it only for `dev` or `build` mode by setting the mode you want in the config:
```md
---
presenter: dev
---
```
In that case the presenter will only be available when running `slidev` but not when running `slidev build`.

## Remote restricted access

You can run your presentation with remote access by running `slidev --remote`.

In that case you may want to share the slides with other people but you don't want them to access the presenter mode to mess up your presentation.

For this scenario you can provide a password for starting the server by running `slidev --remote=your_password`.

In that case you will need to provide the password when accessing `/presenter/*` routes.
