<template>
  <div class="login_container">
    <!-- title -->
    <div class="title">疫情防控系统后台</div>
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/login.jpg" alt />
      </div>
      <div class="form">
        <!-- 表单 -->
        <Form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form">
          <Form-item label="用户名:" :label-width="80" prop="username">
            <Input v-model="loginForm.username" type="text" placeholder="请输入用户名"></Input>
          </Form-item>
          <Form-item label="密 码:" :label-width="80" prop="password">
            <Input v-model="loginForm.password" type="password" placeholder="请输入密码"></Input>
          </Form-item>
          <Form-item class="btns">
            <Button type="info" @click="login">登录</Button>
            <Button type="warning" @click="resetLoginForm">重置</Button>
          </Form-item>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单数据
      loginForm: {
        username: '',
        password: ''
      },
      //登录表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { max: 18, message: '用户名长度不可超过18个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          {
            min: 8,
            max: 18,
            message: '密码长度在8到18个字符之间',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    //重置表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },

    login() {
      //表单预验证
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return
        this.$http
          .get('index', {
            params: {
              key: 'f722e57bf3dc3d30a13e465994ff49bc'
            }
          })
          .then(res => {
            console.log(res.data.code)
            if (res.data.code == 200) {
              this.$message.success('接口测试通过')

              //模拟将token保存到sessionStorage中
              window.sessionStorage.setItem('token','wang_test');
              //跳转到 /home
              this.$router.push('/home')

            } else {
              this.$message.error('接口测试未通过')
            }
          })
          .catch(error => {
            console.log(error)
          })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #90bce7;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
}

.title {
  font-size: 40px;
  margin-bottom: 80px;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;

  .avatar_box {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .form {
    position: relative;
    margin: 100px 10px;
  }

  .login_form {
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  .btns {
    display: flex;
    justify-content: center;

    button {
      margin: 0 40px;
    }
  }
}
</style>