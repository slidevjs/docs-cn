# 配置代码运行器

<Environment type="client" />

在 Monaco 代码运行器中运行自定义语言。

Slidev 内置了对 JavaScript 与 TypeScript 运行器。 它们能直接在浏览器中运行，但 **没有** 沙盒环境的保护。 如果你想要更高级的集成, 你可以提供自己的代码运行器，将代码发送到远程服务器、在 Web Worker 中运行，或者以你希望的任何方式运行。

你需要创建含以下内容的 `./setup/code-runners.ts` 文件:

<!-- eslint-disable import/first -->

```ts twoslash
declare const executePythonCodeRemotely: (code: string) => Promise<string>
declare const sanitizeHtml: (html: string) => string
// ---cut---
import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    async python(code, ctx) {
      // 以某种方式执行代码并获取输出
      const result = await executePythonCodeRemotely(code)
      return {
        text: result
      }
    },
    html(code, ctx) {
      return {
        html: sanitizeHtml(code)
      }
    },
    // 也可以添加其他语言。键是语言id，值是运行器函数
  }
})
```

## 运行上下文

第二个传入参数 `ctx` 是运行的上下文, 包含了以下属性:

```ts twoslash
import type { CodeRunnerOutputs } from '@slidev/types'
import type { CodeToHastOptions } from 'shiki'
// ---cut---
export interface CodeRunnerContext {
  /**
   * 通过 `runnerOptions` 属性传递给运行器的选项。
   */
  options: Record<string, unknown>
  /**
   * 使用 Shiki 高亮代码。
   */
  highlight: (code: string, lang: string, options?: Partial<CodeToHastOptions>) => string
  /**
   * 使用其他代码运行器运行代码。
   */
  run: (code: string, lang: string) => Promise<CodeRunnerOutputs>
}
```

## 运行器输出

运行器可以返回文本或 HTML 输出，或者一个要挂载的 HTML 元素。更多详情请参考 [code-runner.ts](https://github.com/slidevjs/slidev/blob/main/packages/types/src/code-runner.ts) 的类型定义。

## 附加运行依赖

默认地，Slidev 将扫描 Markdown 源文件并自动为运行器导入必要的 JavaScript 依赖项。如果你希望手动指定依赖，你可以在 slide 的 frontmatter 中使用 `monacoRunAdditionalDeps` 选项: 

```yaml
monacoRunAdditionalDeps:
  - ./path/to/dependency
  - lodash-es
```

::: tip
这些路径是相对于 `snippets` 目录解析的。并且依赖项的名称应该与代码中导入的名称完全相同。
:::
