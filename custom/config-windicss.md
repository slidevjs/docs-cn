---
title: 配置 Windi CSS
---

# 配置 Windi CSS {#configure-windi-css}

<Environment type="node" />

Markdown 天然支持 HTML。因此，你可以按照你想要的方式对你的内容进行样式设计。为了提供一些便利，我们内置了 [Windi CSS](https://github.com/windicss/windicss)，所以你可以直接使用 Windi CSS 提供的工具类对样式进行调整。

示例：

```html
<div class="grid pt-4 gap-4 grids-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

[Windi CSS v3.0](https://windicss.org/posts/v30.html) 中的 [属性化（Attributify）模式](https://windicss.org/posts/v30.html#attributify-mode) 已默认启用。

## 配置 {#configurations}

<<<<<<< HEAD
如需配置 Windi CSS，你需要对 Windi CSS 的基本配置进行扩展。

```ts
import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/client/windi.config'
// 或者可以对主题进行扩展：
/* import BaseConfig from '@slidev/theme-seriph/windi.config' */

export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#42b883'
          }
        }
      }
    }
  })
)
=======
To configure Windi CSS, create `setup/windicss.ts` with the following content to extend the builtin configurations

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
>>>>>>> 2725558a0fdb273102dde01cb9b3cfb80a5a7b43
```

Learn more about [Windi CSS configurations](https://windicss.org/guide/configuration.html)
