<template>
  <div>
    <el-button type="primary" @click="backTo('/BackToHome')">按钮1</el-button>
    <el-button type="primary" @click="backTo('/BackToTwo')">按钮2</el-button>
    <el-button type="primary" @click="backTo('/Login')">按钮3</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    backTo (path) {
      this.$router.push(path)
    }
  }
}
</script>
