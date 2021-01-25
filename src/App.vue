<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer,
    Main
  }
}

</script>

<style lang='scss'>
@import url("//at.alicdn.com/t/font_2345973_ajchj2g3t84.css");
@import url("./assets/css/reset.css");

body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  min-width: 1000px;
}
</style>
