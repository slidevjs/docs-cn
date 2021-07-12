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
