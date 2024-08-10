---
depends:
  - guide/syntax#code-block
  - guide/animations
tags: [代码块, 动画]
description: |
  根据点击次数高亮显示代码块中的特定行。
---

# 高亮代码行

要想高亮特定行，只需在括号 `{}` 中添加行号即可。行号默认从 1 开始。

````md
```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

## 动态逐行高亮

要更改多次点击中高亮的内容，可以使用 `|` 分隔每个阶段：

````md
```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

这会首先高亮 `a: Ref<number> | number` and `b: Ref<number> | number`，然后在点击一次后是 `return computed(() => unref(a) + unref(b))` ，最终高亮整个块。

你可以将行号设置为 `hide` 以隐藏代码块，或设置为 `none` 以不突出显示任何行：

````md
```ts {hide|none}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

::: tip
你可以在 [点击动画指南](/guide/animations#positioning) 中了解更多。
:::
