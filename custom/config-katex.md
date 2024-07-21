---
title: 配置 KaTeX
---

# 配置 KaTeX {#configure-katex}

<Environment type="node" />

创建一份包含以下内容的 `./setup/katex.ts` 文件：

```ts twoslash
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    maxExpand: 2000,
    /* ... */
  }
})
```

The return value should be the custom options for KaTeX. Refer to [KaTeX's documentation](https://katex.org/docs/options.html) or the type definition for the full options list.
