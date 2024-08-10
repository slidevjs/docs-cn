# 配置语法高亮

Slidev 使用 [Shiki](https://github.com/shikijs/shiki) ，一个基于 TextMate 语法，与 VS Code 一样准确的代码高亮器。它直接生成带样式的 HTML 元素，所以不需要引入额外的 CSS 文件。Shiki 自带了一系列 [内置主题](https://shiki.style/themes)。而在 Slidev 中，我们还提供内置的 [TwoSlash](#twoslash-integration) 功能。

## 配置 Shiki {#configure-shiki}

<Environment type="both" />

创建包含以下内容的 `./setup/shiki.ts` 文件：

```ts twoslash
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

如果你想添加自定义主题或语言（ JSON 中的 TextMate 语法/主题），你可以在上述文件中导入它们：

<!-- eslint-disable import/first-->

```ts twoslash
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import customTheme from './customTheme.tmTheme.json'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import customLanguage from './customLanguage.tmLanguage.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: customTheme,
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

更多详情请参考 [Built-in languages](https://shiki.style/languages) 及 [Built-in themes](https://shiki.style/themes) 以及 Shiki 的 [官方文档](https://shiki.style) 。

:::info
目前，Shiki 中的 Magic Move 还不支持页面切换效果。
:::

## 配置 Prism

:::warning
Prism 已被 Slidev 停止支持，并且将在未来版本中被移除。请考虑更换到 Shiki
:::

如果要配置 Prism，你可以引入相应的主题 CSS，或者使用 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 来进行亮/暗模式下的主题配置。请参考相应文档以了解更多细节。
