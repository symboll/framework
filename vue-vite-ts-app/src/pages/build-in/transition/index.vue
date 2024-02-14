<template>
  <div class="content">
    <div>
      <button @click="flag1 = !flag1">switch</button>
      <transition name="fade">
        <div v-if="flag1" class="box1"></div>    
      </transition>
    </div>
    <div>
      <button  @click="flag2 = !flag2">swicth</button>
      <!-- appear -->
      <transition 
        appear-active-class="animate__animated animate__bounceOut"
        leave-active-class="animate__animated animate__fadeOut"
        enter-active-class="animate__animated animate__fadeIn"
      >
        <div v-if="flag2" class="box2"></div>    
      </transition>
    </div>
    <div>
      <button @click="flag3 = !flag3">swicth</button>
      <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div v-if="flag3" class="box3"></div>    
      </transition>
    </div>
  </div>
</template>
<script setup lang='ts'>
  import { ref } from 'vue'
  import gsap from 'gsap'
  import 'animate.css'

  const flag1 = ref<boolean>(true)
  const flag2 = ref<boolean>(true)
  const flag3 = ref<boolean>(true)

  const beforeEnter = (el: Element) => {
    gsap.set(el, {
      width: 0,
      height: 0
    })
  }
  const enter = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
      width: 100,
      height: 100,
      onComplete: done
    })
  }
  const leave = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
      width: 0,
      height: 0,
      onComplete: done
    })
  }
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  height: 120px;
  > div {
    width: 100px;
    margin-right: 10px;
  }
}
.box {
  width: 100px;
  height: 100px;
}
.box1 {
  @extend .box;
  background-color: aqua;
}
.box2 {
  @extend .box;
  background-color: salmon;
}
.box3 {
  @extend .box;
  background-color: bisque;
}

.fade-enter-from{
  width: 0px;
  height: 0px;
}
.fade-enter-active{
  transition: all .3s ease-in;
}
.fade-enter-to{
  width: 100px;
  height: 100px;
}

.fade-leave-from{
  transform: scale(1);
}
.fade-leave-active{
  transition: transform 1s ease-in;
  transform-origin: right bottom;
}
.fade-leave-to{
  transform: scale(0);
}
</style>