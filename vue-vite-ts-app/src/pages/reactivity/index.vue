<template>
  <div class="title">非响应式</div>
  <div>{{ un }}</div>
  <button @click="change">change</button>
  <hr/>

  <div class="title">ref:</div>
  <div>{{ male }}</div>
  <button @click="change2">change</button>
  <hr/>

  <div class="title">isRef:</div>
  <button @click="judgeIsRef">判断是否是Ref</button>
  <hr/>

  <div class="title">shallowRef:</div>
  <div class="desc">
    <li>ref: 深层次</li>
    <li>shallowRef: 浅层次的响应式, 只到.value</li>
    <li>shallowRef 不能与ref 在一个函数中一起使用，shallowRef会被ref影响</li>
  </div>
  <div>{{ female }}</div>
  <button @click="change3">change</button>
  <hr/>

  <div class="title">triggerRef:</div>
  <hr/>

  <div class="title">customRef:</div>
  <div>{{customMale}}</div>
  <button @click="change4">change</button>
  <hr/>

  <div class="title">Example</div>
  <div ref="dom">InnerHtml</div>
  <hr/>

  <div class="title">reactive:</div>
  <div class="desc">
    <li>ref 支持所有的类型，  reactive 支持引用类型</li>
    <li>ref 取值赋值都需要加.value   reactive 不需要加.value</li>
    <li>reactive 不能直接复制。因为使用了proxy。 会破坏响应式对象</li>
  </div>
  <form @submit.prevent="submit">
    <label for="name">name: </label>
    <input id="name" type="text"  v-model="form.name"><br/>
    <label for="age">age: </label>
    <input id="age" type="number"  v-model="form.age"><br/>
    <button type="submit">submit</button>
  </form>

  <ul>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ul>
  <button @click="add">add item</button>
  <hr/>

  <div class="title">shallowReactive: </div>
  <div>{{ deep }}</div>
  <button @click="change5">change</button>
  <hr/>

  <div class="title">toRef:</div>
  <div class="desc">toRef 只能修改响应式数据的值， 非响应式视图无变化</div>
  <div>非响应式{{ unname }}</div>
  <div>响应式{{ formName }}</div>
  <button @click="change6">change</button>
  <hr/>

  <div class="title">toRefs:</div>
  <div class="desc">
    <to-refs-comp v-high-light></to-refs-comp>
  </div>
  <hr/>

  <div class="title">toRaw:</div>
  <div class="desc">
    <to-raw-comp v-high-light></to-raw-comp>
  </div>
  <button @click="change7">change</button>
</template>
<script setup lang='ts'>
import { 
  ref, 
  shallowRef, 
  isRef, 
  triggerRef, 
  customRef, 
  onMounted, 
  reactive,
  shallowReactive,
  toRef,
  // toRefs,
  toRaw
} from 'vue'
import type { Ref } from 'vue'

import toRefsComp from './toRefs.md'
import toRawComp from './toRaw.md'

type Male = {
  name: string
}

const un = { name: '张三' }
const change = () => {
  un.name = '李四'
  console.log(un)
}

// const male = ref<Male>({ name: '张三' })
const male: Ref<Male> = ref({ name: '张三' })
const change2 = () => {
  male.value.name = '王五'
}

const judgeIsRef = () => {
  console.log('isRef(un): ', isRef(un))
  console.log('isRef(male): ', isRef(male))
}

const female = shallowRef({
  name: '张三'
})
const change3 = () => {
  female.value.name = '赵六'  // view don't change
  triggerRef(female)         // view change
  // console.log('female: ', female)

  // female.value = { name: '赵六' }    // view change

  // female.value.name = '赵六'   
  // male.value.name = '王五'    // view change
}

/**
 * 
 *  防抖
 **/
const MyRef = <T>(value:T) => {
  let timer: any
  return customRef((track, trigger) => {
    return {
      get () {
        track() 
        return value
      },
      set (val) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          console.log('触发更新')
          value = val
          trigger()
        }, 800);
      }
    }
  })
}
const customMale = MyRef<string>('张三')
const change4 = () => {
  customMale.value = '李四'
}

const dom = ref<HTMLDivElement | null>(null)
onMounted(() => {
  console.log(dom.value?.innerHTML)
})

const form = reactive({
  name: '张三',
  age: 18
})

const submit = () => {
  console.log(form)
}

const list = reactive<string[]>(['张三'])
const getTestData = (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['李四','王五'])
    }, 1000);
  })
}
const add = async () => {
  try {
    const res = await getTestData()
    list.push(...res)
  }catch (err) {
    console.log(err)
  }
}

const deep = shallowReactive({
  foo: {
    bar: {
      num: 2
    }
  }
})

const change5 = () => {
  deep.foo.bar.num = 4
  console.log(deep)
}


const unname = toRef(un, 'name')
const formName = toRef(form, 'name')
const change6 =() => {
  unname.value = 'delaiwen'
  // formName.value = 'delaikesi'
}

const change7 = () => {
  console.log(form, toRaw(form))
}
</script>
<style scoped lang="scss">
</style>