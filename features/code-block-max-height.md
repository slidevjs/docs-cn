---
depends:
  - guide/syntax#code-block
tags: [代码块, 布局]
description: |
  为一个代码块设定最大高度并启用滚动。
---

# 代码块最大高度

如果代码无法适应一个幻灯片，你可以使用 `maxHeight` 来设置一个固定的高度并启用滚动：

````md
```ts {2|3|7|12}{maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...as many lines as you want
const c = add(1, 2)
```
````

请注意你可以使用 `{*}` 作为 <LinkInline link="features/line-highlighting" /> 的占位符:

````md
```ts {*}{maxHeight:'100px'}
// ...
```
````
