---
title: 配置 KaTeX
---

# 配置 KaTeX {#configure-katex}

创建一份包含以下内容的 `./setup/katex.ts` 文件：

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

在配置时，你可以提供一些自定义的 [KaTex 选项](https://katex.org/docs/options.html) 。关于更多配置详情，请参考其类型定义和相关文档。
