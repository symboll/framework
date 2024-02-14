<template>
  <div class="title">v-deep()</div>
  <div class="example">
    <deep-comp class="deep-a"></deep-comp>
    <deep-comp class="deep-b"></deep-comp>
  </div>

  <div class="title">:slotted</div>
  <slotted-comp>
    <div class="effect">effect</div>
    <template #header>
      <div class="uneffect">uneffect</div>
    </template>
  </slotted-comp>

  <div class="title">dynamic</div>
  <dynamic></dynamic>

  <div class="title">css Module</div>
  <css-module></css-module>
</template>
<script setup lang='ts'>
  import deepComp from './deep.vue'
  import slottedComp from './slotted.vue';
  import dynamic from './dynamic.vue'
  import cssModule from './css-module.vue'
</script>
<style scoped lang="scss">
.example {
  display: flex;
  gap: 12px;
}
.deep-a {
  .content {
    background-color: salmon;
  }
}

.deep-b {
  :deep(.content) {
    background-color: salmon;
  }
}
</style>