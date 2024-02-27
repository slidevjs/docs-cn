import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const CURRENT_VERSION = '0.48.0-beta.2'

const Guide: DefaultTheme.NavItemWithLink[] = [
  {
    text: '为什么选择 Slidev',
    link: '/guide/why',
  },
  {
    text: '开始使用',
    link: '/guide/',
  },
  {
    text: '安装',
    link: '/guide/install',
  },
  {
    text: 'Markdown 语法',
    link: '/guide/syntax',
  },
  {
    text: '导航',
    link: '/guide/navigation',
  },
  {
    text: '动画',
    link: '/guide/animations',
  },
  {
    text: '导出',
    link: '/guide/exporting',
  },
  {
    text: '静态部署',
    link: '/guide/hosting',
  },
  {
    text: '演讲录制',
    link: '/guide/recording',
  },
  {
    text: '演讲者模式',
    link: '/guide/presenter-mode',
  },
  {
    text: '绘图与批注',
    link: '/guide/drawing',
  },
  {
    text: '编辑器整合',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const BuiltIn: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Theme: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: '使用主题',
    link: '/themes/use',
  },
  {
    text: '主题集合',
    link: '/themes/gallery',
  },
  {
    text: '编写主题',
    link: '/themes/write-a-theme',
  },
]

const Addon: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Use Addon',
    link: '/addons/use',
  },
  {
    text: 'Write an Addon',
    link: '/addons/write-an-addon',
  },
]

<<<<<<< HEAD:.vitepress/config.js
const Translations = [
  {
    text: '简体中文',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
  },
]

const Customizations = [
=======
const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f:.vitepress/config.ts
  {
    text: '自定义',
    link: '/custom/',
  },
  {
    text: '项目结构',
    link: '/custom/directory-structure',
  },
  {
    text: '字体',
    link: '/custom/fonts',
  },
  {
    text: '语法高亮器',
    link: '/custom/highlighters',
  },
  {
    text: '配置 Vue',
    link: '/custom/config-vue',
  },
  {
    text: '配置 Vite',
    link: '/custom/config-vite',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: '配置 Windi CSS',
    link: '/custom/config-windicss',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f:.vitepress/config.ts
  },
  {
    text: '配置 Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: '配置 KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: '配置 Mermaid',
    link: '/custom/config-mermaid',
  },
  {
    text: '配置解析器',
    link: '/custom/config-parser',
  },
  {
    text: '配置快捷键',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue 全局上下文',
    link: '/custom/vue-context',
  },
  {
    text: '全局图层',
    link: '/custom/global-layers',
  },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
  {
    text: '案例展示',
    link: '/showcases',
  },
  {
    text: '学习资源',
    link: '/resources/learning',
  },
  {
    text: '精选封面',
    link: '/resources/covers',
  },
]

const slidebars: DefaultTheme.SidebarItem[] = [
  {
<<<<<<< HEAD:.vitepress/config.js
    text: '指南',
    children: Guide,
  },
  {
    text: '主题',
    children: Theme,
  },
  {
    text: '附加组件',
    children: Addon,
  },
  {
    text: '定制',
    children: Customizations,
  },
  {
    text: '内置',
    children: [
      {
        text: '组件',
        link: '/builtin/components',
      },
      {
        text: '布局',
        link: '/builtin/layouts',
      },
    ],
=======
    text: 'Guide',
    items: Guide,
  },
  {
    text: 'Themes',
    items: Theme,
  },
  {
    text: 'Addons',
    items: Addon,
  },
  {
    text: 'Customizations',
    items: Customizations,
  },
  {
    text: 'Built-in',
    items: BuiltIn,
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f:.vitepress/config.ts
  },
]

export default defineConfig({
  title: 'Slidev',
  description: '为开发者打造的演示文稿工具',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev 中文文档' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: '为开发者打造的演示文稿工具' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
      )
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
  cleanUrls: true,
  themeConfig: {
<<<<<<< HEAD:.vitepress/config.js
    repo: 'slidevjs/docs-cn',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '改进翻译',

    algolia: {
      appId: 'LCBV6MIFS6',
      apiKey: '1ff173fe73b20edc962c1c24c0b1c160',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:cn']
      }
=======
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/slidevjs/docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f:.vitepress/config.ts
    },

    nav: [
      {
        text: '指南',
        items: Guide,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: '主题',
        items: Theme,
      },
      {
        text: '附加组件',
        items: Addon,
      },
      {
        text: '定制',
        items: Customizations,
=======
        text: 'Theme',
        items: [
          ...Theme,
          {
            text: 'Built-in',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Customize',
        items: [
          ...Customizations,
          {
            text: 'Addon',
            items: Addon,
          },
        ],
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f:.vitepress/config.ts
      },
      {
        text: '资源',
        items: Resources,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: '中文',
        items: Translations,
=======
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f:.vitepress/config.ts
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

<<<<<<< HEAD:.vitepress/config.js
  markdown: {
    anchor: {
      renderPermalink: require('./plugins/render-perma-link')
    },
    config: (md) => {
      md.use(require('./plugins/markdown-it-custom-anchor'))
    }
  },
}
=======
  locales: {
    root: {
      label: 'English',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    fr: {
      label: 'Français',
      link: 'https://fr.sli.dev/',
    },
    es: {
      label: 'Español',
      link: 'https://es.sli.dev/',
    },
    ru: {
      label: 'Русский',
      link: 'https://ru.sli.dev/',
    },
    vn: {
      label: 'Việt Nam',
      link: 'https://vn.sli.dev/',
    },
    de: {
      label: 'Deutsch',
      link: 'https://de.sli.dev/',
    },
    br: {
      label: 'Português (BR)',
      link: 'https://br.sli.dev/',
    },
    el: {
      label: 'Ελληνικά',
      link: 'https://el.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f:.vitepress/config.ts
