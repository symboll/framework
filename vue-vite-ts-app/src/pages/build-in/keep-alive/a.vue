<template>
  <p>Component A</p>
  <span>count: {{ count }}</span>
  <button @click="count++">+</button>
</template>

<script setup lang='ts'>
  import { ref, onMounted, onActivated} from 'vue'
  const count = ref(0)

  onMounted(() => console.log('A onMounted'))
  onActivated(() => console.log('A onActivated'))

  defineOptions({
    name: 'KLA'
  })
</script>