// @ts-check

const Guide = [
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

const Theme = [
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

const Addon = [
  {
    text: 'Use Addon',
    link: '/addons/use',
  },
  {
    text: 'Write an Addon',
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

const Customizations = [
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
    text: '配置 Windi CSS',
    link: '/custom/config-windicss',
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
  }
]

const Resources = [
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

const slidebars = [
  {
    text: '指南',
    children: Guide,
  },
  {
    text: '主题',
    children: Theme,
  },
  {
<<<<<<< HEAD
    text: '自定义',
=======
    text: 'Addons',
    children: Addon,
  },
  {
    text: 'Customizations',
>>>>>>> 18216961c9b829103d7ee5bc6c426cb525c3d51c
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
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
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
  themeConfig: {
    repo: 'slidevjs/docs-cn',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '改进翻译',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:cn']
      }
    },

    nav: [
      {
        text: '指南',
        items: Guide,
      },
      {
        text: '主题',
        items: Theme,
      },
      {
<<<<<<< HEAD
        text: '定制',
=======
        text: 'Addon',
        items: Addon,
      },
      {
        text: 'Customize',
>>>>>>> 18216961c9b829103d7ee5bc6c426cb525c3d51c
        items: Customizations,
      },
      {
        text: '资源',
        items: Resources,
      },
      {
        text: '中文',
        items: Translations,
      },
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
  },

  markdown: {
    anchor: {
      renderPermalink: require('./plugins/render-perma-link')
    },
    config: (md) => {
      md.use(require('./plugins/markdown-it-custom-anchor'))
    }
  },
}
