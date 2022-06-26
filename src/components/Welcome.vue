<template>
  <div class="container">
    <!-- 面包屑导航 -->
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item to="/home">首页</Breadcrumb-item>
        <Breadcrumb-item>欢迎</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <div class="text">Welcome</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}
</style>