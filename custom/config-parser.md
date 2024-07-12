---
title: 配置和扩展解析器
---

# 配置和扩展解析器 {#configure-and-extend-the-parser}

Slidev 通过三步解析演示文档(如 `slides.md`) :

1、执行一个“预解析”步骤: 使用 `---` 分隔符将 markdown 文件分割成若干幻灯片，并考虑可能的扉页块。
2、每张幻灯片都用一个外部库进行解析。
3、Slidev 解析特殊的扉页属性 `src: ....`，该属性允许包含其他 md 文件。

## Markdown 解析器 {#markdown-parser}

配置步骤 2 中使用的 markdown 解析器可以通过 [配置 Vite 内部插件](/custom/config-vite#configure-internal-plugins)来完成。

> 自 v0.37.0 起可用

:::warning
重要：当你修改预解析器配置时，需要停止并重新启动 slidev (重新启动可能不够)。
:::

预解析器(上面的步骤 1)是高度可扩展的，并且允许为 md 文件实现自定义语法。扩展预解析器是一个**高级特性**，由于语法的隐式更改，它很容易破坏[编辑器集成](/guide/editors) 。

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter, mode }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HELLO'
        }
      },
    }
  ]
})
```

This example systematically replaces any `@@@` line by a line with `hello`. It illustrates the structure of a preparser configuration file and some of the main concepts the preparser involves:

- `definePreparserSetup` must be called with a function as parameter.
- The function receives the file path (of the root presentation file), the headmatter (from the md file) and, since v0.48.0, a mode (dev, build or export). It could use this information (e.g., enable extensions based on the presentation file or whether we are exporting a PDF).
- The function must return a list of preparser extensions.
- An extension can contain:
  - a `transformRawLines(lines)` function that runs just after parsing the headmatter of the md file and receives a list of all lines (from the md file). The function can mutate the list arbitrarily.
  - a `transformSlide(content, frontmatter)` function that is called for each slide, just after splitting the file, and receives the slide content as a string and the frontmatter of the slide as an object. The function can mutate the frontmatter and must return the content string (possibly modified, possibly `undefined` if no modifications have been done).
  - a `name`

## 预解析器扩展示例 {#example-preparser-extensions}

### 用例1: 紧凑语法顶层表示 {#use-case-1-compact-syntax-top-level-presentation}

设想一种情况，你的演示文稿(部分)主要显示封面图片，并包括其他 md 文件。你可能希望有一种紧凑的符号表示法，其中的实例（部分） `slides.md` 如下所示:

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Welcome
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
# Questions?
see you next time
```

To allow these `@src:` and `@cover:` syntaxes, create a `./setup/preparser.ts` file with the following content:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(
              i,
              1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          i++
        }
      }
    },
  ]
})
```

就是这样。

### Use case 2: using custom frontmatter to wrap slides

设想一种情况，你经常想要缩放您的一些幻灯片，但是仍然想要使用各种现有的布局，因此创建一个新的布局将不适合。例如，你可能希望按如下方式编写 `slides.md`：

<!-- eslint-skip -->

```md
---
layout: quote
_scale: 0.75
---

# Welcome

> great!

---
_scale: 4
---
# Break

---

# Ok

---
layout: center
_scale: 2.5
---
# Questions?
see you next time
```

Here we used an underscore in `_scale` to avoid possible conflicts with existing frontmatter properties (indeed, the case of `scale`, without underscore would cause potential problems).

To handle this `_scale: ...` syntax in the frontmatter, create a `./setup/preparser.ts` file with the following content:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter._scale}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

就是这样。
