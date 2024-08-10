# 配置快捷键 {#configure-shortcuts}

<Environment type="client" />

## 开始使用 {#getting-started}

创建一份包含以下内容的 `./setup/shortcuts.ts` 文件：

```ts twoslash
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // 保留已有的快捷键
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

在配置时，你可以添加或者一些自定义的快捷键。例如，上面的配置为 <kbd>enter</kbd> 绑定了 `前进` 操作，为 <kbd>backspace</kbd> 绑定了 `后退` 操作。

有关默认快捷键和导航操作，请参阅 [导航操作](../guide/ui#navigation-actions) 部分。


## 键盘绑定格式

每个快捷键的 `key` 可以是字符串（例如 `Shift+Ctrl+a`）或cumputed 形式的布尔值。
请参考 VueUse 的 [`useMagicKeys`](https://vueuse.org/core/useMagicKeys/) 以获取更多细节。