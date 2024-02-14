```js
  // 父向子传参
  
  // js
  const props = defineProps({
    name: {
      type: String,
      default: '默认值'
    }
  })

  // ts
  const props = defineProps<{
    name: string,
    list: number[]
  }>()
  // 定义默认值 widthDefaults
  const props = withDefaults(defineProps<{
    name: string,
    list: number[]
  }>(), {
    list: () => []
  })
```
```ts
  // 子向父传参

  // js
  const emit = defineEmits(['submit'])
  const submit = () => {
    emit('submit', 1, 'name', { key: 'value' })
  }

  // ts
  const emit = defineEmits<{
    (e: 'submit', num: number, num2: string, val: any): void
  }>()
  const submit = () => {
    emit('submit', 1, 'name', { key: 'value' })
  }
```
```ts
  // 子组件向外暴露属性/方法

  // 子组件
  defineExpose({
    age,
    ageChange
  })

  // 父组件 
  // ref="child"
  const child = ref<InstanceType<typeof Child>>()
  const getChildProps = () => {
    console.log(child.value?.age)
  }
```