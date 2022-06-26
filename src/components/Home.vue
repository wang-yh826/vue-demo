<template>
  <div class="layout">
    <Row type="flex">
      <!-- 左侧导航 -->
      <i-col span="5" class="layout-menu-left">
        <Menu @on-select="getMenuItemKey" theme="light" width="auto" :open-names="['1']">
          <!-- 导航栏标题 -->
          <div class="layout-logo-left">
            <div class="text">导航菜单</div>
          </div>
          <!-- 导航区 -->
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>疫情新闻
            </template>
            <Menu-item name="dailyNews">每日要闻</Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>风险区统计
            </template>
            <Menu-item name="highRiskArea">高风险地区</Menu-item>
            <Menu-item name="mid">中风险地区</Menu-item>
            <Menu-item name="low">低风险地区</Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>数据报表
            </template>
            <Menu-item name="dataShow">数据展示</Menu-item>
            <Menu-item name="mockForm">模拟表单</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <!-- 右侧部分 -->
      <i-col span="19">
        <!-- 头部信息 -->
        <div class="layout-header">
          <div class="title">疫情防控系统后台</div>
          <Button @click="logout">退出登录</Button>
        </div>

        <!-- 内容区域 -->
        <div class="layout-content">
          <div class="layout-content-main">
            <!-- 路由占位符 -->
            <router-view></router-view>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //导航菜单信息
      menuList: []
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    //退出登录
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },

    //模拟获取菜单
    getMenuList() {
      //发起axios请求
      this.$message.loading('模拟发起Ajax请求，获取菜单')
    },

    //获取导航菜单key,并跳转路由
    getMenuItemKey(key) {
        console.log(key)
      if (key === 'mid' || key === 'low') {
        return this.$router.push('highRiskArea')
      }
      this.$router.push('' + key)
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}

.layout-content {
  min-height: 600px;
  margin: 15px;
  overflow: hidden;
  background: #ffffff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-menu-left {
  background: #fff;
}
.layout-header {
  height: 52px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    padding-left: 16px;
    font-size: 26px;
    color: #999999;
  }
  button {
    margin-right: 20px;
  }
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #b8b5b5;
  border-radius: 3px;
  margin: 15px auto;

  .text {
    padding-left: 24px;
    color: #f5f7f9;
    font-size: 18px;
  }
}
</style>