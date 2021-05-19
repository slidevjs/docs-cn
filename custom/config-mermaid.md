---
title: 配置 Mermaid
---

<<<<<<< HEAD
# 配置 Mermaid {#configure-mermaid}

创建一份包含以下内容的 `./setup/mermaid.ts` 文件：
=======
<Environment type="client" />

Create `./setup/mermaid.ts` with the following content:
>>>>>>> a6e799196a66bf932dadaf515abc6e5d24f2ab3c

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

在配置时，你可以为 [Mermaid](https://mermaid-js.github.io/) 提供一些自定义的设置。关于更多配置详情，请参考其类型定义和相关文档。
