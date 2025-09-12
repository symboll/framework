<template>
  <div class="title">Global</div>
  <code-comp v-high-light></code-comp>

  <button @click="show('success')">success</button>
  <button @click="show('warning')">warning</button>
  <button @click="show('info')">info</button>
  <button @click="show('error')">error</button>
  <button @click="show('default')">default</button>
  <button @click="hide">hide</button>
</template>
<script setup lang='ts'>
  import { getCurrentInstance } from 'vue'
  import codeComp from './index.md'
  import { messageType } from '@/interface/message';

  const app = getCurrentInstance()
  console.log(app?.proxy?.$http())

  const show = (type: messageType) => {
    app!.proxy?.$message.show({ message: '提示信息:' + new Date() + "_" + Math.random(), type, duration: 20000, close: true }) 
    // app!.proxy?.$message.show('信息') // ‘default’
    // app!.proxy?.$message.success('信息') 
  }
  const hide = () => {
    app!.proxy?.$message.hide()
  }
</script>
<style scoped>

</style>