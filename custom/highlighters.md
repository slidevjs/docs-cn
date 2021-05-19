---
title: 语法高亮器
---

# 语法高亮器 {#highlighters}

Slidev 内建了两种语法高亮器供你使用：

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** 是最受欢迎的语法高亮器之一。它在代码文本中插入标签包裹需要高亮的元素并通过 CSS 文件来设置高亮样式。你可以直接使用 Prism [官方预设的主题](https://github.com/PrismJS/prism-themes)，或者通过 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 快速创建自己的高亮主题。

**Shiki**，一个基于 TextMate 语法的代码高亮器。它直接生成带样式的包裹元素，所以不需要引入额外的 CSS 文件。因为基于 TextMate 语法，所以生成的高亮区块非常准确，效果类似于 VS Code。Shiki 也提供了 [很多预设主题](https://github.com/shikijs/shiki/blob/master/docs/themes.md)。不过 Shiki 需要通过 TextMate 主题（与 VS Code 主题相兼容）来自定义高亮，这相对来说会比较麻烦。

Slidev 主题通常会同时支持 Prism 和 Shiki，不过需要注意有些主题可能只会支持其中一种。

你可以参考以下描述来选择使用哪种高亮器：

- **Prism** 更容易自定义样式
- **Shiki** 生成的高亮区块更加准确

默认情况下 Slidev 使用 Prism，你可以在 frontmatter 中修改设置：

```yaml
---
highlighter: shiki
---
```

## 配置 Prism {#configure-prism}

直接引入预设主题或者使用 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 就可以配置 Prism 高亮，更多细节可以参阅相应文档。

## 配置 Shiki {#configure-shiki}

<<<<<<< HEAD
创建 `./setup/shiki.ts` 文件并添加以下代码：
=======
<Environment type="node" />

Create `./setup/shiki.ts` file with the following content
>>>>>>> a6e799196a66bf932dadaf515abc6e5d24f2ab3c

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
import { loadTheme } from 'shiki'

export default defineShikiSetup(async() => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json')),
      light: await loadTheme('path/to/theme.json')),
    },
  }
})
```
