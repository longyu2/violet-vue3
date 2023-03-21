<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import MenuHeader from '@/components/MenuHeader.vue'
</script>

<template>
  <div @touchmove.prevent>
    <el-container class="common-layout">
      <el-header class="el-header">
        <MenuHeader></MenuHeader>
      </el-header>
      <el-main class="el-main">
        <RouterView class="main-content-box"></RouterView>
        <FooterComponent></FooterComponent>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
* {
  padding: 0%;
}
.el-header {
  height: 40px;
  background-color: #000000;
}
.el-main {
  background-color: #000000;
}
@media screen and (min-width: 600px) {
}

@media screen and (max-width: 600px) {
  .common-layout {
    height: auto;
    .el-main {
      min-height: 100vh;
    }
  }
}
</style>
