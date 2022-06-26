<template>
  <div>
    <Button type="primary" @click="showModel = true">添加管理员</Button>
    <Modal v-model="showModel" width="560" title="请输入管理员信息">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="姓名" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
        </Form-item>
        <Form-item label="邮箱" prop="mail">
          <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
        </Form-item>
        <Form-item label="城市" prop="city">
          <Select v-model="formValidate.city" placeholder="请选择所在地">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <Form-item label="选择日期">
          <Form-item prop="date">
            <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
          </Form-item>
        </Form-item>
        <Form-item label="性别" prop="gender">
          <Radio-group v-model="formValidate.gender">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </Radio-group>
        </Form-item>
        <Form-item label="爱好" prop="interest">
          <Checkbox-group v-model="formValidate.interest">
            <Checkbox label="吃饭"></Checkbox>
            <Checkbox label="睡觉"></Checkbox>
            <Checkbox label="跑步"></Checkbox>
            <Checkbox label="看电影"></Checkbox>
          </Checkbox-group>
        </Form-item>
        <Form-item label="介绍" prop="desc">
          <Input
            v-model="formValidate.desc"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="请输入..."
          ></Input>
        </Form-item>
        <Form-item>
          <div class="btns">
            <Button @click="handleCancel" class="btn">取消</Button>
            <Button @click="handleReset('formValidate')" type="warning" class="btn">重置</Button>
            <Button @click="handleSubmit('formValidate')" type="primary" class="btn">提交</Button>
          </div>
        </Form-item>
      </Form>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModel: false,

      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        desc: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        city: [{ required: true, message: '请选择城市', trigger: 'change' }],
        gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
        interest: [
          {
            required: true,
            type: 'array',
            min: 1,
            message: '至少选择一个爱好',
            trigger: 'change'
          },
          {
            type: 'array',
            max: 2,
            message: '最多选择两个爱好',
            trigger: 'change'
          }
        ],
        date: [
          {
            required: true,
            type: 'date',
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        desc: [
          { required: true, message: '请输入个人介绍', trigger: 'blur' },
          {
            type: 'string',
            min: 20,
            message: '介绍不能少于20字',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleCancel() {
      this.showModel = false
    },

    handleSubmit(name) {
      console.log(this.$refs[name])
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$message.success('提交成功!')
          this.showModel = false
          this.addAdmin()
          this.formValidate = []
        } else {
          this.$message.error('表单验证失败!')
        }
      })
    },

    handleReset(name) {
      this.$refs[name].resetFields()
    },

    async addAdmin() {
      const { data: res } = await this.$http.get('index', {
        params: this.formValidate
      })
      this.$message.success('发送axios请求成功')
    }
  }
}
</script>

<style lang="less" scoped>
.btns {
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.btn {
  margin: 10px;
}
</style>