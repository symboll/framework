<template>
  <div class="title">编译宏</div>

  <d-props :names="names" class="mb-4"></d-props>
  <button @click="change">change</button>
  <hr/>
  <d-emit @send="sendHandler" class="mb-4"></d-emit>
  <hr/>
  <d-options :data="tree" class="mb-4"></d-options> 
  <hr/>
  <d-slots :list="list" class="mb-4">
    <template #default="{item}">
      <span class="custom">{{ item.name }}</span>
    </template>
  </d-slots>
  <code-comp v-high-light></code-comp>


</template>
<script setup lang='ts'>
import { ref } from 'vue'
import DProps from './d-props.vue'
import DEmit from './d-emit.vue'
import DOptions from './d-options.vue'
import DSlots from './d-slots.vue'
import CodeComp from './index.md'
import { Tree } from './interface'

const names = ref<(string| number)[]>(['hello', 'world'])
const change = () => {
  names.value = [1,2,3]
}

const sendHandler = (first: string, second: string) => {
  console.log(first, second)
}

const tree = ref<Tree[]>([
  {
    id: 'a',
    label: '第一层a',
    children: [
      {
        id: 'b',
        label: '第二层a'
      },
      {
        id: 'c',
        label: '第二层b'
      }
    ]
  },
  {
    id: 'd',
    label: '第一层b'
  }
])

const list = [
  {
    name: 'zhangsan',
    age: 18
  },
  {
    name: 'lisi',
    age: 20
  }
]

</script>
<style scoped lang="scss">
.mb-4 {
  margin-bottom: 4px;
}
.custom {
  color: #fff;
  font-size: 14px;
}
</style>