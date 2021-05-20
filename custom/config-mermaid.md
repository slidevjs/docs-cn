---
title: 配置 Mermaid
---

# 配置 Mermaid {#configure-mermaid}

<Environment type="client" />

创建一份包含以下内容的 `./setup/mermaid.ts` 文件：

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

在配置时，你可以为 [Mermaid](https://mermaid-js.github.io/) 提供一些自定义的设置。关于更多配置详情，请参考其类型定义和相关文档。
