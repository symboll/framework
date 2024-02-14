<template>
  <table border cellpadding="0" cellspacing="0" rules="rows">
    <thead>
      <tr>
        <th v-for="item in columns" :key="item.title">
          <slot name="header" v-if="item.custom" :column="item"></slot>
          <span v-else>{{ item.title }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in dataList" :key="item.id">
        <td v-for="current in columns" :key="current.key">
          <slot :name="current.key" v-if="current.dataUseSlot" :props="item[current.key]"></slot>
          <span v-else>{{ item[current.key] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup generic="T extends TableColumn, K extends TableData" lang='ts'>
  import { TableColumn, TableData } from '@/interface/table'

  withDefaults(
    defineProps<{
      columns: T[],
      dataList: K[]
    }>(), 
    {  dataList: () => []}
  )

  // defineSlots<{
  //   header(props: { column: T }):void,
  //   [slotName: keyof K]: (props: any) => void
  // }>()
</script>