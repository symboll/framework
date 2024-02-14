<template>
  <div class="child">
    <div class="props">
      <span>name: {{ name }}</span> 
      <span>[父组件传值]</span>
    </div>
    <div class="custom">
      <span>age: {{ age }}</span>  
      <span>[子组件自定义]</span>
    </div>

    <div v-for="item in list" :key="item">{{ item }}</div>
    <button @click="submit">子组件向父组件传值</button>
  </div>
  
</template>
<script setup lang='ts'>
import { ref } from 'vue';

  // const props = defineProps({
  //   name: {
  //     type: String,
  //     default: '默认值'
  //   }
  // })

  // const props = defineProps<{
  //   name: string,
  //   list: number[]
  // }>()

  // 定义默认值 widthDefaults
  const props = withDefaults(defineProps<{
    name: string,
    list: number[]
  }>(), {
    list: () => []
  })

  console.log('setup', props.name)

  // const emit = defineEmits(['submit'])
  const emit = defineEmits<{
    (e: 'submit', num: number, num2: string, val: any): void
  }>()
  const submit = () => {
    emit('submit', 1, 'name', { key: 'value' })
  }


  const age = ref(18)
  const ageChange = () => {
    age.value ++
  }
  // 向父组件 暴露 属性，方法
  defineExpose({
    age,
    ageChange
  })
</script>
<style scoped lang="scss">
.child {
  padding: 10px;
  border-radius: 4px;
  border:1px solid skyblue;


  @mixin com {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span:nth-child(2) {
      color: #909399;
    }
  }
  .props  {
    background-color: rgba(0, 255, 0, .1);
    @include com;
  }
  .custom {
    background-color: rgba(255, 0, 0, .1);
    @include com;
  }
}
</style>