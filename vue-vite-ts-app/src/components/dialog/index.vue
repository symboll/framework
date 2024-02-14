<template>
  <Teleport to="body">
    <div v-if="isShowMask && modelValue" class="mask"></div>
    <div v-if="modelValue" class="dialog" v-move>
      <header class="header">
        <div class="dialog-title">{{ title }}</div>
        <div class="close" @click="close">×</div>
      </header>
      <main class="main">
        <slot></slot>
      </main>
      <footer v-if="isShowAction" class="footer">
        <slot name="action"></slot>
      </footer>
    </div>
  </Teleport>
</template>
<script setup lang='ts'>
  import { vMove } from '@/directive/move'

  withDefaults(defineProps<{
    modelValue: boolean,
    title: string,
    isShowMask?: boolean,
    isShowAction?: boolean
  }>(), {
    title: "",
    isShowMask: true,
    isShowAction: true
  })

  const emit = defineEmits<{
    (event: 'update:modelValue', visible: boolean):void
  }>()
  const close = () => {
    emit("update:modelValue", false)
  }
</script>
<style lang="scss" scoped>
.mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.1);
}

.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  width: 520px;
  height: 320px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 4px #dfdfdf;
  transform: translate(-50%, -50%);
  .header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #cfcfcf;
    .dialog-title {
      flex: 1;
    }
    .close {
      width: 16px;
      height: 16px;
      text-align: center;
      vertical-align: middle;
      line-height: 16px;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .main {
    flex: 1;
    padding: 10px 20px;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 32px;
    padding: 10px 20px;
  }
}

</style>