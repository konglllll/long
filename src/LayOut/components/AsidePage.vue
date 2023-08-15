<template>
  <el-row class="tac">

    <el-menu active-text-color="#ffd04b" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" router
      @close="handleClose">
      <div class="tac-head"><img src="../../assets//images//02.png" alt=""></div>
      <el-sub-menu index="1">
        <template #title>
          <i class="iconfont icon-yibiaopan"></i>
          <span>仪表盘</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <i class="iconfont icon-xiangqing-"></i>

          <span>列表页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <i class="iconfont icon-bi"></i>
          <span>表单页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <i class="iconfont icon-diejia"></i>

          <span>详情页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <i class="iconfont icon-diqiuquanqiu
"></i>
          <span>外部页面</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <i class="iconfont icon-zhengque"></i>

          <span>结果页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <i class="iconfont icon-geren"></i>

          <span>个人页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>
          <i class="iconfont icon-logout"></i>

          <span>登录页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-row>
</template>

<script setup lang="ts">
import {
  EditPen
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
:deep .el-menu {
  width: 232px;
  border-right: none;
  img {
  width: 232px;
  height: 55px;
}
}



.tac-head {
  border-bottom: 1px solid #e7e7e7;
}
</style>