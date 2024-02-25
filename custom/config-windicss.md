---
title: 配置 Windi CSS
---

# 配置 Windi CSS {#configure-windi-css}

<Environment type="node" />

<<<<<<< HEAD
Markdown 天然支持 HTML。因此，你可以按照你想要的方式对你的内容进行样式设计。为了提供一些便利，我们内置了 [Windi CSS](https://github.com/windicss/windicss)，所以你可以直接使用 Windi CSS 提供的工具类对样式进行调整。
=======
::: warning
Since Slidev v0.47.0, we no longer support Windi CSS. Please migrate to [UnoCSS](/custom/config-unocss).
:::

Markdown naturally supports embedded HTML markups. You can therefore style your content the way you want.
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

示例：

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

[Windi CSS v3.0](https://windicss.org/posts/v30.html) 中的 [属性化（Attributify）模式](https://windicss.org/posts/v30.html#attributify-mode) 已默认启用。

## 配置 {#configurations}

如需配置 Windi CSS，请根据如下内容创建并配置 `setup/windicss.ts`，以对内部配置进行扩展：

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// 对内部 windicss 配置进行扩展
export default defineWindiSetup(() => ({
  shortcuts: {
    // 自定义默认背景
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // 字体可以被替换，请记得更新 `index.html` 中的字体链接
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

欲了解更多，请参阅 [Windi CSS 配置](https://windicss.org/guide/configuration.html)。
