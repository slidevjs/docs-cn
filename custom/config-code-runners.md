# 配置代码运行器

<Environment type="client" />

在 Monaco 编辑器中为自定义语言定义代码运行器。

Slidev 默认内置了对 JavaScript 与 TypeScript 运行器的支持。 它们能直接在浏览器中运行而 **不需要** 沙盒环境。 如果你想要更高级的集成, 你可以提供自己的代码运行器，将代码发送到远程服务器、在 Web Worker 中运行，或者以你希望的任何方式运行。

你需要创建含以下内容的 `./setup/code-runners.ts` 文件:

```ts
import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    async python(code, ctx) {
      // Somehow execute the code and return the result
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
    // or other languages, key is the language id
  }
})
```

## 运行上下文

第二个传入参数 `ctx` 是运行的上下文, 包含了以下的属性:

```ts
export interface CodeRunnerContext {
  /**
   * Options passed to runner via the `runnerOptions` prop.
   */
  options: Record<string, unknown>
  /**
   * Highlight code with shiki.
   */
  highlight: (code: string, lang: string, options?: Partial<CodeToHastOptions>) => Promise<string>
  /**
   * Use (other) code runner to run code.
   */
  run: (code: string, lang: string) => Promise<CodeRunnerOutputs>
}
```

## 运行器输出

运行器可以返回文本或 HTML 输出，或者一个要挂载的元素。更多详情请参考 [code-runner.ts](https://github.com/slidevjs/slidev/blob/main/packages/types/src/code-runner.ts)。

## 附加运行依赖

默认地，Slidev 将扫描 Markdown 源文件并自动为运行器导入必要的依赖项。如果你希望手动导入依赖，你可以在 slide 的 frontmatter 中使用 `monacoRunAdditionalDeps` 选项: 

```yaml
monacoRunAdditionalDeps:
  - ./path/to/dependency
  - lodash-es
```

::: tip
这些路径是相对于 `snippets` 目录解析的。并且依赖项的名称应该与代码中导入的名称完全相同。
:::
