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

## 配置 theme/styles {#custom-theme-styles}

如果你想要创建自定义的 Mermaid 主题或样式，可以通过定义 `themeVariables` 实现，如下例所示:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // General theme variables
      noteBkgColor: "#181d29",
      noteTextColor: "#F3EFF5cc",
      noteBorderColor: "#404551",

      // Sequence diagram variables
      actorBkg: "#0E131F",
      actorBorder: "#44FFD2",
      actorTextColor: "#F3EFF5",
      actorLineColor: "#F3EFF5",
      signalColor: "#F3EFF5",
      signalTextColor: "#F3EFF5",
    }
  }
})
```

你可以在 [Mermaid 主题配置](https://mermaid.js.org/config/theming.html) 上找到全部的主题变量。
