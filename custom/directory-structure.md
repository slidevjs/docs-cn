# Directory Structure

Slidev employs some directory structure conventions to minimize the configuration surface and to make the functionality extensions flexible and intuitive.

The conventional directory structure is:

```bash
your-slidev/
  ├── components/       # custom components
  ├── layouts/          # custom layouts
  ├── public/           # static assets
  ├── setup/            # custom setup / hooks
  ├── snippets/         # code snippets
  ├── styles/           # custom style
  ├── index.html        # injections to index.html
  ├── slides.md         # the main slides entry
  └── vite.config.ts    # extending vite config
```

以上所有均为可选。

## Components

Pattern: `./components/*.{vue,js,ts,jsx,tsx,md}`

<LinkCard link="guide/component" />

## 布局 {#layouts}

Pattern: `./layouts/*.{vue,js,ts,jsx,tsx}`

<LinkCard link="guide/layout" />

## 静态资源 {#public}

Pattern: `./public/*`

Assets in this directory will be served at root path `/` during dev, and copied to the root of the dist directory as-is. Read more about [Assets Handling](../guide/faq#assets-handling).

## 样式 {#style}

Pattern: `./style.css` | `./styles/index.{css,js,ts}`

Files following this convention will be injected to the App root. If you need to import multiple CSS entries, you can create the following structure and manage the import order yourself.

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

Styles will be processed by [UnoCSS](https://unocss.dev/) and [PostCSS](https://postcss.org/), so you can use CSS nesting and [at-directives](https://unocss.dev/transformers/directives#apply) and Nested CSS out-of-box. For example:

<!-- eslint-skip -->

```less
.slidev-layout {
  --uno: px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    --uno: select-none;
  }

  pre, code {
    --uno: select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

Learn more about the syntax [here](https://unocss.dev/transformers/directives#apply).

## `index.html` {#index-html}

Pattern: `index.html`

`index.html` 提供了向主 `index.html` 中注入 meta 标签以及 scripts 标签的能力。

例如，对于以下自定义 `index.html` 来说：

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

最终部署的 `index.html` 效果如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## Global Layers

Pattern: `global-top.vue` | `global-bottom.vue` | `custom-nav-controls.vue` | `layouts/slide-top.vue` | `layouts/slide-bottom.vue`

<LinkCard link="features/global-layers" />
