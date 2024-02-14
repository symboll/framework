<template>
  <div class="child">
    <div>modelValue: {{ modelValue }}</div>
    <button @click="toggle">toggle</button>
    <br/>
    <input @input="inputChange"/>
    <div>message: {{ message }}</div>
  </div>
</template>
<script setup lang='ts'>
import { debounce } from '@/util/debounce';

  const props =  withDefaults(defineProps<{
    modelValue: boolean,
    message: string,
    messageModifiers?: {
      debounce: boolean
    }
  }>(), {
    message: "",
    modelValue: true,
  })

  const emit = defineEmits(['update:modelValue', 'update:message'])

  const toggle = () => {
    emit("update:modelValue", !props.modelValue)
  }

  const inputChange = (event: Event)=> {
    const target = event.target as HTMLInputElement
    if (props.messageModifiers?.debounce) {
      const fn = debounce(() => messageUpdate(target), 600)
      fn()
    } else {
      messageUpdate(target)
    }
  }

  const messageUpdate = (target: HTMLInputElement) => {
    emit('update:message', target.value)
  }

</script>
<style scoped lang="scss">
.child {
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
}
</style>
