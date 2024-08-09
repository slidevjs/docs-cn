---
depends:
  - guide/syntax#code-block
  - guide/animations
relates:
  - Shiki Magic Move: https://github.com/shikijs/shiki-magic-move
since: v0.48.0
tags: [代码块, 动画]
description: |
  控制代码变化时的细粒度过渡，类似于 Keynote 中的 Magic Move 效果。
---

# Shiki Magic Move

[Shiki Magic Move](https://github.com/shikijs/shiki-magic-move) 让你能够控制代码变化时的细粒度过渡，类似于 Keynote 中的 Magic Move 效果。在 [此处](https://shiki-magic-move.netlify.app/) 查看它是如何工作的。

<video src="https://github.com/slidevjs/slidev/assets/11247099/79927794-27ba-4342-9911-9996cec889d6" controls rounded shadow w-full></video>

在 Slidev 中，我们将 Magic Move 绑定到 [点击事件](/guide/animations#click-animation) 中。它的语法是用<code>````md magic-move</code> 包裹代表每个步骤的代码块（注意是**四个反引号**）。这将被转换为一个根据动画步骤变化的代码快。

`````md
````md magic-move
```js
console.log(`Step ${1}`)
```
```js
console.log(`Step ${1 + 1}`)
```
```ts
console.log(`Step ${3}` as string)
```
````
`````

也可以将 Magic Move 和 <LinkInline link="features/line-highlighting" /> 及 <LinkInline link="features/code-block-line-numbers" />混合使用，例如：

`````md
````md magic-move {at:4, lines: true} // [!code hl]
```js {*|1|2-5} // [!code hl]
let count = 1
function add() {
  count++
}
```

在代码块之间的内容会被忽略，可以作为注释。

```js {*}{lines: false} // [!code hl]
let count = 1
const add = () => count += 1
```
````
`````
