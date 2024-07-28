---
relates:
  - Iconify: https://iconify.design/
  - Icones: https://icones.js.org/
  - unplugin-icons: https://github.com/antfu/unplugin-icons
tags: [components]
description: |
  直接在 markdown 中使用几乎所有开源图标集中的图标。
---

# 图标

Slidev 让你能在安装相应的包后，**直接**在 markdown 中访问几乎所有开源图标集。

由 [`unplugin-icons`](https://github.com/antfu/unplugin-icons) 及 [Iconify](https://iconify.design/) 驱动。

命名遵循 [Iconify](https://iconify.design/) 的约定 `{图标集名}-{图标名}`，例如：

- `<mdi-account-circle />` - <mdi-account-circle /> 出自 [Material Design Icons](https://github.com/Templarian/MaterialDesign) - [`@iconify-json/mdi`](https://npmjs.com/package/@iconify-json/mdi)
- `<carbon-badge />` - <carbon-badge /> 出自 [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) - [`@iconify-json/carbon`](https://npmjs.com/package/@iconify-json/carbon)
- `<uim-rocket />` - <uim-rocket /> 出自 [Unicons Monochrome](https://github.com/Iconscout/unicons) - [`@iconify-json/uim`](https://npmjs.com/package/@iconify-json/uim)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> from [Twemoji](https://github.com/twitter/twemoji) - [`@iconify-json/twemoji`](https://npmjs.com/package/@iconify-json/twemoji)
- `<logos-vue />` - <logos-vue /> 出自 [SVG Logos](https://github.com/gilbarbara/logos) - [`@iconify-json/logos`](https://npmjs.com/package/@iconify-json/logos)
- 等等......

你可以在 [Icônes](https://icones.js.org/) 预览和搜索所有的图标

### 为图标添加样式

你可以像其他 HTML 元素一样为图标添加样式，例如：

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />
