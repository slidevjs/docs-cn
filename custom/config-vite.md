---
title: 配置 Vite
---

# 配置 Vite {#configure-vite}

<Environment type="node" />

Slidev 基于 [Vite](http://vitejs.dev/) 实现。这意味着你可以利用 Vite 强大的插件系统来进一步定制你的幻灯片。

如果项目中存在 `vite.config.ts` 文件，将被读取。

Slidev 已经内置了以下插件：

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-components](https://github.com/antfu/vite-plugin-components)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

<<<<<<< HEAD
可以在 [此处](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts) 了解 Slidev 的相关预设。
=======
Learn more about the [pre-configurations here](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Configure Internal Plugins

> Available since v0.21

To configure the built-in plugins list above, create `vite.config.ts` with the following content. Please note Slidev has some preconfigure options for those plugins, this usage will override some of them, which could potentially cause the app to break. Please treat this as **an advanced feature**, make sure you know what you are doing before moving on.

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

See the [type decalrations](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) for more options.
>>>>>>> 83d754553616372f9655366cd91e125b8d17f855
