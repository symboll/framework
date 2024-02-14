<template>
  <div :class="[$style.title, $style.bg]">
    CSS MODULE
  </div>
  <div :class="[abc.title, abc.background]">
    CUSTOM NAME CSS MODULE
  </div>
</template>
<script setup lang='ts'>
  import { useCssModule } from 'vue'
  const css = useCssModule('abc')
  console.log('css', css)
</script>
<style lang="scss" module>
.title {
  color: #abcdef;
}
.bg {
  background-color: #106fcd;
}
</style>

<style lang="scss" module="abc">
.title {
  color: #147abc;
}
.background {
  background-color: #dcdcdc;
}
</style>