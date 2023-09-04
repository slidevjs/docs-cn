---
title: 配置 Monaco
---

# 配置 Monaco {#configure-monaco}

<Environment type="client" />

创建一份包含以下内容的 `./setup/monaco.ts` 文件：

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // 使用 `monaco` 配置
})
```

访问 [monaco-editor](https://github.com/Microsoft/monaco-editor) 了解更多关于 Monaco 配置的相关信息。

## 用法 {#usage}

如果你想在你的幻灯片中使用 Monaco， 只需添加 `{monaco}` 到你的代码片段中：

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 报错
//```
~~~

修改为

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 报错
//```
~~~

## 导出 {#exporting}

默认情况下， Monaco 只会在开发模式开启。如果你想在导出的单页应用中使用，你需要配置你的扉页：

```yaml
---
monaco: true # 默认为 "dev"
---
```

## 类型自动安装 {#types-auto-installing}

当你使用 Monaco 编写 TypeScript 时，类型依赖将会自动安装到客户端.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

在上面的示例中，只需确保项目依赖（`dependencies` 或 `devDependencies`）中包含所用到的 `vue` 和 `@vueuse/core`，Slidev 将处理剩余的部分以使你的 Monaco 编辑器获得正确的类型支持。

## 配置主题 {#configure-themes}

Monaco 主题受 Slidev 的亮色/暗色主题控制。如果你想定制主题，可以在配置函数中传入主题 id：

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

如果你想载入自定义主题：

```ts
import { defineMonacoSetup } from '@slidev/types'

// 改成你的主题
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

<<<<<<< HEAD
> 如果你在创建一个 Slidev 主题，在配置函数中使用动态 `import()` 以获得更好的 tree-shaking 和代码分割结果。
=======
> If you are creating a theme for Slidev, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

~~~ts
//```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
//```
~~~

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function

```ts
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
>>>>>>> 4b8e2bb7224b7e213ae6dee3f33b6f36fa32f0d1
