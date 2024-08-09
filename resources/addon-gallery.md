---
aside: false
---

<script setup>
import AddonGallery from '../.vitepress/theme/components/AddonGallery.vue'
</script>

# 插件合集

此处是 Slidev 超棒的插件合集。

可以阅读 <LinkInline link="guide/theme-addon#use-addon" /> 来了解如何使用它们，或者阅读 <LinkInline link="guide/write-addon" /> 来创建自己的插件。

## 官方插件 {#official-addons}

<ClientOnly>
  <AddonGallery collection="official"/>
</ClientOnly>

## 社区插件 {#community-addons}

下列是精选的社区插件。

<!-- Edit in ./docs/.vitepress/addons.ts -->
<ClientOnly>
  <AddonGallery collection="community"/>
</ClientOnly>

## 更多插件 {#more-addons}

[在 NPM 上](https://www.npmjs.com/search?q=keywords%3Aslidev-addon)查找所有已发布的插件。
