<script setup lang="ts">
import { ref } from 'vue'
import FooterComponent from '@/components/FooterComponent.vue'
import imghubjson from '@/assets/lunbo_img.json'

let imgurl_head = 'https://img.violet-evergarden.net/lunbo_img'

let imgUrlList: any = []

imghubjson.forEach((element) => {
  imgUrlList.push(`${imgurl_head}/${element}`)
})
</script>

<template>
  <div class="main-box">
    <!-- <video id="v1" class="bgvideo" autoplay loop muted>
      <source src="@/assets/violetbg.mp4" type="video/mp4" />
    </video> -->

    <video id="v1" class="bgvideo" autoplay loop muted>
      <source src="@/assets/薇尔莉特跳水.mp4" type="video/mp4" />
    </video>

    <div class="main-content">
      <div class="carousel">
        <el-carousel :interval="5000" height="50vh" arrow="always">
          <el-carousel-item v-for="item in imgUrlList" :key="item">
            <el-image class="carousel-img" :src="item"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="text">
        <div class="text-left">
          <h3 class="animate__animated animate__fadeInDown">花纵有凋零之日</h3>
          <h3 class="animate__animated animate__fadeInDown animate__delay-1s">意却无消散之时</h3>
          <h3 class="animate__animated animate__fadeInDown animate__delay-2s">美与爱亘古不变</h3>

          <h3 class="animate__animated animate__fadeInDown animate__delay-3s">紫罗兰于世长存</h3>

          <br />
          <h3 class="animate__animated animate__fadeInDown animate__delay-4s">hi!欢迎来到这里！</h3>
          <p class="animate__animated animate__fadeInDown animate__delay-4s">
            这是一个紫罗兰永恒花园的爱好者所建立的网站。
          </p>
          <p class="animate__animated animate__fadeInDown animate__delay-4s">
            希望能为喜欢紫罗兰的人们提供一个休憩的场所。
          </p>

          <p class="animate__animated animate__fadeInDown animate__delay-4s">这个网站的主要功能有:</p>
          <p class="animate__animated animate__fadeInDown animate__delay-4s">欣赏美丽的薇尔莉特图片</p>
          <p class="animate__animated animate__fadeInDown animate__delay-4s">游玩小游戏</p>
          <p class="animate__animated animate__fadeInDown animate__delay-4s">查看原著资源</p>
          <br/>
          <p>薇尔莉特给我们带来了许多美好</p>
          <p>所以，我也想让她的美更多地流传</p>
          <p>这就是这个网站诞生的初衷了</p>
        
        </div>

        <div class="text-right">
          <img
            src="https://img.moegirl.org.cn/common/thumb/2/2a/Violet_Evergarden_Ever_After.png/280px-Violet_Evergarden_Ever_After.png"
            width="100%"
            alt=""
          />
          <img
            width="100%"
            src="https://img.moegirl.org.cn/common/thumb/a/ad/Violet_Evergarden_Movie_KV.jpg/800px-Violet_Evergarden_Movie_KV.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="text2">
        <!-- <p></p>
        <p>sds</p>
        <p>sds</p>
        <p>sds</p>
        <p>sds</p>
        <p>sds</p>
        <p>sds</p>
        <p>sds</p>
        <p>sds</p> -->
      </div>

      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0%;
}

@media screen and (min-width: 600px) {
  .main-box {
    // background-image: url(https://img.violet-evergarden.net/lunbo_img/1013.jpg);
    // background-attachment: fixed;
    top: 0%;
    z-index: 1;
    padding: 0%;
    width: 100%;
    height: 400vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .bgvideo {
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 1;
      object-fit: cover;
    }

    .main-img {
      margin: auto;
      height: 100vh;
    }
    .main-content {
      position: absolute;
      top: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 2;
      width: 100vw;
      height: 90vh;
      color: aliceblue;

      .carousel {
        opacity: 90%;
        width: 70vw;
        height: 100vh;
        .carousel-img {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .text {
        margin-top: 100px;
        width: 70vw;
        height: 1000px;
        display: flex;
        justify-content: space-between;
        .text-left {
          color: #000;
          padding: 5%;
          width: 63%;
          border-radius: 10px;
          background-color: rgba($color: #fff, $alpha: 0.55);
        }
        .text-right {
          height: 80%;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          width: 20%;
          background-color: rgba($color: #000000, $alpha: 0.7);
        }
      }
      .text2 {
        color: #000;
        margin-top: 100px;
        width: 70vw;
        height: 200px;
        background-color: rgba($color: #fff, $alpha: 0.55);
      }
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
