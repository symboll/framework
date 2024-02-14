<template>
  <div class="names">
    <span class="label">props.name:</span>
    <span v-for="name in names">{{ name }}</span>
  </div>
</template>
<script setup generic="T" lang='ts'>
  defineProps<{
    names: T[]
  }>()
</script>  
<style scoped lang="scss">

.names {
  display: flex;
  gap: 12px;
}
</style>