// v-show 生效
// ref template 自动解包， tsx 不会 
// v-if 不生效 使用三元表达式
// v-for 不生效 使用map代替
// v-bind 使用{} 代替
// props emit

interface Props {
  name?: string
}

import { defineComponent, ref } from 'vue'
import './style.scss'


const slotComp = (_: any, { slots }: any) => {
  return (
    <div class='card'>
      <header class='header'>{ slots.header?  slots.header() : 'default: header' }</header>
      <main class='main'>{ slots.default?  slots.default() : 'default: main' }</main>
      <footer class='footer'>{ slots.footer?  slots.footer() : 'default: footer' }</footer>
    </div>
  )
}

export default defineComponent({
  props: {
    name: String
  },
  emits: ['on-click'],
  components: {
    slotComp
  },
  

  setup (props: Props, { emit }) {
    const flag = true
    const flag2 = ref(false)
    const names = ['zhangsan', 'lisi', 'wangwu']
    const hander = (name: string) =>  {
      console.log(name)
      emit('on-click', name)
    }

    const slot = {
      default: () => (<div>我是插槽</div>),
      header: () => (<div>我是header插槽</div>)
    }

    const val = ref('')
    return () => (
      <>
        <div v-show={flag} >hello Symboll</div>
        { flag2.value? <div>hello</div>: null }

        <div class="list">
          { 
            names.map(name => <div 
              key={name} 
              class="item" 
              onClick={() => hander(name)}
              >{name}</div>)  
          }
        </div>

        <div>name: { props?.name }</div>

        <slot-comp v-slots={ slot }></slot-comp>

        <input v-model={val.value} type="text" class='input'/>
        <div>{val.value}</div>
      </>
    )
  }
})