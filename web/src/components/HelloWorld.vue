<template>
  <div class="hellow">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
      this.$message({
          message:"o.o",
          type:"success"
      })
  }
}
</script>
<style scoped lang="less">

</style>
