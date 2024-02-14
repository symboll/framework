<template>
  <div class="title">built-in Hook</div>
  <card title="a组件标题">
    <div>default slot</div>
    <template #footer>
      <button>Ok</button>
      <button>Cancel</button>
    </template>
  </card>

  <div class="title">custom hook</div>
  <img class="image" id="image" :src="url" alt="">
  <img class="image" :src="copyUrl" alt="">

  <div class="title">npm module hook</div>

  <div class="resize" id="resize">
    dad
  </div>

  <div class="resize" v-resize="resizecb">
    dad
  </div>
</template>
<script setup lang='ts'>
  import { ref, onMounted } from 'vue'
  import useReize from 'vue-symboll-hook'
  import Card from '@/components/card/with-props.vue'


  import useBase64 from './index'
  import getImageUrl from '@/util/img-url'

  const url = getImageUrl('duck.gif')
  const copyUrl = ref<string>('')
  
  useBase64({ el: '#image' }).then(res => {
    copyUrl.value = res
  })

  onMounted(() => {
    useReize(document.querySelector('#resize') as HTMLElement, (event: any) => {
      console.log('event: ',event)
    })
  })

  const resizecb = (event: any) => {
    console.log('resizecb', event)
  }
</script>
<style lang="scss" scoped>
.image {
  width: 200px;
  height: 200px;
}

.resize {
  border: 1px solid #ccc;
  resize: both;
  overflow: hidden;
}
</style>