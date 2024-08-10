# 配置 Vite 及其扩展

<Environment type="node" />

Slidev 基于 [Vite](http://vitejs.dev/) 实现。这意味着你可以利用 Vite 强大的插件系统来进一步定制你的幻灯片。

如果项目中存在 `vite.config.ts` 文件，将被自动读取，并将与 Slidev，你的主题和扩展插件提供的配置文件合并

## 配置内部插件

Slidev 已经内置了以下插件：

- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
- [unplugin-icons](https://github.com/unplugin/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/unplugin/unplugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

如需对内置插件列表进行配置，先创建 `vite.config.ts`，其内容如下。请注意，Slidev 对这些插件有些[预设配置](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/vite/index.ts)，如下做法会覆盖其中一些配置，可能会导致应用崩溃。请将此功能视为**高级功能**，在继续操作前，请确保你知道自己在干什么。

<!-- eslint-disable import/first -->

```ts twoslash
/// <reference types="@slidev/types" />
import type MarkdownIt from 'markdown-it'
declare const MyPlugin: (md: MarkdownIt) => void
// ---cut---
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue 的选项 */
    },
    markdown: {
      /* markdown-it 的选项 */
      markdownItSetup(md) {
        /* 自定义的 markdown-it 插件 */
        md.use(MyPlugin/* ... */)
      },
    },
    /* 其他插件的选项 */
  },
})
```

了解更多：[类型定义](https://github.com/slidevjs/slidev/blob/main/packages/types/src/vite.ts#L11)

::: warning
It is not allowed to re-add plugins that has been used internally be Slidev. For example, instead of
Slidev 不允许重新添加已内置使用的插件。例如，你不应当这么做

```ts twoslash
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue({
      /* vue 的选项 */
    })
  ],
})
```

请将Vue选项传递给 `slidev.Vue` 字段，如上所述。
:::
