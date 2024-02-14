<template>
  <div>
    <!-- 匿名插槽 / 具名插槽 / 作用域插槽 / 动态插槽 -->
    <div class="title">匿名插槽</div>
    <card>
      <div>hello I'm xxxx</div>
    </card>
    <div class="title">具名插槽</div>

    <card>
      <template #footer>
        <div>footer</div>
      </template>
      <div>hello I'm xxxx</div>
      <template v-slot:header>
        <div>header</div>
      </template>
    </card>

    <div class="title">作用域插槽</div>
    <table-comp :columns="columns" :data-list="data" class="table">
      <template v-slot:header="{ column }">
        <div class="table-header-custom-item">{{ column.title }}</div>
      </template>

      <template #age="{ props }">
        <div class="table-body-custom-col">{{ props }}</div>
      </template>
    </table-comp>

    <div class="title">动态插槽</div>
    <card>
      <template #[slotname]>
        <div>Im dynamic</div>
      </template>
    </card>

    <button @click="change">Change</button>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from "vue";

import Card from '@/components/card/index.vue'
import TableComp from '@/components/table/index.vue'

import { TableColumn, TableData } from "@/interface/table";

const columns = reactive<TableColumn[]>([
  {
    title: "Name",
    key: "name",
    custom: true,
  },
  {
    title: "Age",
    key: "age",
    dataUseSlot: true
  },
  {
    title: "Address",
    key: "address",
  },
]);
const data = reactive<TableData[]>([
  {
    id: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    id: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    id: 3,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
]);

const slotname = ref('default')

const change = () => {
  const list = ['default', 'header', 'footer']
  let index = list.findIndex(item => item === slotname.value)
  index = (index+1) % 3
  slotname.value = list[index]

  console.log(slotname)
}
</script>
<style scoped lang="scss">
.table-header-custom-item {
  background-color: sandybrown;
  color: #fff;
}
.table-body-custom-col {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6789ab;
  color: #fff;
}
</style>
