<template>
    <div class="top_nav">
      <ul>
        <li @click="changeNav(k)" v-for="(nav,k) in nav_list" :key="nav.path">{{nav.name}}</li>
      </ul>
      <div class="foot_bar" :style="{width:bar_wid+'px',left:bar_left+'px'}"></div>
    </div>
</template>

<script>
    export default {
        name: "top_nav",
        data:function(){
            return {
                bar_wid:75,
                bar_left:15,
                bar_dist:15,
                bar_ofst:110,
                nav_list:[
                    {
                        name:"行政办公",
                        path:"/main/xzbg"
                    },
                    {
                        name:"事务管理",
                        path:"/main/swgl"
                    },
                    {
                        name:"个人办公",
                        path:"/main/grbg"
                    },
                    {
                        name:"资源中心",
                        path:"/main/zyzx"
                    },
                    {
                        name:"系统管理",
                        path:"/main/xtgl"
                    }
                ]
            }
        },
        created(){
            this.nav_list.forEach((v,k)=>{
                if(this.$route.path == v.path){
                    this.changeNav(k)
                }
            })
        },
        methods:{
            changeNav(index){
                this.bar_left = index * this.bar_ofst + this.bar_dist;
                this.$router.push({path:this.nav_list[index].path});
            }
        }
    }
</script>

<style scoped lang="less">
.top_nav{
  height: 40px;
  background: #fff;
  position: relative;
  user-select: none;
  ul{
    li{
      float: left;
      height: 38px;
      line-height: 35px;
      width: 110px;
      text-align: center;
      letter-spacing: 1px;
      cursor: pointer;
      &:hover{
        color: #5696ff;
      }
    }
  }
  .foot_bar{
    position: absolute;
    bottom: 0;
    height: 2px;
    background: #5696ff;
    transition: left 0.3s ease;
  }
}
</style>
