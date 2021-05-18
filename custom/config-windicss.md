---
title: 配置 Windi CSS
---

# 配置 Windi CSS {#configure-windi-css}

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
```
