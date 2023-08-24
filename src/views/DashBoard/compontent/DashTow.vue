<template>
    <el-row :gutter="20">
    <el-col :span="17"><div class="grid-content ep-bg-purple"> <div ref="main" class="main" ></div></div></el-col>
    <el-col :span="5"><div class="grid-content ep-bg-purple"> <div ref="yuan" class="right"></div></div></el-col>
  </el-row>
 
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
//  按需引入 echarts
import * as echarts from "echarts";
const main = ref()
const yuan = ref() // 使用ref创建虚拟DOM引用，使用时用main.value
 // 使用ref创建虚拟DOM引用，使用时用main.value
onMounted(
  () => {
    init()
  }
)
function init() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(main.value);
  var myChartTow = echarts.init(yuan.value);
  // 指定图表的配置项和数据
  var option = {
  title: {
    text: '统计数据(万元)',
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['本月', '上月'],
    orient:'horizontal',
    bottom:'0',
    left:'400',
    right:'10'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '13%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['08-05', '08-06', '08-07', '08-08', '08-09', '08-10', '08-11','08-12','08-13','08-14'],
    name:'本月',

  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'line',
      name:'上月',
      symbol: 'circle',
      color:"rgba(98,143,219,0.5)",
      areaStyle: {},
      // shadowColor:'rgba(230, 239, 254,0.5)',
      data: [59, 97, 95, 60, 10, 80, 61,95,1,20]
    },
    {
      type: 'line',
      name:'本月',
      color:"#E272D0",
      symbol: 'circle',
      data: [57, 62, 23, 62, 40, 83, 12,1,56,62]
    },
  ]
};
var options = {
   title: {
    text: '销售渠道',
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    // top: '5%',
    orient:'horizontal',
    bottom:'0',
    // left:'400',
    right:'50'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 7,
        borderColor: '#fff',
        borderWidth: 1
      },
      label: {
        show: true,
        position: 'center',
        formatter:"78.29%",
        fontSize: 30,       
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
    /*   labelLine: {
        show: false
      }, */
      data: [
        { value: 2348, name: '线上' },
        { value: 735, name: '门店' },
      ]
    }
  ]
};
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  myChartTow.setOption(options);

}

</script>

<style scoped>
.main{
 
  width: 100%;
   height: 300px;
   background-color: #fff;
   padding: 30px 25px 30px 25px;
}
.right{
margin-left: 55px;
  width: 100%;
  height: 300px;
  background-color: #fff;
  padding: 30px 25px 30px 25px;

}
</style>

