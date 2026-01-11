<template>
  <aside class="aside">
    <slot></slot>
  </aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .aside {
    background-color: #efefef;
    width: 160px;
    overflow: auto;
  }
</style>