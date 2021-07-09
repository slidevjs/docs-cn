---
title: 配置 Monaco
---

# 配置 Monaco {#configure-monaco}

<Environment type="client" />

<<<<<<< HEAD
> 默认情况下， Monaco 只会在开发模式下开启。如果你想在单页应用（SPA）中使用， 添加 `monaco: true` 到你的扉页（frontmatter）处.

创建一份包含以下内容的 `./setup/monaco.ts` 文件：
=======
Create `./setup/monaco.ts` with the following content:
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06

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

<<<<<<< HEAD
默认情况下， Monaco 只会在开发模式开启。如果你想在导出的单页应用中使用，你需要配置你的扉页：
=======
By default, Monaco will ONLY work on `dev` mode. If you would like to have it available in the exported SPA, configure it in your frontmatter:
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06

```yaml
---
monaco: true # 默认为 "dev"
---
```

## 类型自动安装 {#types-auto-installing}

<<<<<<< HEAD
当你使用 Monaco 编写 TypeScript 时，类型依赖将会自动安装到客户端.
=======
When use TypeScript with Monaco, types for dependencies will be installed to the client-side automatically.
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

<<<<<<< HEAD
在上面的示例中，只需确保项目依赖（`dependencies` 或 `devDependencies`）中包含所用到的 `vue` 和 `@vueuse/core`，Slidev 将处理剩余的部分以使你的 Monaco 编辑器获得正确的类型支持。
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically!
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06
