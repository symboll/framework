<template>
  <div>
    <div class="title">内置组件 [Teleport 传送组件]</div>
    <div class="desc">类似react 的 create portal</div>
    <div class="btn-group">
      <button @click="visible = !visible">toggle dialog</button>
    </div>
    <dialog-comp
      v-model="visible"
      :title="title"
      :is-show-mask="maskFlag"
      :is-show-action="actionFlag"
    >
      <div>
        content...
        <button @click="maskFlag = !maskFlag">toggle mask</button>
        <button @click="actionFlag = !actionFlag">toggle action</button>
      </div>
      <template #action>
        <button>close</button>
        <button>confirm</button>
      </template>
    </dialog-comp>

    <div class="title">内置组件 [keep-alive 缓存组件]</div>
    <label><input type="radio" v-model="current" :value="KLA" /> A</label>
    <label><input type="radio" v-model="current" :value="KLB" /> B</label>
    <keep-alive exclude="KLB">
      <component :is="current"></component>
    </keep-alive>

    <div class="title">内置组件 [transition]动画组件</div>
    <transition-comp></transition-comp>

    <transition-group-comp></transition-group-comp>
  </div>
</template>
<script setup lang='ts'>
  import { ref, shallowRef } from 'vue'
  import DialogComp from '@/components/dialog/index.vue'
  import { KLA, KLB } from './keep-alive'
  import TransitionComp from './transition/index.vue'
  import  TransitionGroupComp  from './transition-group/index.vue'

  const visible = ref<boolean>(false)
  const maskFlag = ref<boolean>(false)
  const actionFlag = ref<boolean>(false)
  const title = '提示弹框'

  const current = shallowRef(KLA)

</script>
<style scoped>

</style>