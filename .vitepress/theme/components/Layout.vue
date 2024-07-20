<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { Tooltip } from 'floating-vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-title-after>
      <a @click.prevent>
        <Tooltip :triggers="['hover', 'click']" :popper-triggers="['hover']">
          <Badge class="scale-80 translate-x--1 select-none">
            新版文档
          </Badge>
          <template #popper>
            您正在访问新版文档。
          </template>
        </Tooltip>
      </a>
    </template>
  </Layout>
</template>
