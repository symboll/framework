<template>
  <div class="title">v-model</div>

  <div class="father">
    <div>父组件</div>
    <button @click="toggle">toggle</button>
    <div>message: {{ message }}</div>

    <child v-model="visible" v-model:message.debounce="message"></child>
  </div>
  <editor :markdown="CodeComp"  />
</template>
<script setup lang='ts'>
  import { ref } from 'vue'
  import Child from './child.vue'
  import Version from './version.md'
  import CodeComp from './code.md'
  import Editor from '@/components/editor/index.vue'

  const visible = ref(false)
  const toggle = () => {
    visible.value = !visible.value
  }
  const message = ref('')

</script>
<style scoped lang="scss">
.father {
  padding: 10px;
  border-radius: 4px;
  background-color: rgba(255, 0, 0, .1);
}
</style>