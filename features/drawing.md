---
depends:
  - guide/ui#navigation-bar
relates:
  - drauu: https://github.com/antfu/drauu
tags: [绘图]
description: |
  在幻灯片中绘图和批注。
---

# 绘图与批注

我们基于 [drauu](https://github.com/antfu/drauu) 实现了绘图和批注的功能，可用于轻松绘制和注释幻灯片。

首先，点击 [导航栏](../guide/ui#navigation-bar) 中的 <carbon-pen class="inline-icon-btn"/> 图标来打开绘图工具栏。它也可以在 [演讲者模式](/guide/ui#presenter-mode) 中使用。你创建的绘图和批注都会在所有实例中实时**自动同步**起来。

<TheTweet id="1424027510342250499" />

## 与触控笔一同使用

当在平板电脑上使用触控笔时（例如，带有 Apple Pencil 的 iPad），Slidev 可以智能地检测输入类型。你可以直接用笔在幻灯片上绘图，而无需打开绘图模式，同时你的手指或鼠标可以控制导航。

## 对绘图进行持久化

以下 frontmatter 中的配置可以把你的绘图作为 SVG 保存在 `.slidev/drawings` 目录下，并把它们放入你导出的 pdf 或者部署的网站中。

```md
---
drawings:
  persist: true
---
```

## 禁用绘图

完全禁用：

```md
---
drawings:
  enabled: false
---
```

仅在开发环境可用:

```md
---
drawings:
  enabled: dev
---
```

仅在演讲者模式可用:

```md
---
drawings:
  presenterOnly: true
---
```

## 绘图同步

默认情况下，Slidev 会在所有实例中同步你的绘图。如果你在和他人共享幻灯片，你可能会需要通过以下方式禁用同步：

```md
---
drawings:
  syncAll: false
---
```

通过这个配置，只有来自演讲者实例的绘图会和其他实例同步。