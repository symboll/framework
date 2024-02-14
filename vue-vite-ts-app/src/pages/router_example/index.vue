<template>
  <div class="title">router</div>
  <div class="links">
    <router-link :to="{ name: 'a' }" replace>page A</router-link>
    <router-link to="/router/b">page B</router-link>

    <button @click="navigator('list')">list</button>
    <!-- <button @click="navigator('detail')">detail</button> -->

    <button @click="next">next</button>
    <button @click="prev">prev</button>
  </div>
  <router-view #default="{ route, Component }">
    <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
      <component :is="Component"></component>     
    </transition>
  </router-view>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router'
import 'animate.css'

const router = useRouter()

/**
 * 编程式导航
 * router.push('path')
 * router.push({ path: 'path' })
 * router.push({ name: 'name' })
 */ 
const navigator = (path: string) => {
  router.push({
    path
  })
}

/**
 * 没有历史记录
 */ 
// const navigator = (path: string) => {
//   router.replace(path)
// }


const next = () => {
  router.go(1)
}
const prev = () => {
  router.back()
}
</script>
<style scoped lang="scss"> 
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}
</style>