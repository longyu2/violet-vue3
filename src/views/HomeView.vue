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
    <!-- <el-image class="main-img" :src="img_910"> </el-image> -->

    <video id="v1" class="bgvideo" autoplay loop muted>
      <source src="@/assets/violetbg.mp4" type="video/mp4" />
    </video>

    <div class="main-content-box">

      <h3 class="animate__animated animate__fadeInDown">花纵有凋零之日</h3>
      <h3 class="animate__animated animate__fadeInDown animate__delay-1s">意却无消散之时</h3>
      <h3 class="animate__animated animate__fadeInDown animate__delay-2s">美与爱亘古不变</h3>

      <h3 class="animate__animated animate__fadeInDown animate__delay-3s">紫罗兰于世长存</h3>

      <br>
      <h3 class="animate__animated animate__fadeInDown animate__delay-4s" >hi!欢迎来到这里！</h3>
      <p class="animate__animated animate__fadeInDown animate__delay-4s">这是一个紫罗兰永恒花园的爱好者所建立的网站。</p>
      <p class="animate__animated animate__fadeInDown animate__delay-4s">旨在为一切喜爱紫罗兰的人们提供一个休憩的场所。</p>

      <p class="animate__animated animate__fadeInDown animate__delay-4s">在这里，你可以:</p>

      <p class="animate__animated animate__fadeInDown animate__delay-4s">欣赏美丽的图片</p>
      <p class="animate__animated animate__fadeInDown animate__delay-4s">游玩小游戏</p>

      <p class="animate__animated animate__fadeInDown animate__delay-4s">阅读原著文章</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0%;
}

@media screen and (min-width: 600px) {
  .main-box {
    position: relative;
    z-index: 1;
    padding: 0%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .bg {
      z-index: 1;
    }
    .main-img {
      margin: auto;
      height: 100vh;
    }
    .main-content-box {
      position: absolute;
      top: 20px;
      left: 700px;
      z-index: 2;
      width: 70vw;
      margin-top: 10vh;
      height: 90vh;
      color: aliceblue;
    }
  }
}

@media screen and (max-width: 600px) {
  .bgvideo {
    width: 100vw;
  }

  .main-box {
    background-color: black;
    position: relative;
    z-index: 1;
    padding: 0%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .bg {
      z-index: 1;
    }
    .main-img {
      margin: auto;
      height: 100vh;
    }
    .main-content-box {
      position: absolute;
      top: 0px;
      left: 20px;
      z-index: 2;
      width: 70vw;
      margin-top: 10vh;
      height: 90vh;
      color: aliceblue;
    }
  }
}
</style>
