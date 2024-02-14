```html
<!-- 父组件 -->
<child v-model="visible" v-model:message.debounce="message"></child>
```

```typescript
const props =  withDefaults(defineProps<{
  modelValue: boolean,
  message: string,
  messageModifiers?: {
    debounce: boolean    // 自定义修饰符
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
```

