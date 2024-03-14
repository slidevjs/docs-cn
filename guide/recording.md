---
title: 演讲录制
---

# 演讲录制 {#recording}

Slidev 拥有内置的演讲录制和摄像头视图。你可以使用它们轻松实现你的演讲录制。

## 摄像头视图 {#camera-view}

点击导航面板上的 <carbon-user-avatar class="inline-icon-btn"/> 按钮，将在演示文稿中显示你的摄像头视图。你可以拖动它，并使用右下角的把手来调整大小。尺寸和位置将持久化存储在 `localStorage` 中，因此，可以保证多次刷新后的展示一致，无需担心位置和大小丢失的问题。

<TheTweet id="1395006771027120133" />

## 录制

点击导航面板上的 <carbon-video class="inline-icon-btn"/> 按钮，将会弹出一个对话框。在此对话框中，你可以选择将你的摄像头视图嵌入到幻灯片中进行录制，也可以将它们分成两个视频文件。

此功能的实现得益于 [RecordRTC](https://github.com/muaz-khan/RecordRTC) 与 [WebRTC API](https://webrtc.org/)。

![](/screenshots/recording.png)
