<template>
    <div class="xzbg">
      <left-nav :nav_list="nav_list"></left-nav>
      <div class="right_content" ref="right_content">
        <router-view></router-view>
      </div>

    </div>
</template>

<script>
    import leftNav from "@/components/left_nav";
    export default {
        name: "xzbg",
        components:{leftNav},
        data:function(){
            return {
                nav_list:[
                    {
                        name:'任务管理',
                        children:[
                            {
                                name:"待办任务",
                                path:"/main/xzbg/dbrw"
                            },
                            {
                                name:"已办任务",
                                path:"/main/xzbg/ybrw"
                            }
                        ]
                    },
                    {
                        name:'公告管理',
                        children:[
                            {
                                name:"所有公告",
                                path:"/main/xzbg/sygg"
                            },
                            {
                                name:"新增公告",
                                path:"/main/xzbg/xzgg"
                            }
                        ]
                    },
                    {
                        name:'考核管理',
                        children:[
                            {
                                name:"员工自评",
                                path:"/main/xzbg/ygzp"
                            },
                            {
                                name:"统计报表",
                                path:"/main/xzbg/tjbb"
                            }
                        ]
                    }
                ]
            }
        },
        mounted() {
            this.$refs.right_content.style.height = document.documentElement.clientHeight - 90 + "px";
            this.$refs.right_content.style.width = document.documentElement.clientWidth - 255 + "px";
        }
    }
</script>

<style scoped lang="less">
  .xzbg{
    overflow: hidden;
    .right_content{
      float: left;
      margin-left: 5px;
      overflow-y: auto;
      background: #fff;
    }
  }
</style>
