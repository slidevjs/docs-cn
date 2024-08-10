# 配置预解析器

::: info

自定义的预解析器应尽可能少地使用。通常，你可以使用 [Transformers](./config-transformers) 进行自定义语法。

:::

Slidev 通过三步解析演示文档(如 `slides.md`) :

1. 执行一个“预解析”步骤: 使用 `---` 分隔符将 markdown 文件分割成若干幻灯片，并考虑可能的扉页块。 
2. 每张幻灯片都用一个外部库进行解析。 
3. Slidev 解析特殊的扉页属性 `src: ....`，该属性允许包含其他 md 文件。

## Markdown 解析器

配置步骤2中使用的markdown解析器可以通过 [配置Vite内部插件](/custom/config-vite#configure-internal-plugins) 完成。

## 预解析器扩展

> 自 v0.37.0 起可用。

::: warning

重要：当你修改预解析器配置时，需要停止并重新启动 slidev。

:::

预解析器(上面的步骤 1)是高度可扩展的，并且允许为 md 文件实现自定义语法。扩展预解析器是一个**高级特性**，由于语法的隐式更改，它很容易破坏[编辑器集成](../features/side-editor)。

要自定义它，请创建一个 `。/setup/prepareser.ts` 文件，内容如下：

```ts twoslash
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

这个例子系统地将任何 `@@@` 行替换为 `hello` 行。它说明了预解析器配置文件的结构以及其涉及的一些主要概念：

- 必须使用函数调用 `definePreparerSetup` 作为参数。
- 该函数接收（根演示文稿的）文件路径、headatter（来自相应的 md 文件）以及自 v0.48.0 起，一种模式（dev、build 或 export）。它可以使用这些信息（例如，根据演示文稿文件，或者我们是否正在导出PDF，来启用扩展）。
- 该函数必须返回一个预解析器扩展列表。
- 一个扩展可以包含以下内容:
  - 一个 `transformRawLines(lines)` 函数，在解析 md 文件的 headmatter 后运行，并接收所有行的列表（来自 md 文件）。该函数可以任意修改列表。
  - 一个 `transformSlide(content，frontmatter)`函数，在分割文件后，为每张幻灯片调用该函数，并将幻灯片内容作为字符串接收，将幻灯片的 frontmatter 作为对象接收。该函数可以修改 frontmatter，并且必须返回内容字符串（可能已修改，如果没有进行修改，则可能为 `undefined`）。
  - 一个 `name`

## 预解析器扩展示例

### 用例1: 紧凑语法顶层表示

设想一种情况，你的演示文稿(部分)主要显示封面图片，并包括其他 md 文件。你可能希望有一种紧凑的符号表示法，其中的实例（部分）`slides.md` 如下所示:

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Welcome
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://cover.sli.dev
# Questions?
see you next time
```

要允许这些 `@src:` 和 `@cover:` 语法，请创建一个 `/setup/prepareser.ts`文件，内容如下：


```ts twoslash
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

### 用例2：使用自定义 frontmatter 来包装幻灯片

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

在这里，我们在 `_scale` 处使用了下划线，以避免与现有的 frontmatter 属性发生可能的冲突（事实上，没有下划线的 `scale` 的情况会导致潜在的问题）。

要处理这个 `_scale: ...`语法，在 frontmatter 中创建一个 `./setup/preparser.ts` 文件，内容如下：

```ts twoslash
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      async transformSlide(content, frontmatter) {
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
