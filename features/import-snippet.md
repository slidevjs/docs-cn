---
relates:
  - features/monaco-write
  - features/monaco-editor
since: v0.47.0
tags: [代码块, 语法]
description: |
  将文件中的代码片段导入你的幻灯片。
---

# 引入代码片段

You can import code snippets from existing files via the following syntax:

```md
<<< @/snippets/snippet.js
```

::: tip
The value of `@` corresponds to your package's root directory. It's recommended to put snippets in `@/snippets` in order to be compatible with the Monaco editor. Alternatively, you can also import from relative paths.
:::

You can also use a [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding) to only include the corresponding part of the code file:

```md
<<< @/snippets/snippet.js#region-name
```

To explicitly specify the language of the imported code, you can add a language identifier after:

```md
<<< @/snippets/snippet.js ts
```

Any code block features like [line highlighting](#line-highlighting) and [Monaco editor](#monaco-editor) are also supported:

```md
<<< @/snippets/snippet.js {2,3|5}{lines:true}
<<< @/snippets/snippet.js ts {monaco}{height:200px}
```

Note that you can use `{*}` as a placeholder of <LinkInline link="features/line-highlighting" />:

<!-- eslint-skip -->

```md
<<< @/snippets/snippet.js {*}{lines:true}
```
