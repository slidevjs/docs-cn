---
depends:
  - guide/syntax#code-block
relates:
  - Monaco Editor: https://microsoft.github.io/monaco-editor/
  - Configure Monaco Editor: /custom/config-monaco
tags: [代码块, 编辑器]
description: |
  将代码块变为功能齐全的编辑器，或者在两个代码块间生成 diff。
---

# Monaco 编辑器

<video src="https://github.com/slidevjs/slidev/assets/11247099/0c6ce681-80d3-4555-93bf-9288ee533462" controls rounded shadow w-full></video>

每当你想在演示文稿中做一些修改时，只需在 语言id 后添加 `{monaco}` ——它就会把这个块变成一个功能齐全的 Monaco 编辑器！

````md
```ts {monaco}
console.log('HelloWorld')
```
````

了解有关 [配置 Monaco](/custom/config-monaco) 的更多信息。

## Diff Editor

Monaco 还可以在两个代码快间生成差异。你可以用 `{monaco-diff}` 将代码块变为一个 [Monaco diff 编辑器](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example)。你需要用 `~~~` 来分隔原始代码与修改后的代码。

````md
```ts {monaco-diff}
console.log('Original text')
~~~
console.log('Modified text')
```
````
