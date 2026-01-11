<template>
  <div class="page">
    <l-aside>
      <l-menu :routes="routes"></l-menu>
    </l-aside>
    <l-main>
      <router-view></router-view>
    </l-main>
  </div>
</template>

<script setup lang="ts">
import LAside from "./aside.vue";
import LMain from "./main.vue";
import LMenu from "@/components/menu/index.vue";

import { routes } from "@/router/routes";

console.log(routes)
</script>

<style scoped lang="scss">
.page {
  display: flex;
  height: 100vh;
}
</style>
