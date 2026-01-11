<template>
  <div class="menu">
    <template v-for="route of routes">
      <div
        v-if="route.path"
        :class="{
          'menu-item': true,
          active: router.currentRoute.value.path.startsWith(route.path),
        }"
        @click="navigator(route)"
      >
        {{ route.path.replace("/", "") }}
        <span 
          v-if="route.children?.length" 
          class="iconfont transition"
          :class="{
            rotate: collapse[route.path]
          }"
        >&#xe65e;</span>
      </div>
      <l-menu 
        v-if="route.children?.length && (collapse[route.path] || route.path === '')" 
        :routes="route.children"
        :fatherPath="route.path"
        :class="{
          'ml-4': route.path !== ''
        }"
      ></l-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, type RouteRecordRaw } from "vue-router";
const props = withDefaults(
  defineProps<{
    routes: any[];
    fatherPath?: string,
  }>(),
  {
    routes: () => [],
  }
);
defineOptions({
  name: "l-menu",
});
console.log(props.fatherPath)
const router = useRouter();
const collapse = ref<any>({})

const navigator = (route: RouteRecordRaw): void => {
  if (Array.isArray(route.children) && route.children.length) {
    collapse.value[route.path] = !collapse.value[route.path]
    return; 
  }
  let path = route.path
  if (props.fatherPath) {
    path = `${props.fatherPath}/${route.path}`
  }
  router.push({ path });
};
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px;
    font-size: 14px;
    color: #456;
    cursor: pointer;
    &:hover {
      background-color: #def;
    }
  }

  .rotate {
    transform: rotate(180deg);
  }
  .transition {
    transition: all .3s;
  }
  .active {
    color: #81c784;
  }
}
</style>
