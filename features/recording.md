---
depends:
  - guide/ui#navigation-bar
relates:
  - RecordRTC: https://github.com/muaz-khan/RecordRTC
  - WebRTC API: https://webrtc.org/
tags: [演讲者, 工具]
description: |
  在内置的摄像头调用及录屏功能加持下录制你的演示。
---

# 录制工具

Slidev 具有内置的摄像头视图和录制功能。它们使你可以轻松录制你的演示文稿，而无需在播放幻灯片时在其他录制工具之间切换。

## 摄像头视图 {#camera-view}

点击 [导航栏](../guide/ui#navigation-bar) 上的 <carbon-user-avatar class="inline-icon-btn"/> 按钮，将在演示文稿中显示你的摄像头视图。你可以拖动它，并使用右下角的把手来调整大小。尺寸和位置将持久化存储在 localStorage 中，因此，可以保证多次刷新后的展示一致，无需担心位置和大小丢失的问题。

<TheTweet id="1395006771027120133" />

## 开始录制 {#start-recording}

点击 [导航栏](../guide/ui#navigation-bar) 上的 <carbon-video class="inline-icon-btn"/> 按钮，将会弹出一个对话框。在此对话框中，你可以选择将你的摄像头视图嵌入到幻灯片中进行录制，也可以将它们分成两个视频文件。

此功能的实现得益于 [RecordRTC](https://github.com/muaz-khan/RecordRTC) 与 [WebRTC API](https://webrtc.org/)。

![](/screenshots/recording.png)
