---
relates:
  - vite-plugin-remote-assets: https://github.com/antfu/vite-plugin-remote-assets
tags: [构建]
description: |
  在构建时下载和打包所有远程资源。
---

# 打包远程资源

就像你在 markdown 中做的那样，你可以使用指向远程或本地 URL 的图片。

对于远程的资源，内置的 [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) 会在首次运行时将它们缓存到磁盘上，来确保此后即使是较大的图片也能立刻加载。

```md
![远程图片](https://sli.dev/favicon.png)
```

对于本地文件, 你可以将它们放入 [`public` 文件夹](/custom/directory-structure.html#public) 并且用 **前导斜杠** (例如, `/pic.png`, 而不是相对于当前文件的 `./pic.png`)来引用它们。

```md
![本地图片](/pic.png)
```

如果你想应用自定义的大小或样式，你可以把它们转换为 `<img>` 标签：

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```
