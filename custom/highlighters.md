---
title: 语法高亮器
---

<<<<<<< HEAD
Slidev 内建了两种语法高亮器供你使用：

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** 是最受欢迎的语法高亮器之一。它在代码文本中插入标签包裹需要高亮的元素并通过 CSS 文件来设置高亮样式。你可以直接使用 Prism [官方预设的主题](https://github.com/PrismJS/prism-themes)，或者通过 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 快速创建自己的高亮主题。

**Shiki**，一个基于 TextMate 语法的代码高亮器。它直接生成带样式的包裹元素，所以不需要引入额外的 CSS 文件。因为基于 TextMate 语法，所以生成的高亮区块非常准确，效果类似于 VS Code。Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.

Slidev 主题通常会同时支持 Prism 和 Shiki，不过需要注意有些主题可能只会支持其中一种。

你可以参考以下描述来选择使用哪种高亮器：

- **Prism** 更容易自定义样式
- **Shiki** 生成的高亮区块更加准确

Slidev uses Shiki by default since v0.47. You can switch to it by adding the following to your `slides.md`:

```yaml
---
highlighter: Prism
---
```
=======
Slidev uses [Shiki](https://github.com/shikijs/shiki) as the code highlighter. It's a TextMate grammar-powered syntax highlighter that generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## 配置 Shiki {#configure-shiki}

<Environment type="both" />

<<<<<<< HEAD
创建 `./setup/shiki.ts` 文件并添加以下代码：
=======
Create `./setup/shiki.ts` file with the following content:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```ts
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

<<<<<<< HEAD
所有可选的主题请参阅 [Shiki 文档](https://shiki.style)。
=======
If you want to add custom theme or language (TextMate grammar/themes in JSON), you can import them in the setup file:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './customTheme.tmTheme.json'
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

Check [Built-in languages](https://shiki.style/languages) and [Built-in themes](https://shiki.style/themes), and refer to [Shiki's docs](https://shiki.style) for more details.

:::info
For now, Shiki Magic Move does not support transformers.
:::
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Configure Prism

:::warning
Prism support is deprecated and will be removed in the future. Please consider using Shiki instead.
:::

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
