---
title: 语法高亮器
---

Slidev 内建了两种语法高亮器供你使用：

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** 是最受欢迎的语法高亮器之一。它在代码文本中插入标签包裹需要高亮的元素并通过 CSS 文件来设置高亮样式。你可以直接使用 Prism [官方预设的主题](https://github.com/PrismJS/prism-themes)，或者通过 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 快速创建自己的高亮主题。

**Shiki**，一个基于 TextMate 语法的代码高亮器。它直接生成带样式的包裹元素，所以不需要引入额外的 CSS 文件。因为基于 TextMate 语法，所以生成的高亮区块非常准确，效果类似于 VS Code。Shiki 自带了一些 [内置主题](https://shiki.style/themes)。而在 Slidev 中，我们也提供内置的 [TwoSlash](#twoslash-integration)。

Slidev 主题通常会同时支持 Prism 和 Shiki，不过需要注意有些主题可能只会支持其中一种。

你可以参考以下描述来选择使用哪种高亮器：

- **Prism** 更容易自定义样式
- **Shiki** 生成的高亮区块更加准确

Slidev 在 `v0.47` 后默认使用 Shiki。你可以通过向你的 `slides.md` 中添加以下内容来切换。

```yaml
---
highlighter: Prism
---
```

## 配置 Shiki {#configure-shiki}

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

所有可选的主题请参阅 [Shiki 文档](https://shiki.style)。

## 配置 Prism

如果要配置你的 Prism，你可以引入相应的主题 CSS，或者使用 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 来进行亮/暗模式下的主题配置。请参考相应文档以了解更多细节。
