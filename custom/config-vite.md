---
title: 配置 Vite
---

# 配置 Vite {#configure-vite}

<Environment type="node" />

<<<<<<< HEAD
Slidev 基于 [Vite](http://vitejs.dev/) 实现。这意味着你可以利用 Vite 强大的插件系统来进一步定制你的幻灯片。
=======
Slidev is powered by [Vite](https://vitejs.dev/) under the hood. This means you can leverage Vite's great plugin system to customize your slides even further.
>>>>>>> 55faf79109ec7628fa7fd3ed717d79edc91e9433

如果项目中存在 `vite.config.ts` 文件，将被读取。

Slidev 已经内置了以下插件：

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

可以在 [此处](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts) 了解 Slidev 的相关预设。

## 配置内部插件 {#configure-internal-plugins}

> 自 v0.21 起可用

如需对内置插件列表进行配置，先创建 `vite.config.ts`，其内容如下。请注意，Slidev 对这些插件有些预设配置，如下做法会覆盖其中一些配置，可能会导致应用崩溃。请将此功能视为**高级功能**，在继续操作前，请确保你知道自己在干什么。

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
```

欲了解更多，请参阅 [类型声明](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50)。
