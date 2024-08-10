---
outline: deep
---

# 用户界面

## 导航栏 {#navigation-bar}

在播放模式下，导航栏在页面的左下角。可能需要将鼠标移动到页面的左下角才能看到导航栏。

![](/screenshots/navbar.png)

> 你可以通过 <LinkInline link="features/global-layers" /> 来扩展导航栏的内容。

## 导航操作 {#navigation-actions}

| 快捷键                   | 导航栏按钮                                                              | 说明                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| <kbd>f</kbd>                        | <carbon-maximize class="inline-icon-btn"/> <carbon-minimize class="inline-icon-btn"/> | 切换全屏模式                                               |
| <kbd>right</kbd> / <kbd>space</kbd> | <carbon-arrow-right class="inline-icon-btn"/>                                         | 下一个动画或幻灯片                                         |
| <kbd>left</kbd>                     | <carbon-arrow-left class="inline-icon-btn"/>                                          | 上一个动画或幻灯片                                     |
| <kbd>up</kbd>                       | -                                                                                     | 上一页幻灯片                                                  |
| <kbd>down</kbd>                     | -                                                                                     | 下一页幻灯片                                                      |
| <kbd>o</kbd>                        | <carbon-apps class="inline-icon-btn"/>                                                | 打开 [幻灯片总览](#quick-overview)                        |
| <kbd>d</kbd>                        | <carbon-sun class="inline-icon-btn"/> <carbon-moon class="inline-icon-btn"/>          | 切换暗色模式                                                |
| -                                   | <carbon-user-avatar class="inline-icon-btn"/>                                         | 开启 [摄像头视图](../features/recording#camera-view)         |
| -                                   | <carbon-video class="inline-icon-btn"/>                                               | 开启 <LinkInline link="features/recording" />                  |
| -                                   | <carbon-user-speaker class="inline-icon-btn"/>                                        | 进入 [演讲者模式](#presenter-mode)              |
| -                                   | <carbon-edit class="inline-icon-btn"/>                                                | 打开或关闭 <LinkInline link="features/side-editor" />               |
| -                                   | <carbon-download class="inline-icon-btn"/>                                            | 下载 PDF。参见 <LinkInline link="features/build-with-pdf" /> |
| -                                   | <carbon-information class="inline-icon-btn"/>                                         | 查看幻灯片的信息                               |
| -                                   | <carbon-settings-adjust class="inline-icon-btn"/>                                     | 查看设置菜单                                              |
| <kbd>g</kbd>                        | -                                                                                     | 打开跳转对话框                                                    |

> Slidev 支持 [自定义快捷键](../custom/config-shortcuts)。

## 幻灯片总览 {#quick-overview}

通过点击 <kbd>o</kbd> 键或点击导航栏中的 <carbon-apps class="inline-icon-btn"/> 按钮，你可以查看幻灯片的总览，以便快速地跳转至某幻灯片。

![](/screenshots/slides-overview.png)

## 演讲者模式 {#presenter-mode}

点击 <carbon-user-speaker class="inline-icon-btn"/> 按钮或访问 `http://localhost:<port>/presenter` 来进入演讲者模式。

在演讲中，建议打开两个浏览器窗口 - 一个在播放模式用于观众，另一个在演讲者模式用于你。然后你可以将第一个屏幕分享给观众，保留第二个屏幕给自己。每当你在演讲者模式中导航时，观众的屏幕也会同步更新。

![](/screenshots/presenter-mode.png)

## 幻灯片列表 {#slides-overview}

> 自 v0.48.0 起可用

<video src="https://github.com/slidevjs/slidev/assets/11247099/01bbf5b3-f916-4646-9ea4-cf269c0567cb"
controls rounded shadow></video>

首先打开 [幻灯片总览](#quick-overview)，然后点击右上角的 <carbon-list-boxes class="inline-icon-btn"/>，或直接访问 `http://localhost:<port>/overview`，即可进入幻灯片列表页面。

幻灯片列表页面会给你一个线性列表，包含所有幻灯片的注释。你可以双击注释来直接编辑，也可以拖动点击滑块来预览幻灯片的步骤。

## 绘图 {#drawing}

请参阅:

<LinkCard link="features/drawing" />

## 录制工具 {#recording}

请参阅:

<LinkCard link="features/recording"/>

## 全局图层 {#global-layers}

可以在全局或对每张幻灯片的上方或下方添加任何自定义 UI：

<LinkCard link="features/global-layers" />
