---
editLink: false
footer: false
aside: false
outline: false
sidebar: false
pageClass: all-features-page
---

<script setup lang="ts">
import { useUrlSearchParams } from '@vueuse/core'
import { computed, toRef, ref } from 'vue'
import { withBase } from 'vitepress'
import { data as features } from './index.data'

const query = useUrlSearchParams('hash-params', { removeFalsyValues: true })
const search = toRef(query, 'search') as Ref<string | null>
const tags = toRef(query, 'tags') as Ref<string | null>
const tagsArr = computed({
  get: () => tags.value?.toLowerCase().split(',').map(t => t.trim()).filter(Boolean) ?? [],
  set: (val: string[]) => query.tags = val.join(','),
})

const filteredFeatures = computed(() => {
  const s = search.value?.toLowerCase().trim()
  const t = tagsArr.value
  console.log(s, t)
  return Object.values(features).filter(feature => {
    return (!s || feature.title.toLowerCase().includes(s) || feature.description.toLowerCase().includes(s))
      && (!t?.length || t.every(tag => feature.tags?.includes(tag)))
  })
})

function resetFilters() {
  query.search = null
  query.tags = null
}

function removeTag(tag: string) {
  tagsArr.value = tagsArr.value.filter(t => t !== tag)
}
</script>

# 功能列表

本页是 Slidev 提供的相对独立的功能列表。每一个功能都可以在有需要的时候单独使用，使你的幻灯片更加精彩。

如果你想按主题了解这些功能，也可以阅读 <LinkInline link="guide/index" />。

<div flex items-center mt-6 pl-1>
  <carbon:search text-sm mr-2 op-80 />
  <input v-model="search" type="search" placeholder="搜索..." class="b-b-.5 b-solid b-gray-200/40 focus:b-gray-200/80" />
  <div ml-12 flex items-center gap-1 v-if="tagsArr.length">
    <carbon:tag text-sm mr-1 op-80 />
    <FeatureTag v-for="tag in tagsArr" :key="tag" :tag removable @remove="removeTag(tag)"/>
  </div>
</div>

<FeaturesOverview :features="filteredFeatures" />

<div v-if="filteredFeatures.length === 0" class="w-full mt-6 op-80 flex flex-col items-center">
  找不到匹配的功能
  <button class="block select-button flex-inline gap-1 items-center px-2 py-1 hover:bg-gray-400/10 rounded" @click="resetFilters()">
    <carbon:filter-remove />
    清除搜索条件
  </button>
</div>

<style>
.all-features-page .VPDoc > .container > .content {
  max-width: 72vw !important;
}
</style>

<style>
:root {
  overflow-y: scroll;
}
</style>
