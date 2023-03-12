<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          default-active="/"
          class="el-menu-header"
          mode="horizontal"
          :ellipsis="false"
          :router="true"
          text-color="#fff"
          active-text-color="gold"
          background-color="gray"
        >
          <el-menu-item index="0">LOGO</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="/">主页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>选项</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="/imgboard">图片墙</el-menu-item>
          <el-menu-item index="/letter">给少校的信</el-menu-item>
          <el-menu-item index="/books">小说</el-menu-item>
          <el-menu-item index="8">关于我们</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <RouterView class="main-content-box"></RouterView>
        <div class="main-footer-box">©2023 龙驭</div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  margin-right: 0%;
  height: 100vh;
  .el-menu-header {
    z-index: 2;
    width: 98vw;
    height: 40px;
    position: fixed;
    top: 0%;
    // background-color: rgba($color: #000000, $alpha: 0);
    border: 0;

    .el-menu-item {
      opacity: 100%;
    }
  }

  .main-content-box {
    // min-height: 85vh;
  }
  .main-footer-box {
    width: 100%;
    bottom: 0%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>
