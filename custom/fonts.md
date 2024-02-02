---
title: 字体
---

# 字体 {#fonts}

> 自 v0.20 起可用

虽然你可以使用 HTML 和 CSS 为你的幻灯片定制你想要的字体和样式，但 Slidev 提供了另一种较为便捷的方式，可以让你轻松使用它们。

你可以在 frontmatter 中，添加如下配置：

```yaml
---
fonts:
<<<<<<< HEAD
  # 基础字体
  sans: 'Robot'
  # 与 windicss 的 `font-serif` css 类一同使用
  serif: 'Robot Slab'
  # 用于代码块、内联代码等
  mono: 'Fira Code'
=======
  # basically the text
  sans: Robot
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
---
```

按上述修改即可完成配置。

字体将从 **[Google Fonts](https://fonts.google.com/) 被自动**引入。这意味着你可以直接使用 Google Fonts 上的任何字体。

## 本地字体 {#local-fonts}

<<<<<<< HEAD
默认情况下，Slidev 会认为 `fonts` 配置的所有字体均来自 Google Fonts。如果你想使用本地字体，可以指定 `fonts.local` 字段来选择不使用自动引入的字体。
=======
By default, Slidev assumes all the fonts specified via `fonts` configurations come from Google Fonts. If you want to use local fonts, specify the `fonts.local` to opt-out the auto-importing.
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

```yaml
---
fonts:
  # 与 css 中的 font-family 一致，你可以使用 `,` 来分割字体名，便于降级
  sans: 'Helvetica Neue,Robot'
<<<<<<< HEAD
  # 将 'Helvetica Neue' 作为本地字体
  local: 'Helvetica Neue'
=======
  # mark 'Helvetica Neue' as local font
  local: Helvetica Neue
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
---
```

## weights 和斜体 {#weights-italic}

默认情况下，Slidev 为每种字体引入了三种 weight 大小 `200`，`400`，`600`。你可以按如下方式配置它们：

```yaml
---
fonts:
<<<<<<< HEAD
  sans: 'Robot'
  # 默认为
=======
  sans: Robot
  # default
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
  weights: '200,400,600'
  # 引入斜体字体，默认 `false`
  italic: false
---
```

这些配置适用于所有的网络字体。如果要对每种字体的 weight 进行更细粒度的控制，你需要用 [HTML](/custom/directory-structure.html#index-html) 和 CSS 手动引入它们。

## 降级字体 {#fallbck-fonts}

大多数情况下，只需指定 “特殊字体” 即可，Slidev 会为你提供可降级的字体。例如：

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

<<<<<<< HEAD
其结果为：
=======
will result in
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

如需禁用降级字体，请按如下方式配置：

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## Providers {#providers}

- 选项：`google` | `none`
- 默认值：`google`

目前，仅针对于 Google Fonts 进行了支持，我们计划在未来添加更多的字体服务整合。当此字段指定为 `none` 时，自动导入功能将被完全禁用，同时将所有字体视为本地字体。

```yaml
---
fonts:
  provider: none
---
```
