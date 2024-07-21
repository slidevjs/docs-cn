import '@shikijs/vitepress-twoslash/style.css'
import './styles/vars.css'
import './styles/demo.css'
import './styles/custom.css'
import 'uno.css'

import type { EnhanceAppContext } from 'vitepress'
import FeatureLayout from './components/FeatureLayout.vue'
import Layout from './components/Layout.vue'
import Theme from 'vitepress/theme'
import TwoSlash from '@shikijs/vitepress-twoslash/client'

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoSlash as any)
    app.component('feature', FeatureLayout)
  },
  Layout,
}
