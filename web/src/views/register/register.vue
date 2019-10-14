<template>
    <div class="register">
      <div class="register_main">
        <p class="top_tip">注册用户:</p>
        <table class="info_table"  border="1" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <span class="red_dot">姓名:</span>
            </td>
            <td>
              <el-input size="small" v-model="name"></el-input>
            </td>
            <td>
              <span class="red_dot">性别:</span>
            </td>
            <td>
              <el-select size="small" v-model="sex">
                <el-option value="男">男</el-option>
                <el-option value="女">女</el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td>
              <span class="red_dot">账号:</span>
            </td>
            <td>
              <el-input size="small" v-model="account_num" placeholder="请输入4位纯数字"></el-input>
            </td>
            <td>
              <span class="red_dot">分管领导:</span>
            </td>
            <td>
              <el-input size="small" v-model="leader_name"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <span class="red_dot">入职时间:</span>
            </td>
            <td>
              <el-date-picker
                type="date"
                size="small"
                v-model="join_time"
                value-format="timestamp"
                placeholder="选择日期时间">
              </el-date-picker>
            </td>
            <td>
              <span>办公电话:</span>
            </td>
            <td>
              <el-input size="small" v-model="work_phone"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <span>部门:</span>
            </td>
            <td>
              <el-select size="small" v-model="depart_name">
                <el-option value="总经办">总经办</el-option>
                <el-option value="研发一部">研发一部</el-option>
                <el-option value="研发二部">研发二部</el-option>
                <el-option value="研发三部">研发三部</el-option>
                <el-option value="综合管理部">综合管理部</el-option>
                <el-option value="客户服务部">客户服务部</el-option>
              </el-select>
            </td>
            <td>
              <span>岗位:</span>
            </td>
            <td>
              <el-select size="small" v-model="post_name">
                <el-option value="软件工程师">软件工程师</el-option>
                <el-option value="软件设计师">软件设计师</el-option>
                <el-option value="实施工程师">实施工程师</el-option>
                <el-option value="行政管理"></el-option>
                <el-option value="其他"></el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td>
              <span class="red_dot">类型:</span>
            </td>
            <td>
              <el-select size="small" v-model="role_type">
                <el-option value="试用">试用</el-option>
                <el-option value="正式">正式</el-option>
              </el-select>
            </td>
            <td>
              <span class="red_dot">等级:</span>
            </td>
            <td>
              <el-select size="small" v-model="role_level">
                <el-option :value="count+'级'" v-for="count in 10" :key="count">{{count+'级'}}</el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td>
              <span>首次合同日:</span>
            </td>
            <td>
              <el-date-picker
                type="date"
                size="small"
                v-model="contract_first"
                value-format="timestamp"
                placeholder="选择日期时间">
              </el-date-picker>
            </td>
            <td>
              <span>升迁时间:</span>
            </td>
            <td>
              <el-date-picker
                type="date"
                size="small"
                v-model="promote_time"
                value-format="timestamp"
                placeholder="选择日期时间">
              </el-date-picker>
            </td>
          </tr>
          <tr>
            <td>
              <span>联系电话:</span>
            </td>
            <td>
              <el-input size="small" v-model="contact_phone"></el-input>
            </td>
            <td>
              <span>身份证号:</span>
            </td>
            <td>
              <el-input size="small" v-model="ID_card"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <span>QQ:</span>
            </td>
            <td>
              <el-input size="small" v-model="QQ"></el-input>
            </td>
            <td>
              <span>邮箱:</span>
            </td>
            <td>
              <el-input size="small" v-model="email"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <span>民族:</span>
            </td>
            <td>
              <el-input size="small" v-model="nation"></el-input>
            </td>
            <td>
              <span>政治面貌:</span>
            </td>
            <td>
              <el-input size="small" v-model="political_face"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <span>出生年月:</span>
            </td>
            <td>
              <el-date-picker
                type="date"
                size="small"
                v-model="birth_day"
                value-format="timestamp"
                placeholder="选择日期时间">
              </el-date-picker>
            </td>
            <td>
              <span>毕业时间:</span>
            </td>
            <td>
              <el-date-picker
                type="date"
                size="small"
                v-model="graduation_time"
                value-format="timestamp"
                placeholder="选择日期时间">
              </el-date-picker>
            </td>
          </tr>
          <tr>
            <td>
              <span>学历:</span>
            </td>
            <td>
              <el-select size="small" v-model="education">
                <el-option value="小学">小学</el-option>
                <el-option value="初中">初中</el-option>
                <el-option value="高中">高中</el-option>
                <el-option value="大专">大专</el-option>
                <el-option value="本科">本科</el-option>
                <el-option value="硕士">硕士</el-option>
                <el-option value="博士">博士</el-option>
                <el-option value="其他">其他</el-option>
              </el-select>
            </td>
            <td>
              <span>毕业院校:</span>
            </td>
            <td>
              <el-input size="small" v-model="graduation_school"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <span>所学专业:</span>
            </td>
            <td colspan="3">
              <el-input v-model="graduation_major"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <span>籍贯:</span>
            </td>
            <td colspan="3">
              <el-input v-model="native_place"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <span>住址:</span>
            </td>
            <td colspan="3">
              <el-input v-model="address"></el-input>
            </td>
          </tr>
        </table>
        <p class="foot_tip">
          <el-button size="small" @click="goBack">返回</el-button>
          <el-button size="small" type="primary" @click="saveRegister">注册</el-button>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data:function(){
            return {
                name:"",
                sex:"",
                account_num:"",
                leader_name:"",
                join_time:"",
                work_phone:"",
                depart_name:"",
                post_name:"",
                role_type:"",
                role_level:"",
                contract_first:"",
                promote_time:"",
                contact_phone:"",
                ID_card:"",
                QQ:"",
                email:"",
                nation:"",
                political_face:"",
                birth_day:"",
                graduation_time:"",
                education:"",
                graduation_school:"",
                graduation_major:"",
                native_place:"",
                address:"",
                //表单校验
                rules:{
                    name: {require:true,message:"请输入名称"},
                    sex:{require: true,message:'请选择性别'},
                    account_num:{require:true,message:'请输入正确账号',type:'number',length:4},
                    leader_name:{require:true,message:"请输入分管领导"},
                    join_time: {require:true,message:'请选择入职时间'},
                    role_type:{require:true,message:"请选择类型"},
                    role_level:{require:true,message:"请选择等级"}
                }
            }
        },
        methods:{
            //自定义表单校验
            checkInputInfo(){
                var rules = this.rules
                for(var key in rules){
                    if(rules[key].require){
                        if(this[key] == ""){
                            this.$message({
                                type:'error',
                                message:rules[key].message
                            })
                            return false;
                        }
                    }
                    if(rules[key].type == 'number'){
                        if(isNaN(Number(this[key]))){
                            this.$message({
                                type:'error',
                                message:rules[key].message
                            })
                            return false;
                        }else if(rules[key].length !='undefined'){
                            if(String(this[key]).length != rules[key].length){
                                this.$message({
                                    type:'error',
                                    message:rules[key].message
                                })
                                return false;
                            }
                        }
                    }
                }
                return true;
            },
            //表单提交
            saveRegister(){
                if(this.checkInputInfo()){
                    var _that = this
                    this.$http.post("/login/register",this._data).then(function(resp){
                        if(resp.code == 666){
                            _that.$message({
                                type:'success',
                                message:resp.msg
                            })
                            //页面跳转
                            _that.$router.push({path:"/login"})
                        }else{
                            _that.$message({
                                type:'error',
                                message:resp.msg
                            })
                        }
                    })
                }
            },
            //返回
            goBack(){
                this.$router.push({path:"/login"})
            }
        }
    }
</script>

<style scoped lang="less">
.register{
  position: relative;
  .register_main{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    width: 900px;
    min-height: 730px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    border-radius: 5px;
    overflow: hidden;
    .top_tip{
      padding: 15px 10px;
      font-size: 20px;
      letter-spacing: 2px;
      color: #fff;
      background: #243068;
    }
    .info_table{
      width: 100%;
      border: 1px solid lightblue;
      tr{
        td{
          padding: 5px;
          .el-input-small{
            width: 70%;
          }
        }
        td:nth-child(odd){
          width: 15%;
          text-align: right;
          background: #eaf8f9;
          letter-spacing: 2px;
        }
        td:nth-child(even){
          width: 35%;
        }
      }
    }
    .foot_tip{
      margin-top: 10px;
      text-align: center;
      .el-button{
        width: 15%;
      }
    }
  }
}
</style>
