<template>
  <table cellspacing="0" border="1" class="table">
    <thead>
      <tr>
        <th>商品</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in list" :key="row.id">
        <th>{{ row.name }}</th>
        <th>{{ row.price }}</th>
        <th>
          <button @click="getDetail(row)">详情</button>
        </th>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { mockData } from './mock'
const router = useRouter()
const list = ref(mockData)

const getDetail = (row: any) => {
  // router.push({
  //   path: 'detail',
  //   query: row
  // })

  /**
   * params 传参被 官方删除
   * 需要配合 动态路由使用
   */
  // router.push({
  //   name: 'detail',
  //   params: row
  // })

  router.push({
    name: 'detail',
    params: {
      id: row.id
    }
  })
}

</script>
<style scoped lang="scss">
.table {
  width: 600px;
}
</style>