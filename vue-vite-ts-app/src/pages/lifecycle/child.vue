<template>
  <div>
    <div ref="dom">{{ message }}</div>
    <button @click="change">change</button>
  </div>
</template>
<script setup lang='ts'>
  import {
    ref,
    onBeforeMount, 
    onMounted, 
    onBeforeUpdate, 
    onUpdated, 
    onBeforeUnmount, 
    onUnmounted, 
    onActivated, 
    onDeactivated
  } from 'vue'

  const dom = ref<HTMLDivElement>()
  const message =ref('message')
  const change = () => {
    message.value = 'hello world'
  }
  console.log('setup')

  onBeforeMount(() => {
    console.log('onBeforeMount', dom.value?.innerHTML)
  })

  onMounted(() => {
    console.log('onMounted', dom.value?.innerHTML)
  })

  onBeforeUpdate(() => {
    console.log('onBeforeUpdate', dom.value?.innerHTML)
  })

  onUpdated(() => {
    console.log('onUpdated', dom.value?.innerHTML)
  })

  onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
  }) 

  onUnmounted(() => {
    console.log('onUnmounted')
  })

  onActivated(() => {
    console.log('onActivated')
  })
  onDeactivated(() => {
    console.log('onDeactivated')
  })
</script>