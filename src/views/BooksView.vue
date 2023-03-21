<script setup lang="ts">
let items = {
  //   item1: [
  //     { name: '小说上册epub', url: shang_epub },
  //     { name: '小说下册epub', url: xia_epub},
  //     { name: '小说外传epub', url: wai_epub},
  //     { name: '小说终章ever after(资源暂无)', url: '/#/everafter' }
  //   ],
  item2: [
    { name: '「夏洛特与森林王国」PDF', url: 'pdfs/夏洛特与森林王国.pdf' },
    { name: '「艾米·巴特利特与春日的阳光」PDF', url: 'pdfs/「艾米·巴特利特与春日的阳光」.pdf' },

    { name: '利昂·斯蒂法诺蒂斯与启明星', url: 'https://www.bilibili.com/read/cv5313570' },
    { name: '安·玛格诺利亚与她的十九岁生日', url: 'https://www.bilibili.com/read/cv5203306' },
    { name: '基尔伯特·布甘比利亚与虚无缥缈的梦', url: 'https://www.bilibili.com/read/cv11728499' },
    {
      name: '伊莎贝拉•约克与花之雨',
      url: 'https://weibo.com/ttarticle/p/show?id=2309404427762210308223&sudaref=www.google.com'
    },

    { name: '某一天的日记-晓佳奈', url: 'https://www.bilibili.com/read/cv15065978' },
    { name: '王妃与自动手记人偶', url: 'https://www.bilibili.com/read/cv9279693' },
    { name: '星降之夜与寂寞的两人', url: 'https://tieba.baidu.com/p/7863892320' }
  ],
  item3: [
    {
      name: '紫罗兰永恒花园公式设定全集',
      url: '//cdn.ltyis.com/other/紫罗兰永恒花园 公式设定全集.zip'
    }
  ]
}
</script>

<template>
  <div class="books-box">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>短篇小说合集 </span>
        </div>
      </template>
      <div v-for="(item, index) in items.item2" :key="index" class="text item">
        <a :href="item.url"> {{ item.name }}</a>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>其他</span>
        </div>
      </template>
      <div v-for="(item, index) in items.item3" :key="index" class="text item">
        <a :href="item.url" download=""> {{ item.name }}</a>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
@media screen and (min-width: 600px) {
  .books-box {
    min-height: 85vh;
    display: flex;
    justify-content: flex-start;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    margin-left: 70px;
    width: 480px;
    height: auto;
  }

  a {
    color: black;
    text-decoration: none;
  }
}
@media screen and (max-width: 600px) {
  .books-box {
    flex-direction: column;
    min-height: 85vh;
    display: flex;
    justify-content: flex-start;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    margin-top: 70px;
    width: 480px;
    height: auto;
  }

  a {
    color: black;
    text-decoration: none;
  }
}
</style>
