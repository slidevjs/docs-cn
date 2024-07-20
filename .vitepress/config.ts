import { fileURLToPath } from 'node:url'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { version } from '../package.json'
import { Advanced, BuiltIn, Guides, Resources } from './pages'
import Customizations from './customizations'

const slidebars: DefaultTheme.SidebarItem[] = [
  {
    text: '指南',
    items: Guides,
  },
  {
    text: '进阶',
    items: Advanced,
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
        'mermaid',
        'latex',
      )
    },
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          // The @slidev/* installed in docs package are very old and should only be used in the homepage demo
          vfsRoot: fileURLToPath(new URL('../../demo/starter/', import.meta.url)),
        },
      }),
    ],
  },
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/slidevjs/docs-cn/edit/main/:path',
      text: '改进翻译',
    },

    outlineTitle: '本页目录',

    search: {
      provider: 'local',
    },

    nav: [
      {
        text: '指南',
        items: [
          ...Guides,
          {
            text: '进阶',
            items: Advanced,
          },
        ],
      },
      {
        text: '✨ 功能',
        link: '/features/',
      },
      {
        text: '参考',
        items: [
          {
            text: '内置',
            items: BuiltIn,
          },
          {
            text: '定制',
            items: Customizations,
          },
        ],
      },
      {
        text: '资源',
        items: Resources,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/features/': [],
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
      copyright: 'Copyright © 2020-2024 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: `简体中文 (v${version})`,
    },
    zh: {
      label: 'English',
      link: 'https://sli.dev/',
    },
  },
})
