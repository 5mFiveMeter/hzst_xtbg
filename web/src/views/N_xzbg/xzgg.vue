<template>
    <div class="xzgg">
      <div class="tips">
        <span>新增公告</span>
        <el-button size="mini" type="primary" class="submit_check" @click="submitNotice">提交审核</el-button>
      </div>
      <div class="xzgg_main">
        <table border="1" cellpadding="0" cellspacing="0" class="bdcb">
          <tr>
            <td class="bgb">
              <span class="red_dot">标题:</span>
            </td>
            <td>
              <el-input placeholder="公告标题" v-model="title"></el-input>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span class="red_dot">内容:</span>
            </td>
            <td>
              <div class="gg_content">
                <textarea v-model="content"></textarea>
              </div>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span class="red_dot">印发时间:</span>
            </td>
            <td>
              <el-date-picker
                type="date"
                size="small"
                v-model="print_time"
                value-format="timestamp"
                placeholder="选择印发时间"
              >
              </el-date-picker>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span>附件:</span>
            </td>
            <td>
              <div class="attach_container">
                <el-upload action="" :before-upload="uploadAttach">
                  <el-button type="primary" size="small">上传附件</el-button>
                </el-upload>
                <span class="upload_tip">单个文件不超过10M</span>
                <table cellspacing="0" cellpadding="0" border="0">
                  <tr v-for="(file,k) in attach_list">
                    <td class="file_name"><a :href="file.path" target="_blank">{{file.name}}</a></td>
                    <td class="file_size"><span>{{file.size}}B</span></td>
                    <td class="file_time"><span>{{file.time}}</span></td>
                    <td class="file_detele">
                      <el-button size="mini" type="danger" @click="cancelFile(k)">删除</el-button>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span class="red_dot">审核人:</span>
            </td>
            <td class="verify_td">
              <span class="verify_str" v-if="verify_man.length">{{verifyString}}</span>
              <el-button size="mini" type="primary" @click="showSelectDialog">选择审核人</el-button>
            </td>
          </tr>
        </table>
      </div>
      <!--选择审核人-->
      <el-dialog title="选择审核人" :visible.sync="show_verify_dialog" width="30%">
        <div class="depart_tree_wrap">
          <el-tree
            :data="depart_tree"
            :props="{label:'name',children:'users'}"
            show-checkbox
            :check-on-click-node="true"
            node-key="name"
            ref="verify_tree"
            id="verify_tree"
          ></el-tree>
        </div>
        <div slot="footer">
          <el-button @click="show_verify_dialog = false" size="small">取消</el-button>
          <el-button  size="small" type="primary" @click="selectVerify">确定</el-button>
        </div>
      </el-dialog>
      <!--提交成功-->
      <div class="submit_ok" v-if="show_submit_ok">
          <p>
            <i class="el-icon-circle-check"></i>
          </p>
          <p class="tip">提交成功!</p>
          <p class="go_back">
            <el-button size="small" @click="show_submit_ok = false">返回</el-button>
          </p>
      </div>
    </div>
</template>

<script>
    import tool from '@/utils/tool';
    export default {
        name: "xzgg",
        data:function(){
            return {
                title:"",
                content:"",
                print_time:"",
                attach_list:[],
                verify_man:[],
                verify_man_keys:[],
                depart_tree:[],
                show_verify_dialog:false,
                show_submit_ok:false
            }
        },
        created(){
            this.getDepartTree();
        },
        mounted(){
            console.log(this.$store.state)
        },
        computed:{
            verifyString:function(){
                var name_str = "";
                this.verify_man.forEach(v=>{
                    name_str += ","+v.depart_name+"/"+v.name;
                });
                name_str = name_str.slice(1);
                return name_str
            }
        },
        methods:{
            //时间格式化
            //上传附件
            uploadAttach(file){
                var _that = this;
                var formData = new FormData();
                formData.append('file',file);
                this.$http.post("/upload/formData",formData).then(rsp=>{
                    if(rsp.code == 666){
                        _that.$message({
                            type:"success",
                            message:rsp.msg
                        });
                        rsp.data.path = _that.$http.defaults.baseURL + rsp.data.path;
                        rsp.data.time = tool.formatStamp(rsp.data.time);
                        _that.attach_list.push(rsp.data)
                    }
                });
                return false
            },
            //部门树列表
            getDepartTree(){
                var _that = this;
                this.$http.post("/depart/getDepartUser").then((rsp)=>{
                    if(rsp.code == 666){
                        //过滤数据
                        rsp.data.forEach(v=>{
                            v.name = v.depart_name
                            if(v.users.length<1){
                                v.disabled = true
                            }
                        })
                        _that.depart_tree = rsp.data
                    }else{
                        _that.$message({
                            type:"error",
                            message:"审核人获取失败"
                        })
                    }
                })
            },
            //选择人dialog显示
            showSelectDialog(){
                this.show_verify_dialog = true;
                var _that = this
                setTimeout(function(){
                    var tree = _that.$refs["verify_tree"];
                    tree.setCheckedKeys(_that.verify_man_keys);
                },0);
            },
            //选择审核人
            selectVerify(){
                var tree = this.$refs.verify_tree;
                this.verify_man_keys = tree.getCheckedKeys();
                var temp_arr = [];
                tree.getCheckedNodes().forEach(v=>{
                    if(v.account_num){
                        temp_arr.push(v);
                    }
                })
                this.verify_man = temp_arr
                this.show_verify_dialog = false
            },
            //删除上传附件
            cancelFile(index){
                this.attach_list.splice(index,1)
            },
            //提交审核
            submitNotice(){
                if(this.title == ""){
                    this.$message({
                        type:"error",
                        message:"请填写标题"
                    })
                }else if(this.content == ""){
                    this.$message({
                        type:"error",
                        message:"请填写内容"
                    })
                }else if(this.print_time == ""){
                    this.$message({
                        type:"error",
                        message:"请选择印发时间"
                    })
                }else if(this.verify_man.length == 0){
                    this.$message({
                        type:"error",
                        message:"请选择审核人"
                    })
                }else{
                    var _that = this
                    this.$http.post("/notice/addNotice",{
                        title:_that.title,
                        content:_that.content,
                        print_time:_that.print_time,
                        attach:JSON.stringify(_that.attach_list),
                        draft_man:JSON.stringify({
                            name:_that.$store.state.user_info.name,
                            account_num:_that.$store.state.user_info.account_num,
                            depart_name:_that.$store.state.user_info.depart_name,
                            depart_id:_that.$store.state.user_info.depart_id
                        }),
                        draft_time:new Date().getTime(),
                        verify_man:JSON.stringify(_that.verify_man)
                    }).then(rsp=>{
                        if(rsp.code == 666){
                            _that.show_submit_ok = true
                            //清空数据
                            _that.title = "";
                            _that.content = "";
                            _that.print_time = "";
                            _that.attach_list = [];
                            _that.verify_man = [];
                            _that.verify_man_keys = [];
                        }else{
                            _that.$message({
                                type:error,
                                message:"操作失败"
                            })
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">
.xzgg{
  position: relative;
  height: 100%;
  overflow-y: auto;
  .tips{
    padding: 15px;
    border-bottom: 1px solid #e2e2e2;
    letter-spacing: 1px;
    .submit_check{
      float: right;
      margin-top: -7px;
    }
  }
  .xzgg_main{
    padding: 15px;
    table{
      width: 98%;
      tr{
        td{
          padding: 10px;
          &:nth-child(odd){
            width: 100px;
            text-align: right;
            letter-spacing: 3px;
          }
          .gg_content{
            min-height: 400px;
            textarea{
              border:1px solid #e2e2e2;
              padding: 5px;
              width: 98%;
              min-height: 380px;
            }
          }
          .attach_container{
            position: relative;
            .upload_tip{
              position: absolute;
              top: 10px;
              left: 95px;
              color: #5696ff;
            }
            table{
              width: 100%;
              margin-top: 5px;
              tr{
                td{
                  border: 1px solid #e2e2e2;
                  padding: 10px;
                  letter-spacing: 0;
                  text-align: left;
                }
                .file_name{
                  width: 55%;
                }
                .file_size{
                  width: 12%;
                }
                .file_time{
                  width: 23%;
                }
                .file_detele{
                  text-align: center;
                }
              }
            }
          }
          &.verify_td{
            .verify_str{
              margin-right: 10px;
            }
            .el-button{
              margin: 5px 0;
            }
          }
        }
      }
    }
  }
  .depart_tree_wrap{
    max-height: 550px;
    overflow-y: auto;
  }
  .submit_ok{
    text-align: center;
    position: absolute;
    left: 0;
    top: 45px;bottom: 0;
    width: 100%;
    background: #fff;
    padding-top: 50px;
    .el-icon-circle-check{
      font-size: 120px;
      color: green;
    }
    .tip{
      font-size: 26px;
      padding: 20px 0;
    }
    .go_back{

    }
  }
}
</style>
