---
title: 使用主题
---

# 使用主题 {#use-theme}

在 Slidev 中更换主题非常简单。在 frontmatter 中添加  `theme:` 配置即可。

```yaml
---
theme: seriph
---
```

<<<<<<< HEAD
在服务启动后，它会自动提示你是否安装该主题：
=======
> **Note**
> To install a theme from a scoped package, you will have to give the full namespace e.g `@organization/slidev-theme-name`

You can start the server, which will prompt you to install the theme automatically
>>>>>>> 5c3b2e72641bb22ec8f567c57e56ad4d873d45ea

<div class="language-md">
<pre>
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

或者你也可以手动安装：

```bash
$ npm install @slidev/theme-seriph
```

现在你就可以使用全新的主题了！你可以查阅相应主题的 README 文档以了解更多的使用细节。

想要分享你自己的主题吗？来看看如何 [编写主题](/themes/write-a-theme)。

## 弹出主题 {#eject-theme}

如果你想对当前的主题拥有完全的掌控，你可以将它 **弹出** （eject）到本地的文件系统，并且随心所欲地修改它。可以使用以下命令：

```bash
$ slidev theme eject
```

它会将你当前使用的主题弹出到 `./theme` 目录下，然后请将你的 frontmatter 修改为：

```yaml
---
theme: ./theme
---
```

如果你想在现有的主题上制作主题，这样会很方便。当然如果你这么做了，记得标明原主题和作者哦 :)

## 本地主题 {#local-theme}

通过上面的描述，你可能已经发现了：在一个项目里是可以使用本地主题的。你只需要在主题说明中引入相对路径：

```yaml
---
theme: ./path/to/theme
---
```

欲了解更多详细信息，请参阅 [编写主题](/themes/write-a-theme)。
