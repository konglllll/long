<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><AsidePage/></el-aside>
      <el-container>
        <el-header><HeadPage/></el-header>
        <el-main><RouterView/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="ShouYe">
import AsidePage from './components/AsidePage.vue'
import HeadPage from './components/HeadPage.vue';
</script>

<style scoped>
.el-aside {
  height:100vh;
  width: 232px;
}
:deep .el-menu-vertical-demo{
height: 100vh;
}
.el-header {
  --el-header-padding: none;
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content:space-between;
padding-right: 240px;
}
 .el-main {
  background-color:rgb(238,238,238);
    clear: both;
    padding-top: 80px;
    height: 100vh;
}
:deep .el-page-header__header{
   line-height: 60px;
  /*  position: fixed;
   z-index: 100;
   width: 100%; */
  }
</style>