<template>
  <div>
    <button @click="send">Button</button>
  </div>
</template>
<script setup lang='ts'>
  const emit = defineEmits<{
    'send': [...args: any[]]
  }>()

  const send = () => {
    emit('send', 'zhangsan', 'lisi')
  }
</script>
<style scoped lang="scss">

</style>