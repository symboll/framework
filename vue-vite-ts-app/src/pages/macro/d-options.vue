<template>
  <div>
    <div v-for="item in data" :key="item.id" class="ml-10">
      {{ item.label }}
      <template v-if="item.children">
        <zhangsan :data="item.children"></zhangsan>
      </template>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { Tree } from './interface';

  defineOptions({
    name: 'zhangsan'
  })

  defineProps<{
    data: Tree[]
  }>()
</script>
<style scoped lang="scss">
  .ml-10 {
    margin-left: 10px;
  }
</style>