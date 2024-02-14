<template>
  <div class="wrap">
    <div v-for="item in list" class="item">
      <slot :item="item"></slot>
    </div>
  </div>
</template>
<script setup generic="T" lang='ts'>
  defineProps<{
    list: T[]
  }>()
  
  defineSlots<{
    default (props: { item: T }):void
  }>()
</script>
<style scoped lang="scss">
.wrap {
  display: flex;
  gap: 12px;
  .item {
    padding: 4px 12px;
    border-radius: 4px;
    background-color: rgba(22,125,22,1);
  }
}
</style> 