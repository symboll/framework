<template>
  <div class="title"> pinia</div>
  <div>name: {{ store.name }}</div>
  <div>age: {{ store.age }}</div>

  <button @click="change">change</button>
  <button @click="change2">change2</button>
  <button @click="change3">change3</button>
  <button @click="change4">change4</button>
  <button @click="change5">change5</button>
  <button @click="change6">change6</button>

  <br>
  <button @click="reset">reset</button>

  <code-comp v-high-light></code-comp>
</template>
<script setup lang='ts'>
import { useStore } from '@/store'
import CodeComp from './index.md'
const store = useStore()

/**
 * 修改pinial里的值
 */
const change = () => {
  store.age++
}

const change2 = () => {
  store.$patch({
    age:22
  })
}
const change3 = () => {
  store.$patch((state) => {
    state.age++
  })
}
// 缺陷： 必须要修改整个对象 
const change4 = () => {
  store.$state = {
    name: 'lisi',
    age: 23
  }
}

// 使用action 来修改 
const change5 = () => {
  store.setName()
}

const change6 = () => {
  store.setAge(20)
}

const reset = () => {
  store.$reset()
}

store.$subscribe((args, state) => {
  console.log('args', args)
  console.log('state', state) 
})

store.$onAction((args) => {
  console.log('onAction args', args)
})

</script>