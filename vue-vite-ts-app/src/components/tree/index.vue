<template>
  <div v-for="item in data" :key="item.name" class="tree" @click.stop="tapHandler(item)">
    <input v-model="item.checked" type="checkbox" />
    <label>{{ item.name }}</label>
    <tree v-if="item.children?.length" :data="item.children"></tree>
  </div>
</template>
<script setup lang='ts'>
  import { TreeItem } from '@/interface/tree'

  defineOptions({
    name: 'tree'
  })
  
  withDefaults(defineProps<{
    data: TreeItem[]
  }>(), {
    data: () => []
  })

  const tapHandler = (item: TreeItem) => {
    console.log(item)
  }
</script>

<style scoped lang="scss">
.tree {
  margin-left: 12px;
}
</style>