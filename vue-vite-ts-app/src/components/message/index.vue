<template>
  <Teleport to="body">
    <div v-if="visible" :class="['message', type]">{{ message }}</div>
  </Teleport>
</template>
<script setup lang='ts'>
  import { ref } from 'vue'
  import { msgParams, messageType } from '@/interface/message';

  const visible = ref<boolean>(false)
  const message = ref<string>('')
  const type = ref<messageType>('default')

  const success = (message: string) => show({ message, type: 'success' })
  const warning = (message: string) => show({ message, type: 'warning' })
  const error = (message: string) => show({ message, type: 'error' })
  const info = (message: string) =>  show({ message, type: 'info' })

  const show = (params: msgParams) => {
    visible.value = true
    if (typeof params == 'string') {
      type.value = 'default'
      message.value = params
    } else {
      type.value = params.type
      message.value = params.message
    }
  }
  const hide = () => visible.value = false

  defineExpose({
    show,
    hide,
    success,
    warning,
    error,
    info
  })
</script>
<style lang="scss" scoped>
.message {
  position: absolute;
  right: 10%;
  top: 20px;

  display: flex;
  align-items: center;

  min-width: 200px;
  height: 36px;
  border-radius: 4px;
  padding: 0 20px;

  font-size: 12px;
  cursor: pointer;
}
.success {
  background-color: #81C784;
  color: #fff;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}
.warning {
  background-color: #FFB74D;
  color: #fff;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}
.error {
  background-color: #E53935;
  color:#fff;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}
.info {
  background-color: #90A4AE;
  color: #fff;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}
.default {
  background-color: #fff;
  color: #606266;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}
</style>