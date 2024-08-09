---
depends:
  - guide/syntax#code-block
tags: [代码块]
description: |
  显示代码块中的行号。你可以选择为所有或者特定的代码块启用此特性。
---

# Line Numbers

你可以通过在 headmatter 中设置 `lineNumbers: true` 来为幻灯片中的所有代码块启用行号，或者通过设置 `lines: true` 来单独为每个代码块启用行号。

你还可以通过 `{startLine: number}` 设置每个代码块的起始行，并相应地高亮显示这些行，其默认值为 1。

````md
```ts {6,7}{lines:true,startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

请注意你可以使用 `{*}` 作为 <LinkInline link="features/line-highlighting" /> 的占位符:

````md
```ts {*}{lines:true,startLine:5}
// ...
```
````
