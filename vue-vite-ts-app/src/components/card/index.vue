<template>
  <div class="card">
    <header class="header">
      <slot name="header"></slot>
    </header>
    
    <main class="main">
      <slot></slot>
    </main>

    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 120px;
  border-radius: 4px;
  border: 1px solid #9aa;
}
.header {
  height: 20px;
  padding: 4px;
  background-color: rgba(0, 255, 0, .1);
}

.main {
  flex: 1;
  padding: 4px;
  background-color: rgba(255, 0, 0, .1);
}

.footer {
  height: 20px;
  padding: 4px;
  background-color: rgba(0, 0, 255, .1)
}
</style>