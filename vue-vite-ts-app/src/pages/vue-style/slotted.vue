<template>
  <div class="card">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 120px;
  border-radius: 4px;
  border: 1px solid #9aa;
}

.uneffect {
  color: #456789;
}

:slotted(.effect) {
  color: #456789;
}
</style>