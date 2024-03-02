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

## 预解析器扩展 {#preparser-extensions}

> 自 v0.37.0 起可用

:::warning
重要：当你修改预解析器配置时，需要停止并重新启动 slidev (重新启动可能不够)。
:::

预解析器(上面的步骤 1)是高度可扩展的，并且允许为 md 文件实现自定义语法。扩展预解析器是一个**高级特性**，由于语法的隐式更改，它很容易破坏[编辑器集成](/guide/editors) 。

<<<<<<< HEAD
要对其进行定制，请创建一个 `./setup/preparser.ts` 文件，内容如下:

=======
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1
```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter }) => {
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

这个示例系统地将所有 `@@@` 行替换成了 `hello`。它说明了预解析器配置文件的结构和涉及到的一些主要概念:
- 必须使用函数作为参数来调用 `definePreparserSetup`。
- 该函数接收文件路径(演示文稿的跟路径)和头文件(来自 md 文件)。它可以使用这些信息(例如，根据演示文稿启用扩展)。
- 函数必须返回预解析器扩展列表。
- 每个扩展可以包含：
  - 一个 `transformRawLines(lines)` 函数，它在解析 md 文件的页头之后运行，并接收所有行的列表(来自 md 文件)。该函数可以任意变更列表。
  - 一个 `transformSlide(content, frontmatter)` 函数，在分割文件为若干个幻灯片后，在每张幻灯片中都会调用，并将幻灯片内容作为字符串接收，将幻灯片的扉页作为对象接收。该函数可以改变扉页，并且必须返回内容字符串(可能已修改，如果没有进行修改则返回 `undefined`)。
  - 一个 `name`

## 预解析器扩展示例 {#example-preparser-extensions}

### 用例1: 紧凑语法顶层表示 {#use-case-1-compact-syntax-top-level-presentation}

设想一种情况，你的演示文稿(部分)主要显示封面图片，并包括其他 md 文件。你可能希望有一种紧凑的符号表示法，其中的实例（部分） `slides.md` 如下所示:

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

<<<<<<< HEAD
为了支持这些 `@src:` 和 `@cover:` 语法，创建一个 `./setup/preparser.ts` 文件，其内容如下:
=======
To allow these `@src:` and `@cover:` syntaxes, create a `./setup/preparser.ts` file with the following content:
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

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

<<<<<<< HEAD

### 用例2: 使用自定义扉页来包装幻灯片 {#use-case-2-using-custom-frontmatter-to-wrap-slides}
=======
### Use case 2: using custom frontmatter to wrap slides
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

设想一种情况，你经常想要缩放您的一些幻灯片，但是仍然想要使用各种现有的布局，因此创建一个新的布局将不适合。例如，你可能希望按如下方式编写 `slides.md`：

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

<<<<<<< HEAD
在这里，我们使用了一个下划线 `_scale` 以避免与现有的扉页属性发生可能的冲突(实际上，如果使用没有下划线的 `scale`，会导致潜在的问题)。

要处理扉页中的 `_scale: ...` 语法，创建一个 `./setup/preparser.ts` 文件，其内容如下:

=======
Here we used an underscore in `_scale` to avoid possible conflicts with existing frontmatter properties (indeed, the case of `scale`, without underscore would cause potential problems).

To handle this `_scale: ...` syntax in the frontmatter, create a `./setup/preparser.ts` file with the following content:

>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1
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
