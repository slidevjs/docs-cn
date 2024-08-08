---
depends:
  - features/monaco-editor
  - guide/animations
relates:
  - Custom Code Runners: /custom/config-code-runners
since: v0.48.0
tags: [代码块, 编辑器]
description: |
  直接在编辑器中运行代码并获取结果。
---

# Monaco 代码运行器

Slidev 还提供了 Monaco Runner 编辑器，它允许你直接在编辑器中运行代码并查看结果。使用`{monaco-run}`将块转换为 Monaco Runner 编辑器。


````md
```ts {monaco-run}
function distance(x: number, y: number) {
  return Math.sqrt(x ** 2 + y ** 2)
}
console.log(distance(3, 4))
```
````

它为编辑器提供了一个 “运行” 按钮，并在代码块正下方显示代码执行的结果。你也可以修改代码，结果将实时更新。

默认情况下，加载幻灯片时，它将自动运行代码；如果你想显式触发运行，你可以设置`{autorun:false}`。


````md
```ts {monaco-run} {autorun:false}
console.log('点击 play 按钮来运行我')
```
````

如果你只想在某些点击中显示输出，你可以使用 `showOutputAt` prop。该值与`v-click` 相同。

````md
```ts {monaco-run} {showOutputAt:'+1'}
console.log('点击一次后显示。')
```
````

目前，Slidev 支持开箱即用地运行 JavaScript 和 TypeScript 代码。有关自定义语言支持，请参阅 [自定义代码运行程序](/custom/config-code-runners)。
