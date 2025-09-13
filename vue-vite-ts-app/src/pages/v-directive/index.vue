<template>
  <div class="title">v-directive</div>
  <child v-symboll:name.desc="{ background: 'rgba(255,0,0,.1)' }"></child>

  <button @click="flag= !flag" class="change-btn">change</button>
  <child v-auth="flag"></child>

  <div class="title">Example</div>
  <div class="desc">v-move</div>
  <button @click="visible = !visible">show dialog</button>
  <dialog-comp
    v-model="visible"
    :title="title"
  >
    <div>
      content...
    </div>
  </dialog-comp>

  <div class="desc">v-lazy</div>
  <editor :markdown="LazyCode" language="javascript" />
  <lazy-comp v-lazy></lazy-comp>
</template>
<script setup lang='ts'>
  import { ref } from 'vue'
  import type { Directive, DirectiveBinding } from 'vue'
  import Child from './child.vue'
  import Editor from '@/components/editor/index.vue'
  import DialogComp from '@/components/dialog/index.vue'
  import LazyComp from './lazy/index.vue'
  import LazyCode from './lazy/index.md'

  type Dir = {
    background: string
  }

  /**
   * 对象模式
   */
  const vSymboll :Directive = {
    created () {},
    beforeMount () {},
    mounted (el:HTMLElement, dir: DirectiveBinding<Dir>) {
      el.style.background = dir.value.background
    }, 
    beforeUpdate () {},
    updated () {},
    unmounted () {} 
  }

  const flag = ref(false)
  /**
   * 函数模式
   * mounted,
   * updated
   */
  const vAuth: Directive = (el: HTMLElement, dir:DirectiveBinding) => {
    console.log(el)
    console.log(dir)
  }

  const visible = ref(false)
  const title = ref('v-move example')
</script>
<style scoped lang="scss">
.change-btn {
  margin-top: 12px;
}

.desc {
  margin-top: 12px;
}
</style>