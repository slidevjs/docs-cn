---
depends:
  - features/monaco-editor
  - features/import-snippet
relates:
  - features/import-snippet
  - 自定义代码运行器: /custom/config-code-runners
since: v0.49.5
tags: [代码块, 编辑器]
description: |
  一个 monaco 编辑器，使你能够直接在幻灯片中写代码并保存到文件中。
---

# 可写的 Monaco Editor

你可以使用 [引入代码片段](#import-code-snippets) 语法结合 `{monaco-write}` 指令，将 Monaco 编辑器与本地文件系统上的文件链接起来。这将允许你直接在此编辑器中编辑代码，并将更改保存回文件。

```md
<<< ./some-file.ts {monaco-write}
```

在使用此特性时，因为改动会被直接保存到文件，请确保你已经提前备份了相关文件。
