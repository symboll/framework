<template>
  <div class="title"> pinia</div>
  <div>name: {{ store.name }}</div>
  <div>age: {{ store.age }}</div>

  <hr>
  <div>解构之后：{{ age }}</div>
  <button @click="change">Change</button>
  <hr>
  <button @click="asyncFn">asyncFn</button>
</template>
<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useStore } from '@/store'
const store = useStore()

const { age } = storeToRefs(store)

const change = () => {
  age.value++
}

const asyncFn = () => {
  store.setUserInfo()
}
</script>
<style scoped>

</style>