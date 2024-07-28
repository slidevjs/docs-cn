---
depends:
  - guide/syntax#code-block
tags: [代码块]
description: |
  启用代码块中的行号。你可以选择为所有或者特定的代码块启用此特性。
---

# Line Numbers

You can enable line numbering for all code blocks across the slides by setting `lineNumbers: true` in the headmatter, or enable each code block individually by setting `lines: true`.

You can also set the starting line for each code block and highlight the lines accordingly via `{startLine: number}`, which defaults to 1.

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

Note that you can use `{*}` as a placeholder of <LinkInline link="features/line-highlighting" />:

````md
```ts {*}{lines:true,startLine:5}
// ...
```
````
