<template>
  <div class="title">Watch</div>
  <form @submit.prevent="submitHandler">
    <div class="form-item">
      <label for="single">single: </label>
      <input id="single" v-model="single"  />  
    </div>

    <div class="form-item">
      <label for="multiple">multiple:</label>
      <input id="multiple" v-model="multiple" type="text">
    </div>

    <div class="form-item">
      <label for="deepObject">deepObject:</label>
      <input id="deepObject" v-model="deepObject.foo.bar.name" type="text">
    </div>
    <div class="form-item">
      <label for="deepObject2">deepObject:</label>
      <input id="deepObject2" v-model="deepObject.foo.bar.age" type="text">
    </div>
    <button type="submit">submit</button>
  </form>
  <editor :markdown="WatchComp" language="javascript"/>
  <div id="dom">ele</div>
  <button @click="stop"> stop watchEffect</button>
</template>
<script setup lang='ts'>
  import { ref, watch, watchEffect } from 'vue'
  import WatchComp from './index.md'
  import editor from '@/components/editor/index.vue'

  interface DeepObject {
    [prop: string]: any 
  }

  const single = ref<string>('')
  const multiple = ref<string>('')
  const deepObject = ref<DeepObject>({
    foo: {
      bar: {
        name: 'zhangsan',
        age: 12
      }
    }
  })
  watch(single, (val, oldVal) => {
    console.log('%c single ', 'color: #fff; background: #345;',val, oldVal)
  })

  watch([single, multiple], (val, oldVal) => {
    console.log('%c multiple ', 'color: #fff; background: #f45;',val, oldVal)
  })

  watch(deepObject, (val, oldVal) => {
    console.log('%c deepObject ', 'color: #fff; background: #d39;',val, oldVal)
  }, {
    deep: true,
  })

  watch(() => deepObject.value.foo.bar.name, (val, oldVal) => {
    console.log('%c deepObject.value.foo.bar.name ', 'color: #fff; background: #202;',val, oldVal)
  })

  const submitHandler = () => {

  }

  const stopWatchEffect = watchEffect((oninvalidate) => {
    // console.log('multiple: ',multiple.value)
    const dom: HTMLDivElement = document.querySelector('#dom') as HTMLDivElement
    console.log('dom', dom)
    oninvalidate(() => {
      console.log('before')
    })
  }, {
    flush: 'post'
  })

  const stop = () => {
    stopWatchEffect()
  }
</script>
<style scoped lang="scss">
.form-item {
  margin-bottom: 12px;
  label {
    display: inline-block;
    width: 100px;
  }
}
</style>