<script setup lang="ts">
defineProps<{ type: 'node' | 'client' | 'both' }>()
</script>

<template>
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      运行环境:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'both'">
        该文件中的代码将在 Node.js <b>和</b> 中浏览器 运行。请避免使用 Node.js 或 DOM API 以防止出现运行时错误。
      </span>
      <span v-else-if="type === 'node'">
        该文件中的代码将仅在 Node.js 环境中运行，您可以访问 Node 的 API。
      </span>
      <span v-else-if="type === 'client'">
        该文件中的代码将仅在浏览器中运行。导入包时请确保浏览器兼容性。
      </span>
    </div>
  </details>
</template>
