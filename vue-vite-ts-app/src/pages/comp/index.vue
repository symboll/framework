<template>
  <div>
    <!-- 全局组件 / 局部组件 / 递归组件 / 异步组件 -->

    <div class="title">局部组件</div>
    <card title="zhangsan"></card>

    <div class="title">全局组件</div>
    <div class="btn-group">
      <button @click="show('success')">success</button>
      <button @click="show('warning')">warning</button>
      <button @click="show('info')">info</button>
      <button @click="show('error')">error</button>
      <button @click="show('default')">default</button>
      <button @click="hide">hide</button>
    </div>

    <div class="title">递归组件</div>
    <tree :data="data"></tree>

    <div class="title">动态组件</div>
    <div class="tabs">
      <div 
        v-for="item in complist" 
        @click="currentChange(item.comp)"
        :class="{
          active: item.comp === current
        }"
        class="tab-item">
        {{ item.name }}
      </div>
    </div>
    <component :is="current"></component>

    <div class="title">异步组件</div>
    <Suspense>
      <async-comp></async-comp>
      <template #fallback>
        <skeleton></skeleton>
      </template>
    </Suspense>
  </div>
</template>
<script setup lang='ts'>
  import { reactive, shallowRef, defineAsyncComponent, getCurrentInstance } from 'vue'

  import Card from '@/components/card/plain.vue'
  import Tree from '@/components/tree/index.vue'
  import { AComp, BComp, CComp } from '@/components/dynamic'
  import skeleton from './skeleton.vue'
  
  import { TreeItem } from '@/interface/tree' 
  import { messageType } from '@/interface/message'

  const app = getCurrentInstance()
  const AsyncComp = defineAsyncComponent(() => import('./async.vue'))


  const show = (type: messageType) => {
    app!.proxy?.$message.show({ message: '提示信息', type }) 
    // app!.proxy?.$message.show('信息') // ‘default’
    // app!.proxy?.$message.success('信息') 
  }
  const hide = () => {
    app!.proxy?.$message.hide()
  }

  const data = reactive<TreeItem[]>([
    {
      name: "1",
      checked: false,
      children: [
        {
          name: "1-1",
          checked: true,
        }
      ]
    },
    {
      name: "2",
      checked: false
    },
    {
      name: "3",
      checked: false,
      children: [
        {
          name: "3-1",
          checked: false,
          children: [
            {
              name: "3-1-1",
              checked: false,
            }
          ]
        },
        {
          name: "3-2",
          checked: false,
        }
      ]
    }
  ])

  const current = shallowRef(AComp)
  const currentChange = (comp: any) => {
    current.value = comp
  }

  const complist = reactive([
    {
      name: 'A',
      comp: shallowRef(AComp),
    },
    {
      name: "B",
      comp: shallowRef(BComp)
    },
    {
      name: "C",
      comp: shallowRef(CComp)
    }
  ])


</script>
<style scoped lang="scss">
.btn-group {
  display: flex;
  gap: 8px;
  padding: 4px ;
  background-color: rgba(255, 0, 0, .1);
}
.tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 4px;
  .tab-item {
    padding: 4px 16px;
    border-radius: 2px;
    border:1px solid #9ab;
    cursor: pointer;
    &.active {
      border-color: #456;
      background: #9ab;
      color: #fff;
    }
  }
}
</style>