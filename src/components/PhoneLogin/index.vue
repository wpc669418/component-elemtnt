<template>
  <div>
    <h1>手机号登录组件</h1>
    <div class="phone-container">
      <el-form :rules="rules" ref="ruleForm" :model="ruleForm">
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入手机号">
            <i slot="prefix" class="el-icon-phone"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row :gutter="20">
            <el-col :span="18">
              <el-input v-model="ruleForm.code" placeholder="请输入验证码">
                <i slot="prefix" class="el-icon-message"></i>
              </el-input>
            </el-col>
            <el-col :span="6">
              <el-button @click="sendCode" :disabled="disabled" size="medium">{{
                button_text
              }}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" style="width: 100%" type="primary"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneLogin',
  props: {
    ruleForm: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    },
    countDown: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      disabled: false,
      time: 0,
      button_text: '发送验证码'
    }
  },
  mounted () {
    this.time = this.countDown
  },
  methods: {
    sendCode () {
      this.$refs.ruleForm.validateField('phone', error => {
        console.log('sendCode -> err', error)
        if (error) {
          this.$message.error(error)
        } else {
          /**
           * 1.时间开始倒计时
           * 2.按钮禁用
           * 3.文字变为xxS后重新发送
           * 4.时间结束后 关闭倒计时 文字变为 重新发送
           * 5.倒计时时间重铸
           */
          this.disabled = true
          this.button_text = `${this.time}s后重发`
          let timer = setInterval(() => {
            this.time--
            this.button_text = `${this.time}s后重发`
            if (this.time === 0) {
              this.disabled = false
              this.button_text = `重新发送`
              this.time = this.countDown
              clearInterval(timer)
            }
          }, 1000)
          this.$emit('send')
        }
      })


    },
    login () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$emit('success')
        } else {
          this.$emit('errHandle')
        }
      })
    }
  }
}
</script>

<style>
</style>