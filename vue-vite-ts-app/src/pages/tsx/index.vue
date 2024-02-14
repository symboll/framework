<template>
  <div class="title">tsx</div>
  <render-fn></render-fn>
  <hr>
  <options-api></options-api>
  <hr>
  <setup-fn :name="name" @on-click="handler"></setup-fn>
</template>
<script setup lang='ts'>
  import renderFn from './render-fn'
  import optionsApi from './options-api';
  import setupFn from './setup-fn';

  const name = 'Symboll'
  const handler = (name: string) => {
    console.log('name: ', name)
  }
</script>
<style scoped lang="scss">

</style>  