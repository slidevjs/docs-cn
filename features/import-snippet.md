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

你可以通过以下语法从现有文件导入代码段：

```md
<<< @/snippets/snippet.js
```

::: tip
“@”的值对应于包的根目录。为了与 Monaco 编辑器兼容，建议将代码段放在 `@/snippets` 中。或者，你也可以从相对路径导入。
:::

你还可以使用 [VS Code 代码折叠语法](https://code.visualstudio.com/docs/editor/codebasics#_folding) 来只引用代码文件的相应部分：


```md
<<< @/snippets/snippet.js#region-name
```

若要指定导入代码的语言，你可以在引入后添加语言名称：

```md
<<< @/snippets/snippet.js ts
```

导入的代码块也支持普通代码块的功能，如 [逐行高亮](#line-highlighting) 和 [Monaco 编辑器](#monaco-editor)：

```md
<<< @/snippets/snippet.js {2,3|5}{lines:true}
<<< @/snippets/snippet.js ts {monaco}{height:200px}
```

请注意你可以使用 `{*}` 作为 <LinkInline link="features/line-highlighting" /> 的占位符:

<!-- eslint-skip -->

```md
<<< @/snippets/snippet.js {*}{lines:true}
```
