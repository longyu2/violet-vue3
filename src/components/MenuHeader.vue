<template>
  <el-menu
    default-active="/"
    class="el-menu-header"
    mode="horizontal"
    :ellipsis="false"
    :router="true"
    text-color="#fff"
    active-text-color="violet"
    background-color="rgba(0,0,0,0.1)"
  >
    <el-menu-item index="/">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/">主页</el-menu-item>

    <el-menu-item index="/imgboard">图片墙</el-menu-item>
    <el-menu-item index="/letter">给少校的信</el-menu-item>
    <el-menu-item index="/books">原著</el-menu-item>
    <el-menu-item index=""><a href="EatViolet/index.html">小游戏</a></el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.flex-grow {
  flex-grow: 1;
}
a {
  text-decoration: none;
}

@media screen and (max-width: 600px) {
  .el-menu-header {
    padding-right: 20px;
    z-index: 2;
    width: 100vw;
    height: 40px;
    position: fixed;
    top: 0%;
    background-color: rgba($color: #000000, $alpha: 0);
    border: 0px;
    .el-menu-item {
      padding: 0px 10px;
      opacity: 100%;
    }
  }
}

@media screen and (min-width: 600px) {
  .el-menu-header {
    padding-right: 20px;
    z-index: 2;
    width: 100vw;
    height: 40px;
    position: fixed;
    top: 0%;
    background-color: rgba($color: #000000, $alpha: 0);
    border: 0;
    .el-menu-item {
      padding: 0px 20px;
      opacity: 100%;
    }
  }
}
</style>
