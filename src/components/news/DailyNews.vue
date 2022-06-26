<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item to="/home">首页</Breadcrumb-item>
        <Breadcrumb-item>疫情新闻</Breadcrumb-item>
        <Breadcrumb-item>每日要闻</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <div class="main">
      <!-- 搜索框和按钮区域 -->
      <Row :gutter="64">
        <i-col span="10">
          <Input placeholder="请输入要搜索的内容"></Input>
        </i-col>
        <i-col span="6">
          <Button type="primary" icon="ios-search">搜索</Button>
        </i-col>
        <i-col span="8">
          <div class="news-num">条目数量: {{total}} 条</div>
        </i-col>
      </Row>

      <!-- 卡片 -->
      <Card v-for="(item,index) in newsList" :key="item.id" :bordered="true" class="news-cord">
        <p slot="title">{{item.title}}</p>
        <p>{{item.summary}}</p>
        <div>{{item.pubDateStr}} — {{item.infoSource}}</div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
      total: 0
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    async getNewsList() {
      const { data: res } = await this.$http.get('index', {
        params: {
          key: 'f722e57bf3dc3d30a13e465994ff49bc'
        }
      })
      if (res.code !== 200) return this.$message.error('请求新闻数据失败')

      this.$message.success('请求新闻数据成功')

      this.newsList = res.newslist[0].news
      this.total= this.newsList.length
    }
  }
}
</script>

<style lang="less" scoped>
.layout-breadcrumb {
  padding: 10px 15px 0;
}

.main {
  padding: 10px;
  margin: 16px;
  background: #eee;
  border-radius: 5px;
}

.news-cord {
  margin-top: 16px;
}

.news-num{
    margin: 6px 0;
}
</style>