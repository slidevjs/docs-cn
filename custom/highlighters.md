---
title: 语法高亮器
---

<<<<<<< HEAD
# 语法高亮器 {#highlighters}

Slidev 内建了两种语法高亮器供你使用：
=======
Slidev comes with three syntax highlighters for you to choose from:
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)
- [Shikiji](https://github.com/antfu/shikiji)

**Prism** 是最受欢迎的语法高亮器之一。它在代码文本中插入标签包裹需要高亮的元素并通过 CSS 文件来设置高亮样式。你可以直接使用 Prism [官方预设的主题](https://github.com/PrismJS/prism-themes)，或者通过 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 快速创建自己的高亮主题。

**Shiki**，一个基于 TextMate 语法的代码高亮器。它直接生成带样式的包裹元素，所以不需要引入额外的 CSS 文件。因为基于 TextMate 语法，所以生成的高亮区块非常准确，效果类似于 VS Code。Shiki 也提供了 [很多预设主题](https://github.com/shikijs/shiki/blob/master/docs/themes.md)。不过 Shiki 需要通过 TextMate 主题（与 VS Code 主题相兼容）来自定义高亮，这相对来说会比较麻烦。

<<<<<<< HEAD
Slidev 主题通常会同时支持 Prism 和 Shiki，不过需要注意有些主题可能只会支持其中一种。
=======
**Shikiji** is an ESM rewrite of Shiki bringing many improvements and new features. You could have [AST-based transformers](https://github.com/antfu/shikiji#hast-transformers) to customize how the code is rendered. And the [TwoSlash](#twoslash) support is also built-in.

Slidev themes usually support both Prism and Shiki, but depending on the theme you are using, it might only support one of them.
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

你可以参考以下描述来选择使用哪种高亮器：

<<<<<<< HEAD
- **Prism** 更容易自定义样式
- **Shiki** 生成的高亮区块更加准确

默认情况下 Slidev 使用 Prism，你可以在 frontmatter 中修改设置：
=======
- **Prism** for easier customization
- **Shiki** for more accurate highlighting
- **Shikiji** on top of Shiki, it also enables [TwoSlash](#twoslash) support and custom transformers addons. 

Slidev uses Prism by default for compatibility. We recommend using Shikiji for more accurate and feature-rich highlighting, you can switch to it by adding the following to your `slides.md`:
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

```yaml
---
highlighter: shikiji
---
```

<<<<<<< HEAD
## 配置 Prism {#configure-prism}

直接引入预设主题或者使用 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 就可以配置 Prism 高亮，更多细节可以参阅相应文档。
=======
## TwoSlash Integration

This feature is only available when you set `highlighter` to `shikiji`.

[TwoSlash](https://www.typescriptlang.org/dev/twoslash/) is a powerful tool for rendering TypeScript code blocks with type information on hover or inlined. It's quite useful for preparing slides for JavaScript/TypeScript-related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
console.log('hello')
```
~~~

An example of TwoSlash enabled code snippet [can be found here](https://antfu.me/posts/shikiji-twoslash).

## Configure Prism

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

## 配置 Shiki {#configure-shiki}

<Environment type="node" />

创建 `./setup/shiki.ts` 文件并添加以下代码：

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

所有可选的主题请参阅 [Shiki 文档](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes)。

如果想使用自己的主题可以将配置文件改为：

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```

## Configure Shikiji

<Environment type="node" />

Create `./setup/shikiji.ts` file with the following content:

```ts
/* ./setup/shikiji.ts */
import { defineShikijiSetup } from '@slidev/types'

export default defineShikijiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    transformers: [
      ...
    ]
  }
})
```

Refer to [Shikiji's docs](https://github.com/antfu/shikiji) for all available options.

> It makes it easier for the community to adapt, when no `shikiji.ts` is presented, we will look for `shiki.ts` and try to convert it to Shikiji options.
