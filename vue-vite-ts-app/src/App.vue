<template>
  <main>
    <h-menu></h-menu>
    <section class="content">
      <router-view></router-view>
    </section>
  </main>
</template>
<script setup lang="ts">
import HMenu from '@/components/menu/index.vue'

</script>

<style lang="scss">
html,body {
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #303133;
}
.content {
  padding: 10px;
}


// common
.title {
  font-size: 16px;
  color: #303133;
  padding: 4px 12px;
  margin-bottom: 4px;
  background-color:  #fafafa;
}

.sub-title {
  font-size: 14px;
  color: #606266;
  padding: 4px 12px;
  background-color:  #fcfcfc;
}

.desc {
  font-size: 12px;
  color: #909399;
  padding: 2px 12px;
}
</style>
