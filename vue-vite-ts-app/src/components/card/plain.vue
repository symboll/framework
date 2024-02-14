<template>
  <div class="card">
    <header class="header">{{ title }}</header>
  </div>
</template>

<script setup lang='ts'>
  withDefaults(defineProps<{
    title: string,
  }>(), {
    title: '标题'
  })


</script>
<style scoped lang="scss">
.card {
  width: 200px;
  height: 120px;
  border-radius: 4px;
  border: 1px solid #456;

  .header {
    height: 20px;
    font-size: 14px;
    color: #456;
    padding: 4px;
    border-bottom: 1px solid #789;
  }
  .content {
    font-size: 12px;
    color: #456;
    padding: 4px 8px;
  }
}
</style>