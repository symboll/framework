<template>
  <Teleport to="body">
    <div class="message-wrap">
      <div v-for="item in messages" :class="['message', item.type]">

        {{ item.message }}
        <span v-if="item.close" @click="hide(item.uuid)" class="close-icon">×</span>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang='ts'>
import { ref  } from 'vue';
import { v4 as uuidv4 } from 'uuid'
import { IMessage } from '@/interface/message';

const props = withDefaults(defineProps<{
  duration: number
}>(), {
  duration: 2000
})

const messages = ref<IMessage[]>([])
const closeMap = ref<any>({})

const success = (message: string) => show({ message, type: 'success' })
const warning = (message: string) => show({ message, type: 'warning' })
const error = (message: string) => show({ message, type: 'error' })
const info = (message: string) => show({ message, type: 'info' })

const show = (config: IMessage | string) => {
  const uuid = uuidv4()
  let params = {}
  if (typeof config === 'string') {
    params = {
      message: config,
      type: 'default',
      close: false,
      uuid
    }   
  } else {
    params = {...config, uuid}
  }
  messages.value.push(params as IMessage)

  closeMap.value[uuid] = setTimeout(() => {
    hide(uuid)
  }, (config as IMessage)?.duration || props.duration);
}

const hide = (uuid?: string) => {
  let id = uuid || messages.value[0]?.uuid
  if(!id){
    return
  }
  let index = messages.value.findIndex(x => x.uuid === id);
  messages.value.splice(index, 1)
  if(closeMap.value[id]) {
    clearTimeout(closeMap.value[id])
  }
}

defineExpose({
  show,
  hide,
  success,
  warning,
  error,
  info
})
</script>
<style lang="scss" scoped>
.message-wrap {
  position: absolute;
  right: 10%;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.message {
  display: flex;
  align-items: center;
  gap: 24px;

  min-width: 200px;
  max-width: 360px;
  line-height: 18px;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 12px;
  
  .close-icon {
    display: inline-block;
    align-self: flex-start;
    height: 18px;
    cursor: pointer;
  }
}

.success {
  background-color: #81C784;
  color: #fff;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}

.warning {
  background-color: #FFB74D;
  color: #fff;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}

.error {
  background-color: #E53935;
  color: #fff;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}

.info {
  background-color: #90A4AE;
  color: #fff;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}

.default {
  background-color: #fff;
  color: #606266;
  box-shadow: 0px 0px 6px 1px #90A4AE;
}
</style>