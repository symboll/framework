<template>
  <div class="meta-title">
    bem:
    <div class="meta-title__inner">小字</div>
    <div class="meta-title--success">success</div>
  </div>
</template>
<style scoped lang="scss">
@include b(title) {
  color: red;

  @include e (inner) {
    font-size: 12px;
    color:blue;
  }

  @include m (success) {
    color: green;
  }
}
</style>