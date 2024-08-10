# 配置路由

<Environment type="client" />

将自定义页面添加到 Slidev。


## 用法

创建一份包含以下内容的 `./setup/routes.ts` 文件：


```ts twoslash
import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
  return [
    ...routes,
    {
      path: '/my-page',
      // ---cut-start---
      // @ts-expect-error missing types
      // ---cut-end---
      component: () => import('../pages/my-page.vue'),
    },
  ]
})
```

请参考 [Vue Router 文档](https://router.vuejs.org/) 来了解关于路由的更多细节