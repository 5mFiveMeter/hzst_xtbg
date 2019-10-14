<template>
    <div class="top_area">
      <a target="_blank" href="http://www.hzst.com/PC/Index.html?r=0.2648438105033075"><img :src="logo" alt="杭州思达"></a>
      <span class="words">协同办公系统</span>
      <div class="tips">
        <span class="time">{{now_day}}&nbsp;&nbsp;{{week_day}}&nbsp;&nbsp;{{now_time}}</span>
        <span class="welc">欢迎:</span>
        <span class="name">{{depart}} / {{name}}</span>
        <span class="out" @click="getOut">退出</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "top_area",
        data:function(){
            return {
                logo:require("@/assets/images/hzst_words.png"),
                now_time:"",
                now_day:"",
                week_day:"",
                name:"",
                depart:""
            }
        },
        mounted(){
            var _that = this;
            var time = new Date();
            //年月日
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var day = time.getDate();
            this.now_day = year + "/" + month +"/" + day;
            //星期几
            switch (time.getDay()) {
                case 0: this.week_day = "星期天";break;
                case 1: this.week_day = "星期一";break;
                case 2: this.week_day = "星期二";break;
                case 3: this.week_day = "星期三";break;
                case 4: this.week_day = "星期四";break;
                case 5: this.week_day = "星期五";break;
                case 6: this.week_day = "星期六";break;
            }
            //时分秒
            setInterval(function(){
                var it_time = new Date()
                var hours = it_time.getHours();
                var mins = it_time.getMinutes() < 10 ? "0" + it_time.getMinutes() : it_time.getMinutes();
                var sens = it_time.getSeconds() < 10 ? "0" + it_time.getSeconds() : it_time.getSeconds();
                _that.now_time =  + " " + hours + ":" + mins + ":" + sens;
            },1000)
        },
        created(){
            if(this.$store.state.user_info=="" && this.$store.state.user_info==""){
                this.$store.dispatch("changeInfo",JSON.parse(localStorage.getItem("hzst_user")));
                this.$store.dispatch("changeToken",localStorage.getItem("hzst_token") );
            }
            if(this.$store.state.user_info==""){
                this.$router.push({path:"/login"});
            }
            this.name = this.$store.state.user_info.name;
            this.depart = this.$store.state.user_info.depart_name;
        },
        methods:{
            getOut(){
                localStorage.removeItem("hzst_token");
                localStorage.removeItem("hzst_user");
                this.$router.push({path:"/login"});
            }
        }
    }
</script>

<style scoped lang="less">
.top_area{
  background: #5696ff;
  color: #fff;
  padding: 5px 15px;
  overflow: hidden;
  user-select: none;
  img{
    float: left;
    margin-right: 10px;
  }
  .words{
    font-size: 24px;
    line-height: 30px;
  }
  .tips{
    letter-spacing: 3px;
    float: right;
    line-height: 30px;
    .time{
      letter-spacing: 1px;
      margin-right: 20px;
    }
    .welc{

    }
    .name{
      margin: 0 5px;
      letter-spacing: 0;
    }
    .out{
      cursor: pointer;
      &:hover{
        color: #000;
      }
    }
  }
}
</style>
