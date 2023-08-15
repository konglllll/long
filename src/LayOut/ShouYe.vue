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


.el-main{
  background-color:rgb(238,238,238);
}
.el-aside {
  height:100vh;
  width: 232px;
}
.el-header{
  --el-header-padding: none;
}
:deep .el-menu-vertical-demo{
height: 100vh;
}
</style>