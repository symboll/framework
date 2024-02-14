<template>
  <div class="leaf">
    <div class="sub-title">Leaf</div>
    <button @click="change">change provide color</button>
    <div class="box"></div>
  </div>
</template>
<script setup lang='ts'>
  import { inject } from 'vue'
  import type { Ref } from 'vue'
  const color = inject<Ref<string>>('color')

  const change = () => {
    color!.value = 'pink'
  }
</script>
<style lang="scss" scoped>
.leaf {
  border: 1px solid lightblue;
  border-radius: 4px;
  padding: 10px;
}
.box {
  width: 20px;
  height: 20px;
  background-color: v-bind(color);
}
</style>