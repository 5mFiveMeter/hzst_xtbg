<template>
    <div class="main">
      <top-area></top-area>
      <top-nav></top-nav>
      <router-view class="r_view"></router-view>
    </div>
</template>

<script>
    import topArea from "@/components/top_area";
    import topNav from "@/components/top_nav";
    export default {
        name: "hzst_main",
        components:{topArea,topNav},
        created() {

        }
    }
</script>

<style scoped lang="less">
.main{
  height: 100%;
  .r_view{
    margin-top: 5px;
  }
}
</style>
