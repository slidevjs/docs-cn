---
depends:
  - guide/syntax#code-block
relates:
  - TwoSlash: https://twoslash.netlify.app/
since: v0.46.0
tags: [代码块]
description: |
  一个强大的工具，用于在悬停或内联时渲染带有类型信息的 TypeScript 代码块。
---

# TwoSlash 集成

[TwoSlash](https://twoslash.netlify.app/) 是一个强大的工具，用于在悬停或内联时呈现带有类型信息的 TypeScript 代码块。它对于为 JavaScript/TypeScript 相关主题准备幻灯片非常有用。

要使用它，你可以在代码块的 语言id 中添加 `twoslash`：

````md
```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```
````

它会被渲染为:

```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```

<div class="py-20" />
