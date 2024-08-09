---
depends:
  - guide/global-context
tags: [客户端 api]
description: |
  用于侦听幻灯片生命周期的 hooks。
---

# 幻灯片钩子

Slidev 提供了一系列钩子来帮你侦听幻灯片的生命周期。

```ts twoslash
import { onSlideEnter, onSlideLeave, useIsSlideActive } from '@slidev/client'

const isActive = useIsSlideActive()

onSlideEnter(() => {
  /* 将会在进入该幻灯片时被调用 */
})

onSlideLeave(() => {
  /* 将会在离开该幻灯片时被调用 */
})
```

你也可以使用 <LinkInline link="guide/global-context" /> 来访问其他有用的上下文信息。

::: warning

在幻灯片组件中，`onMounted` 和 `onUnmount` 钩子不可用，因为即使幻灯片未处于活动状态，组件实例也会被保留。请改用 `onSlideEnter` 和 `onSlideLeave`。

:::
