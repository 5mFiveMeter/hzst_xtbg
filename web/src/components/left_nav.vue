<template>
    <div class="left_nav" ref="left_nav">
      <el-menu ref="el_menu" :default-active="default_active" active-text-color="#5696ff">

        <el-submenu v-for="item in list" :index="item.name" :key="item.name">

          <template slot="title">
            <span>{{item.name}}</span>
          </template>

          <el-menu-item @click="changeRouter(child.path)" v-for="(child,j) in item.children" :key="child.name" :index="child.path">
            <span>{{child.name}}</span>
          </el-menu-item>

        </el-submenu>

      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "left_nav",
        props:{nav_list:Array},
        data:function(){
            return {
                list:[],
                default_active:""
            }
        },
        methods:{
            changeRouter(target){
                this.$router.push({path:target})
            }
        },
        created() {
            this.list = this.nav_list
            //根据路由打开菜单
            this.default_active = this.$route.path
        },
        mounted() {
            this.$refs.left_nav.style.height = document.documentElement.clientHeight - 90 + "px";
        }
    }
</script>

<style scoped lang="less">
.left_nav{
  float: left;
  overflow-y: auto;
  width: 250px;
  background: #fff;
  .el-menu{
    border-right: none;
  }
}
</style>
