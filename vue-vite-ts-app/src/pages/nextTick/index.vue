<template>
  <div class="title">nextTick</div>

  <div class="box" ref="box">
    <div class="chat-item" v-for="item in chatList">
      <div>{{ item.name }}:</div>
      <div>{{ item.message }}</div>
    </div>
  </div>

  <div class="workbench">
    <textarea v-model="message"></textarea>
    <button @click="send">send</button>
  </div>
</template>
<script setup lang='ts'>
  import { ref, reactive, nextTick } from 'vue'
  const box = ref<HTMLDivElement>()
  const message = ref('')
  const chatList = reactive([
    { name: 'Tom', message: 'hello' }
  ])

  const  send = async () => {
    chatList.push({
      name: 'zhangsan',
      message: message.value + new Date().getTime()
    })
    // nextTick(() => {
    //   box.value!.scrollTop = 99999
    // })
    await nextTick()
    box.value!.scrollTop = 99999
  }
</script>
<style scoped lang="scss">
.box {
  height: 200px;
  border: 1px solid #ddd;
  overflow-y: auto;
  .chat-item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 6px 12px;
    margin-bottom: 1px;
    box-sizing: border-box;
    background-color: #efefef;
  }
}

.workbench {
  margin-top: 12px;
  textarea {
    width: 100%;
    height: 40px;
  }

}
</style>