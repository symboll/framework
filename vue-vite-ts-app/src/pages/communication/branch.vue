<template>
  <div class="branch">
    <div class="sub-title">Branch</div>
    <div class="box"></div>
    <leaf></leaf>
  </div>
</template>
<script setup lang='ts'>
  import { inject } from 'vue'
  import type { Ref } from 'vue'
  import leaf from './leaf.vue'

  const color = inject<Ref<string>>('color')
</script>
<style scoped lang="scss">
.branch {
  border: 1px solid lightcoral;
  border-radius: 4px;
  padding: 10px;
}
.box {
  width: 20px;
  height: 20px;
  background-color: v-bind(color);
  margin-bottom: 10px;
}
</style>