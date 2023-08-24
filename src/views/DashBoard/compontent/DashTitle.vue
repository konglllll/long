<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="number" label="排名" width="100">
          </el-table-column>
          <el-table-column prop="name" label="客户名称" width="150" />
          <el-table-column prop="state" label="较上周" width="120" />
          <el-table-column prop="city" label="订单量" width="120" />
          <el-table-column prop="date" label="签订时间" width="120" />
          <el-table-column fixed="right" label="操作" width="120">
            <template #default>
              <el-button link type="primary" size="small" @click="handleClick">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple-right">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="number" label="排名" width="100">
          </el-table-column>
          <el-table-column prop="name" label="客户名称" width="150" />
          <el-table-column prop="state" label="较上周" width="120" />
          <el-table-column prop="city" label="订单量" width="120" />
          <el-table-column prop="date" label="签订时间" width="120" />
          <el-table-column fixed="right" label="操作" width="120">
            <template #default>
              <el-button link type="primary" size="small" @click="handleClick">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="18">
      <div class="grid-content ep-bg-purple-dark">

        <div ref="main" class="main">
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple-dark">
        <div class="grid-content-head">
         <div class="grid-rig"><el-button type="primary">导出数据</el-button></div> 
        <div class="grid-content">
          <p>本月出库总计（件）</p>
          <p>1726</p>
          <p>自从上周以来<i class="iconfont icon-jiantouxia">20.3%</i></p>
        </div>
        <div>
          <p>本月入库总计（件）</p>
          <p>226</p>
          <p>自从上周以来<i class="iconfont icon-jiantouxia">20.3%</i> </p>
        </div>
      </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
//  按需引入 echarts
import * as echarts from "echarts";
const main = ref()
onMounted(
  () => {
    init()
  },

)
function init() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(main.value);
  var option = {
    title: {
      text: '出入库预览',
    },
    legend: {
      // top: '5%',
      orient: 'horizontal',
      bottom: '0',
      left: '400',
      right: '50'
    },
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016'],
        ['08-08', 43.3, 48.8],
        ['08-09', 62.1, 67.4],
        ['08-10', 17.4, 40.2],
        ['08-11', 56.4, 6.9],
        ['08-12', 97.4, 15.9],
        ['08-13', 14.4, 53.9],
        ['08-14', 63.4, 8.9],
        ['08-15', 1.4, 61.9],
        ['08-16', 57.4, 36.9],
        ['08-17', 43.4, 82.9],

      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }]
  };

  myChart.setOption(option);

}

const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    number: '1',
    date: '2016-05-03',
    name: '国家电网有限公司',
    state: '+10%',
    city: '7826',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    number: '2',
    date: '2016-05-03',
    name: '国家电网有限公司',
    state: '+10%',
    city: '7826',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    number: '3',
    date: '2016-05-03',
    name: '国家电网有限公司',
    state: '+10%',
    city: '7826',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    number: '4',
    date: '2016-05-03',
    name: '国家电网有限公司',
    state: '+10%',
    city: '7826',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    number: '5',
    date: '2016-05-03',
    name: '国家电网有限公司',
    state: '+10%',
    city: '7826',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    number: '6',
    date: '2016-05-03',
    name: '国家电网有限公司',
    state: '+10%',
    city: '7826',
    address: 'No. 189, Grove St, Los Angeles',
  }
]
</script>

<style scoped>
.grid-content {
  border-radius: 3%;
}

.ep-bg-purple-right {
  margin-left: 20px;
}

:deep .el-table .cell {
  text-align: center;
}

.main {
  margin-top: 20px;
  width: 100%;
  height: 400px;
  background-color: #fff;
  padding: 30px 25px 30px 25px;

}
.grid-content-head{
  margin-top: 20px;
  width: 70%;
  height: 400px;
  background-color: #fff;
  padding: 30px 25px 30px 65px;
position: relative;
}
.grid-rig{
  position: absolute;
  right: 35px;
}
.grid-content>p:nth-child(1){
  /* position: absolute; *
  /* margin-top: 80px; */
  padding-top: 100px;
  /* padding-bottom: 60px; */
}
.grid-content p:nth-child(2){
  font-size: 30px;
}
.grid-content p:nth-child(3){
padding-bottom: 30px;
}
.iconfont{
  color: aquamarine;
}
</style>