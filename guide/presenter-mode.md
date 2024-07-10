---
title: 演讲者模式
---

<<<<<<< HEAD
# 演讲者模式 {#presenter-mode}

点击导航面板上的 <carbon-user-speaker class="inline-icon-btn"/> 按钮，或者手动访问 `http://localhost:3030/presenter` 地址，即可进入演讲者模式。每当你进入演示者模式，其他页面实例会自动与演示者保持同步。
=======
Click the <carbon-user-speaker class="inline-icon-btn"/> button in the navigation panel, or visit `http://localhost:3030/presenter` manually, to enter the presenter mode. To present, you'll want to open two browser windows, one for the presenter and one for the audience. Generally maximizing the slideshow window on your projector screen, then controlling it from your laptop's screen is how people present with Slidev.

Whenever you change slides in the presenter mode, all other page instances will automatically change as well, to stay in sync with the presenter.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

![](/screenshots/presenter-mode.png)

## 禁用 {#disabling}

演讲者模式默认启用。

可以使用如下配置禁用此功能:

```md
---
presenter: false
---
```

<<<<<<< HEAD
或者，可以通过在配置中设置所需的模式，只为 `dev` 或 `build` 模式启用它:
=======
Alternately you can enable it only for `dev` or `build` modes by setting the mode you want in the config:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```md
---
presenter: dev
---
```

在这种情况下，只有在运行 `slidev` 时才会使用演讲者模式，而在运行 `slidev build` 时则不开启演讲者模式。

## 远程访问限制 {#remote-restricted-access}

可以通过运行 `slidev --remote` 来使用远程访问来运行演示文稿。

<<<<<<< HEAD
在这种情况下，你可能希望与其他人分享幻灯片，但又不希望他们访问演讲者模式以防搞乱你的演示文稿。

对于这个场景，可以通过运行 `slidev --remote=your_password` 来提供启动服务器。
=======
If you want to share your slides with other people but you don't want them to access the presenter mode (either because you're ashamed of your presenter notes, or because you don't want them to mess up your presentation), you can provide a password to protect the presenter server by running `slidev --remote=your_password`.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

在这种情况下，访问 `/presenter/*` 路由时需要提供上述密码。