<template>
  <div class="b">
    <div>component B</div>
    <div>message from A is <span class="message">{{ message }}</span></div>
    <button @click="emit">emit an event</button>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import bus from '@/util/event-emitter'

const emit = () => {
  bus.emit('on-callback', 'hello component A')
}

const message = ref<string>('')
bus.on('on-click', (params: any) => {
  message.value = params
})

</script>
<style lang="scss" scoped>
.b {
  background-color: lightcoral;
  .message {
    font-weight: 900;
    color: #fff;
  }
}
</style>