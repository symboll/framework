<template>
  <div class="images">
    <img v-for="item in list" :key="item" v-lazy="item">
  </div>
</template>
<script setup lang='ts'>
  import type { Directive } from 'vue'

  const images: Record<string, { default: string }> = import.meta.glob("@/assets/*.avis",{ eager: true })
  const list = Object.values(images).map(image => image.default)

  const vLazy:Directive<HTMLImageElement, string> = async (el, bing) => {
    const defa = await import('./def-image.avis')
    el.src = defa.default

    const observer = new IntersectionObserver((entry) => {
      if (entry[0].intersectionRatio > 0){
        el.src = bing.value
        observer.unobserve(el)
      }
    })
    observer.observe(el)
  }
</script>
<style scoped lang="scss">
.images {
  background-color: seashell;
  width: 258px;
  height: 500px;
  overflow-y: auto;
  > img {
    width: 100%;
  }
}
</style>