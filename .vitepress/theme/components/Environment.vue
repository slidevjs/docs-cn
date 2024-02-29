<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
<<<<<<< HEAD
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      环境：
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
=======
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Environment:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
>>>>>>> 15820b064d1f419ed06cd798ae4b6dfe0c230e94
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'node'">
        此配置仅在 Node.js 环境下运行。你可以访问 Node.js 的相关 API 了解更多。
      </span>
      <span v-else>
        此配置仅在客户端环境下运行。在引入包时，请确保浏览器的兼容性。
      </span>
    </div>
  </details>
</template>
