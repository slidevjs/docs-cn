---
title: 配置 Vue
---

# 配置 Vue {#configure-vue}

<Environment type="client" />

Slidev 基于 [Vue 3](https://v3.vuejs.org/) 来渲染应用。你可以针对应用进行扩展，添加自定义插件或自定义配置等操作。

创建 `./setup/main.ts` 文件，其内容如下：

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

这也可以作为你 Slidev 应用程序的主入口，在应用启动前做一些初始化操作。

了解更多：[Vue Application API](https://v3.vuejs.org/api/application-api.html#component)。
