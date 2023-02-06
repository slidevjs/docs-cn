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

<<<<<<< HEAD
在配置时，你可以为 [Mermaid](https://mermaid-js.github.io/) 提供一些自定义的设置。关于更多配置详情，请参考其类型定义和相关文档。
=======
With the setup, you can provide a custom default setting for [Mermaid](https://mermaid-js.github.io/). Refer to the type definitions and its documentation for more details.

## Custom theme/styles

In case you want to create your custom Mermaid themes or styles, you can do this by defining `themeVariables` like in the following example:

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

You can find all theme variables on the [Mermaid Theme Configuration](https://mermaid.js.org/config/theming.html) page.
>>>>>>> dbdc820c8574243d4ae38131ae2a53f6a35a9104
