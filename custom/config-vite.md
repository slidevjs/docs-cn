# 配置 Vite {#configure-vite}

Slidev 基于 [Vite](http://vitejs.dev/) 实现。这意味着你可以利用 Vite 强大的插件系统来进一步定制你的幻灯片。

如果项目中存在 `vite.config.ts` 文件，将被读取。

Slidev 已经内置了以下插件：

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-components](https://github.com/antfu/vite-plugin-components)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

可以在 [此处](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts) 了解 Slidev 的相关预设。
