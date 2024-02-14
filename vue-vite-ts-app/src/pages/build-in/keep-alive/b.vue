<template>
  <p>Component B</p>
  <label v-for="color in colorList" :key="color">
    <input 
      type="radio" 
      :value="color" 
      v-model="colorValue"
    > 
    {{ color }}
  </label>
  <div>colorValue: {{ colorValue }}</div>

  <label 
    v-for="fruit in fruitList" 
    :key="fruit"
  >
    <input 
      type="checkbox" 
      :value="fruit" 
      v-model="fruitValue" 
    > 
    {{ fruit }}
  </label>
  <div>fruitValue: {{ fruitValue }}</div>
</template>
<script setup lang='ts'>
  import { ref, onMounted, onActivated } from 'vue'
  const colorList:string[] = ['red', 'blue', 'green','yellow']
  const colorValue = ref<string>('red')

  const fruitList: string[] = ['apple', 'banana', 'peach']
  const fruitValue = ref<string[]>(['apple'])

  onMounted(() => console.log('B onMounted'))
  onActivated(() => console.log('B onActivated'))

  defineOptions({
    name: 'KLB'
  })
</script>