<template>
  <el-header
    height="60px"
    class="header"
  >
    <el-row
      class='header-inner'
      type="flex"
      justify="space-between"
      align="middle"
    >
      <div class='flex-center'>
        <i class='iconfont iconbofangqi-bofangxiaodianshi'></i>
        <span class='project'>播放器</span>
      </div>
      <div class='flex-center'>
        <span class='author'>梦渊</span>
        <span class='delimiter'>●</span>
        <span class='signature'>面向二次元编程</span>
      </div>
    </el-row>
  </el-header>
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
@import url("//at.alicdn.com/t/font_2345973_voc0j1tp6k.css");
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2d2f33;
  background-color: #fff;
}
.header-inner {
  width: 1000px;
}
.iconbofangqi-bofangxiaodianshi {
  color: #ff8c00;
  font-size: 3rem;
  margin-right: 10px;
}
.author {
  font-family: "tuzi";
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 5px;
  color: #ff8c00;
}
.project {
  font-family: "riben";
  font-size: 1.5rem;
}
.signature {
  font-size: 1.5rem;
  font-family: "tuzi";
  letter-spacing: 5px;
  font-weight: bold;
  color: #ff8c00;
}
.delimiter {
  margin: 0 10px;
  font-size: 1.2rem;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
