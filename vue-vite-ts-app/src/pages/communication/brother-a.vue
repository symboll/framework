<template>
  <div class="a">
    <div>component A</div>
    <div>message from B is <span class="message">{{ message }}</span></div>
    <button @click="emit">emit an event</button>
  </div>
</template>
<script setup lang='ts'>
  import { ref } from 'vue'
  import bus from '@/util/event-emitter'

  const emit = () => {
    bus.emit('on-click', 'hello component B')
  }

  const message = ref<string>('')
  bus.on('on-callback', (params: any) => {
    message.value = params
  })
</script>
<style lang="scss" scoped>
.a {
  background-color: lightblue;
  .message {
    font-weight: 900;
    color: #fff;
  }
}
</style>