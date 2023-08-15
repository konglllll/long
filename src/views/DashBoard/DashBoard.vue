<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content first">
        <div class="first-first">
          <p>总收入</p>
        </div>
        <div>
          <p>￥28,425.00</p>
          <div class="first-img"><img src="../../assets/images/04.png" alt=""></div>
        </div>
        <div>
          <div>
            <p>自从上周以来 <i class="iconfont icon-jiantou"></i>20.5%</p>
          </div><el-icon>
            <ArrowRight />
          </el-icon>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content second">
        <div>
          <p>总退款</p>
        </div>
        <div>
          <p>￥768.00</p>
          <div class="first-img"><img src="../../assets/images/05.png" alt=""></div>
        </div>
        <div>
          <div style="display: flex;align-items: center;">自从上周以来 <div class="four-four"><i class="iconfont icon-jiantouxia"></i>20.5%</div> </div><el-icon>
            <ArrowRight />
          </el-icon>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content third">
        <div>
          <p>活跃用户(个)</p>
        </div>
        <div>
          <p>1126</p>
          <div class="first-img"><img src="../../assets/images/06.png" alt=""></div>
        </div>
        <div>
          <div style="display: flex;align-items: center;">自从上周以来 <div class="four-four"><i class="iconfont icon-jiantouxia"></i>20.5%</div> </div><el-icon>
            <ArrowRight />
          </el-icon>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content four">
        <div>
          <p>订单(个)</p>
        </div>
        <div>
          <p>527</p>
          <div class="first-img"><img src="../../assets/images/07.png" alt=""></div>
        </div>
        <div >
          <div style="display: flex;align-items: center;">自从上周以来 <div class="four-four"><i class="iconfont icon-jiantouxia"></i>20.5%</div> </div>
          
          <el-icon>
            <ArrowRight />
          </el-icon>
        </div>
      </div>
    </el-col>
  </el-row>
  <div><DashTow/></div>
</template>

<script setup lang="ts" name="DashBoard">
import {ArrowRight} from '@element-plus/icons-vue'

</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 3%;
  height: 160px;
  padding: 29px 25px;
  box-sizing: border-box;
  background-color: #fff;
}

.grid-content div:nth-child(1) {
  font-size: 16px;
  padding-bottom: 5px;
}

.grid-content>div:nth-child(2) {
  color: #fff;
  font-size: 28px;
  display: flex;
}

.grid-content div:nth-child(3) {
  color: rgb(137, 175, 237);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.first {

  background-color: rgb(0, 82, 217);
}

.first .first-first {
  color: #fff;
}

.first-img {
  position: relative;
  height: 60px;
  width: 120px;
  top: -10px;
}

.second div:nth-child(2) {
  color: #000;

  .first-img {
    padding-left: 20px;
  }
}

.third div:nth-child(2) {
  color: #000;

  .first-img {
    padding-left: 100px;
  }
}

.four>div:nth-child(2) {
  color: #000;

  .first-img {
    padding-left: 100px;
  }
}
.four-four{
  color:aquamarine;
  margin-top: 5px;
}

</style>