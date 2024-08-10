# 配置 Monaco {#configure-monaco}

<Environment type="client" />

创建一份包含以下内容的 `./setup/monaco.ts` 文件：

```ts twoslash
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // 使用 `monaco` 配置
})
```

访问 [monaco-editor](https://github.com/Microsoft/monaco-editor) 了解更多关于 Monaco 配置的相关信息。

## TypeScript 类型 {#typescript-types}

当你使用 Monaco 编写 TypeScript 时，类型依赖将会自动安装到客户端.

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

在上面的例子中，确保 `vue` 和 `@vueuse/core` 作为 dependencies 或 devDependencies 安装在本地，Slidev 将处理其余部分，以使编辑器自动使用这些类型。当部署为 SPA 时，这些类型也将被打包用于静态托管。


### 附加类型 {#additional-types}

Slidev 将扫描幻灯片中的所有 Monaco 代码块，并帮助你导入所用库的类型。如果它有遗漏遗漏，你可以显式指定额外的包来导入相应类型：


```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### 自动类型获取 {#auto-type-acquisition}

你可以通过在 headmatter 通过以下设置切换到从CDN加载类型：

```md
---
monacoTypesSource: ata
---
```

此功能由 [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) 提供支持并且完全在客户端上运行。


## 配置主题 {#configure-themes}

自 v0.48.0 起，在[`@shikijs/Monaco`](https://shiki.style/packages/monaco)驱动下，Monaco 将复用你在 [Shiki 的设置文件](/custom/config-highlighter#configure-shiki) 中配置的 Shiki 主题。它将与你的其他代码块保持一致的风格。

## 配置编辑器 {#configure-the-editor}

> 自 v0.43.0 起可用

如果你想自定义 Monaco 编辑器，可以传递一个匹配 [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) 定义的 `editorOptions` 对象。


````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

或者，如果你想将这些选项应用于每个 Monaco 实例，你可以在 `defineMonacoSetup` 函数中返回它们

```ts twoslash
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

## 禁用 {#disabling}

从v0.48.0开始，Monaco编辑器默认启用，但只你有使用到时才会被捆绑打包。如果你想禁用它，你可以在幻灯片的 frontmatter 中将 `Monaco` 设置为 `false`：

```yaml
---
monaco: false # 也可以是 'dev' 或 'build' 来有条件地启用它
---
```

## 配置代码运行器 {#configure-code-runners}

要配置Monaco Runner如何运行代码，或添加对自定义语言的支持，请参考 [配置代码运行器](/custom/config-code-runners)。
