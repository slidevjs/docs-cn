import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const CURRENT_VERSION = '0.48.0-beta.22'

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
<<<<<<< HEAD
    text: '导出',
    link: '/guide/exporting',
=======
    text: 'Draggable Elements',
    link: '/guide/draggable',
  },
  {
    text: 'Presenter Mode',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Slides Overview',
    link: '/guide/overview',
  },
  {
    text: 'Drawing & Annotations',
    link: '/guide/drawing',
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
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
    text: '组件',
    link: '/builtin/components',
  },
  {
    text: '布局',
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
    text: '使用扩展插件',
    link: '/addons/use',
  },
  {
    text: '编写扩展插件',
    link: '/addons/write-an-addon',
  },
]

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

const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
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
    text: '配置 UnoCSS',
    link: '/custom/config-unocss',
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
<<<<<<< HEAD
    text: '配置快捷键',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue 全局上下文',
=======
    text: 'Configure Routes',
    link: '/custom/config-routes',
  },
  {
    text: 'Configure Shortcuts',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Configure Code Runners',
    link: '/custom/config-code-runners',
  },
  {
    text: 'Configure Context Menu',
    link: '/custom/config-context-menu',
  },
  {
    text: 'Vue Global Context',
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
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
    text: '指南',
    items: Guide,
  },
  {
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
  },
  {
    text: '内置',
    items: BuiltIn,
  },
  {
    text: '资源',
    items: Resources,
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
    logo: '/logo.svg',
    editLink: {
<<<<<<< HEAD
      pattern: 'https://github.com/slidevjs/docs-cn/edit/main/:path',
      text: '改进翻译',
    },

    outline: {
      label: '本页目录'
=======
      pattern: 'https://github.com/slidevjs/slidev/edit/main/docs/:path',
      text: 'Suggest changes to this page',
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
    },

    search: {
      provider: 'local',
    },

    nav: [
      {
        text: '指南',
        items: Guide,
      },
      {
        text: '主题',
        items: [
          ...Theme,
          {
            text: '内置',
            items: BuiltIn,
          },
        ],
      },
      {
        text: '定制',
        items: [
          ...Customizations,
          {
            text: '附加组件',
            items: Addon,
          },
        ],
      },
      {
        text: '资源',
        items: Resources,
      },
      {
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: '版本发布', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
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
