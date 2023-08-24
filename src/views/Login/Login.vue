<template>
  <div class="login-box">
    <img src="../../assets/images/bg.webp" alt="">
    
  </div>
  <LoginHead/>
</template>

<script setup lang="ts">
import LoginHead from './componted/LoginHead'
</script>

<style scoped lang="scss">
.login-box{
  width: 100%;
  height: 100vh;
  background-color: #fff;
 :deep img{
    width: 100%;
    height: 99.2%;

  }
}
</style>