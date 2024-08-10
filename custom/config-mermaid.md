# 配置 Mermaid {#configure-mermaid}

<Environment type="client" />

创建一份包含以下内容的 `./setup/mermaid.ts` 文件：

```ts twoslash
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

返回值应该是[Marimaid.js](https://mermaid.js.org/)的自定义配置。请参考其类型定义及 [Mermaid 的文档](http://mermaid.js.org/config/schema-docs/config.html) 来获取完整配置列表。

## Custom theme/styles

如果你想要创建自定义的 Mermaid 主题或样式，可以通过定义 `themeVariables` 实现，如下例所示:

```ts twoslash
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // 主题变量
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // 序列图变量
      actorBkg: '#0E131F',
      actorBorder: '#44FFD2',
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
    }
  }
})
```

你可以在 [Mermaid 主题配置](https://mermaid.js.org/config/theming.html) 上找到全部的主题变量。