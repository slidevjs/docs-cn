---
title: 配置快捷键
---

# 配置快捷键 {#configure-shortcuts}

> 自 v0.20 起可用

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

<<<<<<< HEAD
创建一份包含以下内容的 `./setup/shortcuts.ts` 文件：
=======
## Getting started

Create `./setup/shortcuts.ts` with the following content:
>>>>>>> 041453dfdd1dbc3f02b3114416e1b20b60563679

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
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

在配置时，你可以添加或者一些自定义的快捷键。例如，上面的配置为 <kbd>enter</kbd> 绑定了下一动画或幻灯片，为 <kbd>backspace</kbd> 绑定了上一动画或幻灯片。

配置函数会接收一个封装有导航函数的对象参数，返回一个快捷键配置信息的数组，你可以参考其类型定义获得详细信息。

<<<<<<< HEAD
该 `key` 仅支持字符串类型，但你也可以使用如下约定绑定多个快捷键：
=======
## Advanced key binding

The `key` type only allows for strings, but you can still bind multiple keys by using following convention:
>>>>>>> 041453dfdd1dbc3f02b3114416e1b20b60563679

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

<<<<<<< HEAD
关于键盘事件，请参考 [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/)。
=======
## Advanced navigation features

The `nav` navigation operations allows you to access some functionalities than basic _next slide_ or _previous slide_. See the following for use-cases:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',
      
      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> 041453dfdd1dbc3f02b3114416e1b20b60563679
