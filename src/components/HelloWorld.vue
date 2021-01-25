<template>
  <div>
    <A></A>
    <B></B>
  </div>
</template>

<script>
import A from './A.vue'
import B from './B'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    A,
    B
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
