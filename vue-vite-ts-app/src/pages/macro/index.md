```typescript
// <script setup lang='ts' generic="T">
// import type { PropType } from 'vue'
// 使用普通的方式接受

// 普通js写法
// const props = defineProps({
//   names: {
//     type: Array<String>,
//     required: true
//   }
// })

// const props = defineProps({
//   names: {
//     type: Array as PropType<string[]>,
//     required: true
//   }
// })

// ts写法
// const props = defineProps<{
//   names: string[]
// }>()


// Vue3.3 对 defineProps 的改进:  新增泛型的支持
  const props = defineProps<{
    names: T[]
  }>()
// </script> 
```

```typescript
// import { ref, reactive } from 'vue'

// 普通写法
// const emit = defineEmits(['send'])
// const send = () => {
//   emit('send', 'first', 'second')
// }

// ts写法
// const emit = defineEmits<{
//   (event: string, ...args: any[]): void
// }>()

// Vue 3.3改进 
const emit = defineEmits<{
  'send': [...args: any[]]
}>()

const send = () => {
  emit('send', 'zhangsan', 'lisi')
}
```

```typescript
// Vue3.3 内置了defineOptions 不需要再去下载插件
// 里面的api 与optionsApi 一样
defineOptions({
  name: 'zhangsan'
})
```

```typescript
// <script setup generic="T" lang='ts'>
defineProps<{
  list: T[]
}>()

// 不允许有参数
// 只有声明，没有实现
defineSlots<{
  default (props: { item: T }):void
}>()
// </script>
```