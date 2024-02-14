<template>
  <button @click="push">push</button>
  <button @click="pop">pop</button>
  <div class="group">
    <transition-group
      leave-active-class="animate__animated animate__flipOutX"
      enter-active-class="animate__animated animate__flipInX"
    >
      <div 
        v-for="item in list" 
        :key="item"
        class="group-item"
      >{{ item }}</div>
    </transition-group>
  </div>

  <div class="sub-title">平移过度</div>
  <button @click="random">random</button>
  <transition-group move-class="move" tag="div" class="table">
    <div 
      v-for="item in list2" 
      :key="item.id"
      class="table-item"
    >{{ item.number }}</div>
  </transition-group>

  <div class="sub-title">状态过度</div>
  <input type="number" step="20" v-model="num.current">
  <div>{{ num.tweenedNumber.toFixed(2) }}</div>

</template>
<script setup lang='ts'>
  import { ref, reactive, watch } from 'vue'
  import { shuffle } from 'lodash-es'
  import gsap from 'gsap';
  import 'animate.css'

  const list = reactive<number[]>([1,2,3,4,5,6,7])
  const push = () => {
    list.push(list.length + 1)
  }
  const pop = () => {
    list.pop()
  }

  const list2 = ref(Array.from({ length: 81 }, (_, i) => ({
    id: i,
    number: (i % 9) + 1
  })))
  const random = () => {
    list2.value = shuffle(list2.value)
  }

  const num = reactive({
    current: 0,
    tweenedNumber: 0
  })
  watch(() => num.current, (val) => {
    gsap.to(num, {
      duration:1,
      tweenedNumber: val
    })
  })
</script>
<style scoped lang="scss">

.group {
  display: flex;
  margin-top: 10px;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 2px;
    font-size: 20px;
    font-weight: 900;
    background-color: lightcoral;
    color: #fff;
  }
}

.table {
  display: flex;
  flex-wrap: wrap;
  width: calc( 25px * 10 + 9px);
  margin-top: 10px;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
  }
}

.move {
  transition: transform  2s;
}
</style>