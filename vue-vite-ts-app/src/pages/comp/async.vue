<template>
  <div class="async">
    <div class="cover">
      <img :src="data.url">
    </div>
    <div class="context">
      <div class="name">{{ data.name }}</div>
      <div class="desc">{{ data.desc }}</div>
      <div class="author">{{ data.author }}</div>
    </div>
  </div>
</template>
<script setup lang='ts'>
  import { axios } from '@/util/axios'
  import { Response } from '@/interface/response'

  // 顶层await
  const { data } = await axios.get<Response>('./data.json')
</script>
<style lang="scss" scoped>
@import url('./common.scss');
</style>