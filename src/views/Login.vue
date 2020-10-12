<template>
  <div class="login-container">
    <div class="account-container">
      <h1>普通登录组件</h1>
      <account-login
        @success="success"
        @errHandle="errHandle"
        :rule-form="ruleForm"
        :rules="rules"
      ></account-login>
      <phone-login
        @success="success"
        @errHandle="errHandle"
        :rule-form="ruleForm_phone"
        :rules="rules_phone"
        :countDown="10"
        @send="send"
      ></phone-login>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    let checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不可为空'))
      } else {
        let reg = /^1\d{10}$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('手机号格式不正确'))
        }
      }
    }

    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: ['change', 'blur']
          },
          {
            min: 2,
            max: 6,
            message: '用户名长度在2-6个字符',
            trigger: ['change', 'blur']
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: ['change', 'blur']
          },
          {
            min: 6,
            max: 15,
            message: '用户名长度在6-15个字符',
            trigger: ['change', 'blur']
          }
        ]
      },
      ruleForm_phone: {
        phone: '',
        code: ''
      },
      rules_phone: {
        phone: [
          {
            validator: checkPhone,
            trigger: ['change', 'blur']
          },
        ],
        code: [
          {
            len: 4,
            message: '长度不符合',
            trigger: ['change', 'blur']
          },
          {
            required: true,
            message: '验证码不可为空',
            trigger: ['change', 'blur']
          }
        ]
      }
    }
  },
  methods: {
    success () {
      this.$message.success('提交成功')
    },
    errHandle () {
      this.$message.error('表单填写有误，请检查')
    },
    send () {
      this.$message.info('发送验证码成功')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  padding: 30px;
}
.account-container {
  width: 500px;
}
</style>