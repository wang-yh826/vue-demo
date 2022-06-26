<template>
  <div>
    <div class="container">
      <div class="title">高风险地区查询</div>
      <div class="date-choose">
        <Date-picker
          type="date"
          @on-change="formatDate"
          format="yyyy-MM-dd"
          :value="params.date"
          placeholder="选择日期"
          style="width: 200px"
        ></Date-picker>
        <Button @click="InquireData" type="primary" icon="ios-search">查询</Button>
        <div>当前日期:{{params.date}}</div>
      </div>
    </div>
    <div class="main">
      <Table stripe :columns="columns" :data="areaData"></Table>
    </div>
    <div class="page">
        <Page :total="100" show-elevator show-sizer show-total></Page>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          type: 'index',
          align: 'center',
          width: 60
        },
        {
          title: '地区',
          align: 'center',
          key: 'area'
        },
        {
          title: '风险等级',
          align: 'center',
          key: 'risk',
          width: 120
        }
      ],
      areaData: [],

      params: {
        key: 'f722e57bf3dc3d30a13e465994ff49bc',
        date: '2022-04-10'
      }
    }
  },
  created() {
    this.getAreaData()
  },
  methods: {
    async getAreaData() {
      const { data: res } = await this.$http.get('index', {
        params: this.params
      })
      console.log(res)
      if (res.code !== 200) return this.$message.error('请求高风险地区数据失败')

      this.$message.success('请求高风险地区数据成功')

      var mArray = res.newslist[0].riskarea.high

      //api返回的数据类型为数组，将数组转为对象
      for (var i = 0; i < mArray.length; i++) {
        var str = '{"area":"' + mArray[i] + '","risk":"高风险"}'
        var object = JSON.parse(str)
        this.areaData.push(object)
      }
    },
    //格式化日期
    formatDate(e) {
      this.params.date = e
    },

    //根据日期查询数据
    
    InquireData(){
        this.areaData=[]
        this.getAreaData()
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 22px;
    margin: 10px;
  }

  .date-choose {
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }

  .page{
      margin-top: 20px;
  }

}
</style>