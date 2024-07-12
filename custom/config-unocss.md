# 配置 UnoCSS

<Environment type="node" />

[UnoCSS](https://unocss.dev) 是在 `v0.42.0` 起 Slidev 的默认 CSS 框架。UnoCSS 是一个快速即时的原子化 CSS 引擎，旨在灵活和可扩展。

在默认情况下，Slidev 开箱即用地启用了以下预设:

- [@unocss/preset-uno](https://unocss.dev/presets/uno) - Tailwind / Windi CSS 兼容工具
- [@unocss/preset-attributify](https://unocss.dev/presets/attributify) - Attributify 模式
- [@unocss/preset-icons](https://unocss.dev/presets/icons) - 以 class 方式使用任何 icon
- [@unocss/preset-web-fonts](https://unocss.dev/presets/web-fonts) -  轻松使用网络字体文件
- [@unocss/transformer-directives](https://unocss.dev/transformers/directives) - 在 CSS 中使用 `@apply` 

Slidev 也添加了一些 shortcuts ，可以参考 [源代码](https://github.com/slidevjs/slidev/blob/main/packages/client/uno.config.ts ).

因此，你可以按照自己想要的方式写 style。例如:


```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

## 配置项

你可以在项目的根文件夹中创建 `uno.config.ts`来扩展内置配置项

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  // ...
})
```

了解更多 [UnoCSS 配置项](https://unocss.dev/guide/config-file)
