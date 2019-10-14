<template>
  <div class="login" @keyup.enter="login">
    <div class="login_left_up"></div>
    <div class="login_main">
      <div class="main_up">
        <img :src="hzst_words" alt="">
        <span>思达协同办公系统</span>
      </div>
      <div class="mian_down">
        <table>
          <tr>
            <td class="label">账&nbsp;&nbsp;&nbsp;号:</td>
            <td class="content">
              <img :src="person_icon" alt="">
              <input type="text" v-model="user_name" placeholder="请输入四位账号">
            </td>
          </tr>
          <tr>
            <td class="label">密&nbsp;&nbsp;&nbsp;码:</td>
            <td class="content">
              <img :src="lock_icon" alt="">
              <input type="password" v-model="user_pass">
            </td>
          </tr>
        </table>
        <div class="login_btn_box">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button plain @click="register">注册</el-button>
        </div>
      </div>
      <div class="main_foot">
        <table>
          <tr>
            <td>电话：</td>
            <td>0571-88930567 转805</td>
            <td>信箱：</td>
            <td>Service@hzst.com</td>
          </tr>
          <tr>
            <td>地址：</td>
            <td>中国杭州翠柏路6号3号楼2层</td>
            <td>传真：</td>
            <td>0571-88913566</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="login_foot">版权所有C 1999-2019 杭州思达电子科技发展有限公司. 浙B2-20050233号</div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data:function(){
            return {
                hzst_words:require("@/assets/images/hzst_words.png"),
                person_icon:require("@/assets/images/person.png"),
                lock_icon:require("@/assets/images/lock.png"),
                user_name:"",
                user_pass:""
            }
        },
        methods:{
          login(){
            var _this = this
            if(this.user_name == ""){
                this.$message({
                    type:"error",
                    message:"请输入用户名"
                })
            }else if(this.user_pass == ""){
                this.$message({
                    type:"error",
                    message:"请输入密码"
                })
            }else{
                this.$http.post("/login/login",{
                    account_num:this.user_name,
                    userpass:this.user_pass
                }).then(function(rst){
                    if(rst.code == 666){
                        //登陆成功,存储token,跳转页面
                        _this.$router.push({path:"/main/xzbg/dbrw"});
                        _this.$store.dispatch("changeToken",rst.data.token);
                        _this.$store.dispatch("changeInfo",rst.data.user_info);
                    }else{
                        _this.$message({
                            type:"error",
                            message:rst.msg
                        })
                    }
                })
            }
          },
          register(){
            this.$router.push({path:"/register"});
          }
        }
    }
</script>

<style scoped lang="less">
.login{
  height: 100%;
  position: relative;
  background: url(../../assets/images/login_bg.png);
  object-fit: cover;
  object-position: center;
  .login_left_up{
    position: absolute;
    left: 70px;
    top: 30px;
    width: 230px;
    height: 50px;
    background: url(../../assets/images/hzst_tip.png);
    object-position: center;
    object-fit: cover;
  }
  .login_main{
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    width: 500px;
    height: 310px;
    .main_up{
      padding: 20px 0;
      text-align: center;
      img{
        vertical-align: text-bottom;
      }
      span{
        font-size: 24px;
      }
    }
    .mian_down{
      table{
        width: 60%;
        margin: 15px auto 0;
        td{
          padding: 7px 0;
        }
        .label{
          text-align: right;
          padding-right: 10px;
          font-size: 16px;
        }
        .content{
          position: relative;
          img{
            position: absolute;
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 18px;
            object-fit: contain;
            object-position: center;
          }
          input{
            width: 200px;
            height: 30px;
            padding-left: 28px;
            border: 1px solid #e2e2e2;
          }
        }
      }
      .login_btn_box{
        margin: 10px auto 0;
        text-align: center;
        button{
          width: 140px;
          letter-spacing: 8px;
        }
      }
    }
    .main_foot{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 10px 0;
      background: #f8f8f8;
      margin: 40px auto 0;
      table{
        margin: 0 auto ;
        td{
          padding: 5px;
          &:nth-child(odd){
            text-align: right;
          }
        }
      }
    }
  }
  .login_foot{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background: rgb(36,48,104);
  }
}
</style>
