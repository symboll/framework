<template>
  <div class="title">props & emit</div>
  <div class="wrap">
    父组件：
    <button @click="change">Change</button>
    <button @click="getChildProps">Get child props</button>
    <button @click="changeChildProps">change child props</button>
    <child
      :name="name"
      :list="list"
      @submit="submitHandler"
      ref="child"
    ></child>
  </div>
  <editor :markdown="fcComp" language="javascript"/>
  <div class="title">provide & inject</div>
  <div class="wrap">
    <label v-for="color in colorList" :key="color">
      <input type="radio" v-model="colorValue" :value="color"> {{ color }}
    </label>
    <div class="box"></div>
    <branch></branch>
  </div>

  <div class="title">Event Bus</div>
  <div class="wrap">
    <brother-a></brother-a>
    <brother-b></brother-b>
  </div>
</template>
<script setup lang='ts'>
  import { ref, provide, readonly } from 'vue'
  import Editor from '@/components/editor/index.vue'
  import Child from './child.vue';
  import Branch from './branch.vue'
  import BrotherA from './brother-a.vue'
  import BrotherB from './brother-b.vue'
  import fcComp from  './fc.md'

  const name = ref('zhangsan')
  const list = ref([1,2,3,4])

  const change = () => {
    name.value = 'lisi'
  }

  const submitHandler = (props1: number, props2: string, props3: any) => {
    console.log(props1, props2, props3)
  }

  // 父组件直接使用子组件 属性/方法
  const child = ref<InstanceType<typeof Child>>()
  const getChildProps = () => {
    console.log(child.value?.age)
  }

  const changeChildProps = () => {
    child.value?.ageChange()
  }

  const colorList = ['red', 'green', 'yellow', 'blue']
  const colorValue = ref<string>('red')
  provide('color', readonly(colorValue))
</script>
<style scoped>
.wrap {
  width: 400px;
  padding: 10px;
  border: 1px solid #678;
  border-radius: 4px;
}

.box {
  width: 20px;
  height: 20px;
  background-color: v-bind(colorValue);
  margin-bottom: 10px;
}
</style>