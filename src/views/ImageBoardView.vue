<script setup lang="ts">
let imgUrlList: String[] = []
for (let i = 0; i < 100; i++) {
  imgUrlList.push(`//img.violet-evergarden.net/imgHub/${i}.jpg`)
}
</script>
<template>
  <div class="imgboard-box">
    <el-image class="el-img" v-for="(item, index) in imgUrlList" :key="index" :src="item" />
  </div>
</template>

<style>
.el-img {
  border-radius: 30px;
  border: 2px solid goldenrod;
}

@media (min-width: 1200px) {
  .el-img {
    margin: 10px;
    width: calc(31%);
  }

  .imgboard-box {
    height: 1060vw;
    display: flex;
    flex-flow: column wrap;
    padding: 0%;
  }
}

@media (max-width: 1500px) {
  .el-img {
    margin: 1vw;
    width: calc(45%);
  }

  .imgboard-box {
    height: 31130px;
  }
}

@media (max-width: 1200px) {
  .el-img {
    margin: 3vw;
    width: calc(94%);
  }

  .imgboard-box {
    height: 49250px;
  }
}
</style>
