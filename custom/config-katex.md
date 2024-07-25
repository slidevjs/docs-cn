# 配置 KaTeX

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

返回值应当是 KaTeX 的自定义选项。

请参阅 [KaTeX的文档](https://katex.org/docs/options.html) 或选项列表的类型定义。
