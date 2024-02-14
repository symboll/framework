<template>
  <div class="title">lifecycle</div>
  <child v-if="flag"></child>
  <button @click="flag = !flag">mount or unmounte</button>
</template>
<script setup lang='ts'>
  import { ref } from 'vue'
  import child from './child.vue'
  const flag = ref<boolean>(true)
</script>

<style lang="scss" scoped>
</style>