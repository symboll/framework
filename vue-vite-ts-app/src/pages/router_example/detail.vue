<template>
  <div>
    <button @click="back">Back</button>

    <table cellspacing="0" class="table">
      <tbody>
        <tr>
          <th>id：</th>
          <!-- <th>{{ route.query.id }}</th> -->
          <th v-if="detail">{{ detail.id }}</th>
        </tr>
        <tr>
          <th>商品：</th>
          <!-- <th>{{ route.query.name }}</th> -->
          <th  v-if="detail">{{ detail.name }}</th>
        </tr>
        <tr>
          <th>价格：</th>
          <!-- <th>${{ route.query.price }} </th> -->
          <th v-if="detail">${{ detail.price }} </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router'
import { mockData } from './mock'
const route = useRoute()
const router = useRouter()

const detail = mockData.find(data => data.id === route.params.id)
const back = () => {
  router.back()
}
</script>
<style scoped lang="scss">
.table {
  margin-top: 12px;
  th {
    text-align: left;
  }
}
</style>