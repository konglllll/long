<template>
  <div class="head">
<div class="head-lef">
 
  <el-icon class="icon"><Open /></el-icon>
  <el-input v-model="input4" class="w-50 m-2" placeholder="请输入搜索内容">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
</div>
<div class="head-rig">
  <el-badge :value="6" class="item">
    <i class="iconfont icon-duanxin"></i>
  </el-badge>
  <i class="iconfont icon-catt"></i>
  <i class="iconfont icon-wenhao"></i>
  <div class="head-rig-to">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
   <div>
  <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Tencent<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="User">个人中心</el-dropdown-item>
            <el-dropdown-item :icon="SwitchButton">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    </div>
</div>
  </div>
</template>

<script setup lang="ts">
import { Open, Search,SwitchButton, User,  ArrowDown, } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input4 = ref('')
</script>

<style scoped>
.head{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head-lef{
  display: flex;
  align-items: center;
  height: 60px;
  width: 600px;
  .icon{
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
  }
  .el-input{
    width: 200px;
  }
}

  .head-rig{
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  height: 60px;
  width: 300px;
  .head-rig-to{
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  }
 
</style>