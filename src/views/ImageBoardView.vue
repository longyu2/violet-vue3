<script setup lang="ts">
import imghubjson from '@/assets/images/imghub/imghub.json'

let imgurl_head = 'https://jp.violet-evergarden.net/imghub'

let imgUrlList:any = []

imghubjson.forEach((element) => {
  imgUrlList.push(`${imgurl_head}/${element}`)
})
</script>
<template>
  <div class="imgboard-contanier">
    <div class="imgboard-box">
      <img class="el-img  animate__animated animate__zoomIn" v-for="(item, index) in imgUrlList" :key="index" :src="item" />
    </div>
  </div>
</template>

<style lang="scss">
.imgboard-contanier {
  margin-top: 40px;
}

.el-img {
  border-radius: 30px;
  border: 2px solid darkgray;
}

@media (min-width: 1200px) {
  .imgboard-contanier {
    width: 100vw;
    .imgboard-box {
      margin: auto;
      width: 80vw;
      height: 225vw;
      display: flex;
      flex-flow: column wrap;
      padding: 0%;
    }
  }
  .el-img {
    margin: 10px;
    width: calc(24%);
  }
}

@media screen and (min-width: 800px) and (max-width: 1200px) {
  .imgboard-contanier {
    width: 100vw;
    .imgboard-box {
      width: 70vw;
      margin: auto;
      height: 348vw;
      display: flex;
      flex-flow: column wrap;
      padding: 0%;
    }
  }
  .el-img {
    margin: 10px;
    width: calc(31%);
  }
}

@media (max-width: 800px) {
  .imgboard-box {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .el-img {
      margin-top: 10px;
      width: calc(90%);
    }
  }
}
</style>
