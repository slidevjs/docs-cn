<script setup lang="ts">
defineProps<{
  links: string[]
}>()
</script>

<template>
  <div class="op-90 mb--1">
    了解更多:
  </div>
  <LinkCard v-for="link in links" :key="link" :link="link" />
</template>
