# Configure Context Menu

<Environment type="client" />

自定义 Slidev 的右键菜单项。

创建包含以下内容的 `./setup/context-menu.ts` 文件：

<!-- eslint-disable import/first -->

```ts twoslash
// ---cut---
import { defineContextMenuSetup } from '@slidev/types'
import { useNav } from '@slidev/client'
import { computed } from 'vue'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import Icon3DCursor from '~icons/carbon/3d-cursor'

export default defineContextMenuSetup((items) => {
  const { isPresenter } = useNav()
  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: Icon3DCursor, // 当 `small` 为 `true` 时，仅显示图标
      label: 'Custom Menu Item', // 也可以是 Vue 组件
      action() {
        alert('Custom Menu Item Clicked!')
      },
      disabled: isPresenter.value,
    },
  ])
})
```

以上代码将在右键菜单中添加一个新的菜单项。

若要全局禁用右键菜单，请在 frontmatter 中设置 `contextMenu` 为 `false`。`contextMenu` 也可以设置为 `dev` 或 `build`，以仅在开发或构建模式下启用右键菜单。
