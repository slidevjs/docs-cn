import type { ThemeInfo } from './themes'

export type AddonInfo = Omit<ThemeInfo, 'previews' | 'tags'>

export const official: AddonInfo[] = [
  {
    id: '',
    link: '#',
    name: 'Work in Progress',
    description: '',
    author: {
      name: '',
    },
  },
]

export const community: AddonInfo[] = [
  // Add yours here!
  {
    id: '',
    link: 'https://github.com/slidevjs/docs/edit/main/.vitepress/addons.ts',
    name: 'Yours?',
    description: '点击此处分享你的插件',
    author: {
      name: '',
    },
  },
]
