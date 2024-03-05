---
title: 语法高亮器
---

<<<<<<< HEAD
# 语法高亮器 {#highlighters}

Slidev 内建了两种语法高亮器供你使用：
=======
Slidev comes with two syntax highlighters for you to choose from:
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** 是最受欢迎的语法高亮器之一。它在代码文本中插入标签包裹需要高亮的元素并通过 CSS 文件来设置高亮样式。你可以直接使用 Prism [官方预设的主题](https://github.com/PrismJS/prism-themes)，或者通过 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 快速创建自己的高亮主题。

<<<<<<< HEAD
**Shiki**，一个基于 TextMate 语法的代码高亮器。它直接生成带样式的包裹元素，所以不需要引入额外的 CSS 文件。因为基于 TextMate 语法，所以生成的高亮区块非常准确，效果类似于 VS Code。Shiki 也提供了 [很多预设主题](https://github.com/shikijs/shiki/blob/master/docs/themes.md)。不过 Shiki 需要通过 TextMate 主题（与 VS Code 主题相兼容）来自定义高亮，这相对来说会比较麻烦。
=======
**Shiki** is a TextMate grammar-powered syntax highlighter. It generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Slidev 主题通常会同时支持 Prism 和 Shiki，不过需要注意有些主题可能只会支持其中一种。

你可以参考以下描述来选择使用哪种高亮器：

<<<<<<< HEAD
- **Prism** 更容易自定义样式
- **Shiki** 生成的高亮区块更加准确

默认情况下 Slidev 使用 Prism，你可以在 frontmatter 中修改设置：
=======
- **Prism** for easier customization
- **Shiki** for accurate highlighting

Slidev uses Shiki by default since v0.47. You can switch to it by adding the following to your `slides.md`:
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

```yaml
---
highlighter: Prism
---
```

<<<<<<< HEAD
## 配置 Prism {#configure-prism}

直接引入预设主题或者使用 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 就可以配置 Prism 高亮，更多细节可以参阅相应文档。

## 配置 Shiki {#configure-shiki}
=======
## Configure Shiki
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

<Environment type="node" />

创建 `./setup/shiki.ts` 文件并添加以下代码：

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
    ]
  }
})
```

<<<<<<< HEAD
所有可选的主题请参阅 [Shiki 文档](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes)。

如果想使用自己的主题可以将配置文件改为：
=======
Refer to [Shiki's docs](https://shiki.style) for available theme names.

## Configure Prism
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
