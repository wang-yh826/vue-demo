<template>
  <div>
    <div style="background:#eee;padding: 20px">
      <Card :bordered="true">
        <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
        <div id="main" style="width: 1000px;height:600px;"></div>
      </Card>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      params: {
        key: 'f722e57bf3dc3d30a13e465994ff49bc'
      },

      option: {
        title: {
          text: '全球疫情统计数据'
        },
        tooltip: {},
        legend: {
          data: ['人数']
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            name: '人数',
            type: 'bar',
            data: [],
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            },
            itemStyle: {
              normal: {
                label: {
                  show: true, 
                  position: 'top', 
                  textStyle: {
                    color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          }
        ]
      }
    }
  },
  created() {},
  async mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'))

    //发起请求
    const { data: res } = await this.$http.get('index', {
      params: this.params
    })
    if (res.code !== 200) return this.$message.error('请求报表数据失败')

    this.$message.success('请求报表数据成功')

    var desc = res.newslist[0].desc.globalStatistics

    var xAxisData = Object.keys(desc)
    var seriesData = Object.values(desc)
    console.log(xAxisData, seriesData)

    this.option.xAxis.data = xAxisData
    this.option.series[0].data = seriesData

    console.log(this.option)

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.option)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>