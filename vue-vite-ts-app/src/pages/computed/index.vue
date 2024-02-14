<template>
    <div class="title">Computed</div>
    <label for="firstName">姓</label>
    <input id="firstName" v-model="firstName"/>
    <br/>

    <label for="lastName">名</label>
    <input id="lastName" v-model="lastName"/>
    <br/>

    <label for="">全名</label>
    <div>{{ fullName }}</div>

    <button @click="change">change fullName</button>


    <div class="title">Example</div>
    <table border cellpadding="0" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th v-for="item in header" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.name">
          <td align="center">{{ item.name }}</td>
          <td align="center">
            <button @click="operate(item, Operate.decrease)">-</button> 
            {{ item.num }} 
            <button @click="operate(item, Operate.increase)">+</button>
          </td>
          <td align="center">{{ item.price }}</td>
          <!-- <td align="center">{{ price(item) }}</td> -->
          <td align="center">{{ item.price * item.num }}</td>
        </tr>
      </tbody>
      <tfoot>
        <td colspan="3" align="center">总价：</td>
        <td align="center">{{ total }}</td>
      </tfoot>
    </table>
</template>
<script setup lang='ts'>
  import { ref, computed, reactive } from 'vue'
  const firstName = ref('张')
  const lastName = ref('三')

  const fullName = computed<string>({
    set (val) {
      console.log(val)
      const [first, last] = val.split(' ')
      firstName.value = first
      lastName.value = last
    },
    get () {
      return firstName.value  + ' ' + lastName.value
    }
  })

  const change = () => {
    fullName.value = '王 五'
  }
  // const fullName = computed(() => {
  //   return firstName.value + lastName.value
  // })

  const header = ['名称', '数量', '单价', '价格']
  // 商品
  interface Commodity {
    name: string,
    price: number,
    num: number,
  }
  enum Operate {
    increase = 'INCREASE',
    decrease = 'DECREASE'
  }

  const data = reactive<Commodity[]>([
    {
      name: '衣服',
      price: 100,
      num: 10
    },
    {
      name: '裤子',
      price: 120,
      num: 20
    },
    {
      name: '鞋子',
      price: 260,
      num: 30
    }
  ])

  const operate = (item: Commodity, type: Operate) => {
    switch (type) {
      case Operate.decrease:
        if(item.num > 0) {
          item.num --
        }
        break;
      case Operate.increase:
        if(item.num < 99) {
          item.num ++
        }
        break;
      default:
    }
  }

  // const price = data.map(item => computed(() => {
  //   console.log('item',item)
  //   return item.num * item.price
  // }))
  
  const total = computed(() => {
    return data.reduce((prev, cur) => prev + cur.num * cur.price, 0)
  })
</script>
<style scoped>

</style>