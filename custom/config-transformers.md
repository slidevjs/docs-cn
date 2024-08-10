# 配置自定义语法

<Environment type="node" />

Slidev 支持自定义 Markdown 语法。通过这种方式，你可以为你的幻灯片添加自定义的 Markdown 语法，以及自定义代码块的渲染。

首先，创建一个 `/setup/transformers.ts` 文件，内容如下：

````ts twoslash
import type { MarkdownTransformContext } from '@slidev/types'
import { defineTransformersSetup } from '@slidev/types'

function myCodeblock(ctx: MarkdownTransformContext) {
  console.log('在整个幻灯片中的索引：', ctx.slide.index)
  ctx.s.replace(
    /^```myblock *(\{[^\n]*\})?\n([\s\S]+?)\n```/gm,
    (full: string, options = '', code = '') => {
      return `...`
    },
  )
}

export default defineTransformersSetup(() => {
  return {
    pre: [],
    preCodeblock: [myCodeblock],
    postCodeblock: [],
    post: [],
  }
})
````

返回值是包含 `pre`、`preCodeblock`、`postCodeblock` 和 `post` 四个可选字段，每个字段的值是函数数组，将被调用以转换 Markdown 内容。它们的调用顺序为：

1. 来自你的项目的 `pre`
2. 来自插件和主题的 `pre`
3. 导入代码片段语法和 Shiki magic move
4. 来自你的项目的 `preCodeblock`
5. 来自插件和主题的 `preCodeblock`
6. 内置的 Mermaid、Monaco 和 PlantUML 等特殊代码块
7. 来自插件和主题的 `postCodeblock`
8.  来自你的项目的 `postCodeblock`
9. 其他内置的自定义语法，如代码块包装
10. 来自插件和主题的 `post`
11. 来自你的项目的 `post`
