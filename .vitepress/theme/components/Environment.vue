<script setup lang="ts">
defineProps<{ type: 'node' | 'client' | 'both' }>()
</script>

<template>
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      环境：
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="pt2 opacity-75">
<<<<<<< HEAD
      <span v-if="type === 'node'">
        此配置仅在 Node.js 环境下运行。你可以访问 Node.js 的相关 API 了解更多。
=======
      <span v-if="type === 'both'">
        This setup function will run on <b>both</b> Node.js and client side. Avoid using either Node's or DOM API to avoid runtime errors.
      </span>
      <span v-else-if="type === 'node'">
        This setup function will only run on Node.js environment, you can have access to Node's API.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
      </span>
      <span v-else>
        此配置仅在客户端环境下运行。在引入包时，请确保浏览器的兼容性。
      </span>
    </div>
  </details>
</template>
