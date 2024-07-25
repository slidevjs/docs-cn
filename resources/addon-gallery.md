---
aside: false
---

<script setup>
import AddonGallery from '../.vitepress/theme/components/AddonGallery.vue'
</script>

# 插件合集

Browse awesome addons available for Slidev here.

Read more about <LinkInline link="guide/theme-addon#use-addon" /> to use them, and <LinkInline link="guide/write-addon" /> to create your own addon.

## 官方插件 {#official-addons}

<ClientOnly>
  <AddonGallery collection="official"/>
</ClientOnly>

## 社区插件 {#community-addons}

Here are the curated addons made by the community.

<!-- Edit in ./docs/.vitepress/addons.ts -->
<ClientOnly>
  <AddonGallery collection="community"/>
</ClientOnly>

## 更多插件 {#more-addons}

Find all the [addons available on NPM](https://www.npmjs.com/search?q=keywords%3Aslidev-addon).
