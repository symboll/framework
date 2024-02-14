<template>
  <div class="menu">
    <template v-for="route of routes">
      <div 
        v-if="route.path" 
        class="menu-item"
        :class="{
          'active': router.currentRoute.value.path.startsWith(route.path)
        }"
        @click="navigator(route.path)"
      >
        {{ route.path.replace('/', '') }}
      </div>
    </template>
  </div>
</template>
<script setup lang='ts'>
  import { useRouter } from 'vue-router'
  import { routes } from '@/router/routes'

  const router = useRouter()

  const navigator = (path: string) => {
    router.push({ path })
  }
</script>
<style scoped lang="scss">
.menu {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 12px;
  border-bottom: 1px solid #678;
  &-item {
    font-size: 14px;
    color: #456;
    cursor: pointer;
  }
  .active {
    color:  #81C784;
  }
}
</style>