<template>
  <div class="title">Global</div>
  <code-comp v-high-light></code-comp>

  <button @click="hints('success')">success</button>
  <button @click="hints('warning')">warning</button>
  <button @click="hints('info')">info</button>
  <button @click="hints('error')">error</button>
  <button @click="hints('default')">default</button>
  <button @click="hide">hide</button>
</template>
<script setup lang='ts'>
  import { getCurrentInstance } from 'vue'
  import codeComp from './index.md'
  import { messageType } from '@/interface/message';

  const app = getCurrentInstance()
  console.log(app?.proxy?.$http())

  const hints = (type: messageType) => {
    app!.proxy?.$message.show({ message: '提示信息', type }) 
    // app!.proxy?.$message.show('信息') // ‘default’
    // app!.proxy?.$message.success('信息') 
  }
  const hide = () => {
    app!.proxy?.$message.hide()
  }
</script>
<style scoped>

</style>