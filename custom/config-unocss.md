# 配置 UnoCSS

<Environment type="node" />

从 v0.42.0 开始，[UnoCSS](https://unocss.dev) 是 Slidev 的默认 CSS 框架。UnoCSS是一个快速的原子CSS引擎，具有完全的灵活性和可扩展性，并且对大多数 Tailwind CSS 类都有**开箱即用**的支持，你也可以使用自己的配置对其进行扩展。

默认地，Slidev 开箱即用地使用了以下的预设：

- [@unocss/preset-uno](https://unocss.dev/presets/uno) - Tailwind / Windi CSS 兼容工具
- [@unocss/preset-attributify](https://unocss.dev/presets/attributify) - Attributify 模式
- [@unocss/preset-icons](https://unocss.dev/presets/icons) - 以 class 方式使用任何 icon
- [@unocss/preset-web-fonts](https://unocss.dev/presets/web-fonts) -  轻松使用网络字体文件
- [@unocss/transformer-directives](https://unocss.dev/transformers/directives) - 在 CSS 中使用 `@apply` 

Slidev 也添加了一些 shortcuts ，可以参考 [源代码](https://github.com/slidevjs/slidev/blob/main/packages/client/uno.config.ts).

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

```ts twoslash
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // 自定义默认的背景
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  // ...
})
```

了解更多 [UnoCSS 配置项](https://unocss.dev/guide/config-file)