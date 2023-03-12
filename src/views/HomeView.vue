<script setup lang="ts">
import img_910 from '@/assets/images/910.jpg'
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="main-box">
    <el-image class="main-img" :src="img_910"> </el-image>

    <div class="main-content-box">
      <h2>hi!欢迎来到这里！</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0%;
}
.main-box {
  position: relative;
  z-index: 1;
  padding: 0%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main-img {
    margin: auto;
    height: 100vh;
  }
  .main-content-box {
    width: 70vw;
    margin-top: 10vh;
    height: 90vh;
    background-color: antiquewhite;
  }
}
</style>
