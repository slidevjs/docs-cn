# 演讲录制 {#recording}

Slidev 拥有内置的演讲录制和人像视图。你可以使用它们轻松实现你的演讲录制。

## 人像视图 {#camera-view}

点击导航面板上的 <carbon-user-avatar class="inline-icon-btn"/> 按钮，将在演示文稿中显示你的人像视图。你可以拖动它，并使用右下角的处理程序来调整大小。尺寸和位置将持久化存储在 `localStorage` 中，因此，可以保证多次刷新后的展示一致，无需担心位置和大小丢失的问题。

## 录制 {#recording}

点击导航面板上的 <carbon-video class="inline-icon-btn"/> 按钮，将会弹出一个对话框。在此对话框中，你可以选择将你的人像视图嵌入到幻灯片中进行录制，也可以将它们分成两个视频文件。

此功能的实现得益于 [RecordRTC](https://github.com/muaz-khan/RecordRTC)，同时还使用了 [WebRTC 的 API](https://webrtc.org/)。

![](/screenshots/recording.png)
