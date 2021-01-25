<template>
  <el-footer
    height="40px"
    class='footer'
  >
    <div class='footer-inner'>
      <el-link
        href='https://www.microsoft.com/zh-cn/edge'
        :underline='false'
        type='info'
      >推荐使用 新版 Microsoft Edge 浏览器 访问本站</el-link>
      <el-link
        href='https://beian.miit.gov.cn/'
        :underline='false'
        type='info'
      >互联网ICP备案：黔ICP备19012207号-3</el-link>
    </div>
  </el-footer>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.footer-inner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  min-width: 1000px;
}
</style>
