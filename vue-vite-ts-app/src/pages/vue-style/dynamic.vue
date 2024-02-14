<template>
  <div class="text"> dynamic css</div>
</template>
<script setup lang='ts'>
  import { reactive } from 'vue'

  const style = reactive({
    color: '#6789ab'
  })

  setTimeout(() => {
    style.color = '#1bcdef'
  }, 2000);
</script>
<style lang="scss" scoped>
.text {
  color: v-bind('style.color');
}
</style>