---
title: 配置快捷键
---

# 配置快捷键 {#configure-shortcuts}

> 自 v0.20 起可用

<Environment type="client" />

创建一份包含以下内容的 `./setup/shortcuts.ts` 文件：

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
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
关于键盘事件，请参考 [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/)。
=======
The `key` type only allows for strings, but you can still bind multiple keys by using following convention:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> 893d0b65c494856dc47a8834adc01480dbf6a161
