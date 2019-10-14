<template>
    <div class="sygg">
      <div class="tips">
        <span v-show="!show_detail">所有公告</span>
        <span v-show="show_detail">
          <span>公告内容</span>
          <el-button size="mini" class="go_back" @click="show_detail = false">返回</el-button>
          <el-button size="mini" type="danger" class="delete_gg" @click="deleteNotice">删除</el-button>
        </span>
      </div>
      <div class="search_area">
        <table border="1" cellpadding="0" cellspacing="0" class="bdcb">
          <tr>
            <td class="bgb">
              <span>关键词:</span>
            </td>
            <td colspan="3">
              <el-input placeholder="请输入关键词" size="small" v-model="key_words" clearable></el-input>
            </td>
            <td rowspan="2">
              <el-button type="primary" size="small" @click="doSearch">查询</el-button>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span>开始时间:</span>
            </td>
            <td>
              <el-date-picker
                type="datetime"
                size="small"
                v-model="start_time"
                value-format="timestamp"
                placeholder="选择发布时间">
              </el-date-picker>
            </td>
            <td class="bgb">
              <span>结束时间:</span>
            </td>
            <td>
              <el-date-picker
                type="datetime"
                size="small"
                v-model="end_time"
                value-format="timestamp"
                placeholder="选择发布时间">
              </el-date-picker>
            </td>
          </tr>
        </table>
      </div>
      <div class="table_area" ref="table_area">
        <el-table :data="gg_list" style="width: 100%" ref="gg_table" border size="mini" :height="table_height" :stripe="true">
          <el-table-column prop="title" label="标题" min-width="500">
            <template slot-scope="scope">
              <a href="javascript:void(0);" @click="showNoticeDetail(scope.row.notice_id)">{{scope.row.title}}</a>
            </template>
          </el-table-column>
          <el-table-column prop="push_time" label="发布时间" min-width="150">
            <template slot-scope="scope">
              <span>{{formatStamp(scope.row.push_time)}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="print_time" label="印发时间" min-width="150">
            <template slot-scope="scope">
              <span>{{formatStamp(scope.row.print_time)}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="draft_man" label="起草人" min-width="180">
            <template slot-scope="scope">
              <span>{{scope.row.draft_man.depart_name + "/" +scope.row.draft_man.name}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="table_pages">
        <el-pagination
          @current-change="changeCurentPage"
          @size-change="changeCurrentSize"
          :current-page="current_page"
          :page-size="list_size"
          layout="total,sizes, prev, pager, next, jumper"
          :page-sizes="[10, 15, 20, 50]"
          :total="all_count"
        >
        </el-pagination>
      </div>
      <!--公告详情-->
      <div class="gg_detail" v-show="show_detail">
        <table border="1" cellpadding="0" cellspacing="0">
          <tr>
            <td class="bgb">
              <span>标题:</span>
            </td>
            <td colspan="3">
              <span>{{notice_detail.title}}</span>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span>内容:</span>
            </td>
            <td colspan="3" >
              <div style="min-height: 300px;">{{notice_detail.content}}</div>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span>印发日期:</span>
            </td>
            <td colspan="3">
              <span>{{formatStamp(notice_detail.print_time)}}</span>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span>附件:</span>
            </td>
            <td colspan="3">
              <table cellspacing="0" cellpadding="0" border="0" v-if="notice_detail" class="attach_table">
                <tr v-for="(file,k) in notice_detail.attach">
                  <td class="file_name"><a :href="file.path" target="_blank">{{file.name}}</a></td>
                  <td class="file_time"><span>{{file.time}}</span></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span>起草人:</span>
            </td>
            <td>
              <span>{{notice_detail.draft_man && (notice_detail.draft_man.depart_name +"/"+ notice_detail.draft_man.name) }}</span>
            </td>
            <td class="bgb">
              <span >起草时间:</span>
            </td>
            <td>
              <span>{{formatStamp(notice_detail.draft_time)}}</span>
            </td>
          </tr>
          <tr>
            <td class="bgb">
              <span>审核人:</span>
            </td>
            <td>
              <span>{{verify_str}}</span>
            </td>
            <td class="bgb">
              <span>审核时间:</span>
            </td>
            <td>
              <span>{{formatStamp(notice_detail.verify_time)}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
    import {MessageBox} from 'element-ui';
    export default {
        name: "sygg",
        data:function(){
            return {
                key_words:"",
                start_time:"",
                end_time:"",
                table_height:0,
                gg_list:[],
                current_page:1,
                list_size:20,
                all_count:0,
                show_detail:false,
                detail_id:"",
                notice_detail:""
            }
        },
        created(){
            this.table_height =  document.documentElement.clientHeight -350;
            this.getCurrentList();
        },
        computed:{
            verify_str(){
                if(!this.notice_detail.verify_man){
                    return ""
                }else{
                    var template_arr = []
                    this.notice_detail.verify_man.forEach(v=>{
                        template_arr.push(v.depart_name+"/"+v.name);
                    })
                    return template_arr.join(",")
                }
            }
        },
        methods:{
            //获取当前页码列表
            getCurrentList(){
                var _that = this;
                this.$http.post("/notice/getList",{start:(this.current_page-1)*this.list_size,count:this.list_size}).then(function(rsp){
                  if(rsp.code == 666){
                      var result = rsp.data;
                      //数据处理
                      result.notice_list.forEach(v=>{
                          v.draft_man = JSON.parse(v.draft_man)
                      });
                      _that.all_count = result.count;
                      _that.gg_list = result.notice_list;
                  }
                })
            },
            //页码改变
            changeCurentPage(cur){
                this.current_page = cur
                this.getCurrentList();
            },
            //单页信息条数改变
            changeCurrentSize(cur){
                this.current_page = 1;
                this.list_size = cur
                this.getCurrentList();
            },
            //时间格式化
            formatStamp(target){
                if(!target){return ""}
                var time = new Date(Number(target));
                var year = time.getFullYear();
                var month = time.getMonth() + 1;
                var day = time.getDate();
                var hours = time.getHours();
                var mins = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
                var sens = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
                return year + "/" + month +"/" + day + " " + hours + ":" + mins + ":" + sens;
            },
            //显示公告详情
            showNoticeDetail(notice_id){
                this.detail_id = notice_id;
                this.show_detail = true;
                //查询当前公告详情
                var _that = this
                this.$http.post("/notice/getDetail",{notice_id:this.detail_id}).then(function(rsp){
                    if(rsp.code == 666){
                        //数据处理
                        rsp.data.draft_man = JSON.parse(rsp.data.draft_man);
                        rsp.data.verify_man = JSON.parse(rsp.data.verify_man);
                        rsp.data.attach = JSON.parse(rsp.data.attach);
                        _that.notice_detail = rsp.data
                    }else{
                        _that.$message({
                            type:error,
                            message:"获取失败"
                        })
                    }
                })
            },
            //模糊查询
            doSearch(){
                var _that = this;
                this.$http.post("/notice/getSearch",{
                    start:this.start_time || "",
                    end:this.end_time || "",
                    key_words:this.key_words
                }).then(function(rsp){
                    if(rsp.code == 666){
                        _that.gg_list = rsp.data;
                        _that.$message({
                            type:"success",
                            message:rsp.msg
                        })
                    }else{
                        _that.$message({
                            type:"error",
                            message:"查询失败"
                        })
                    }
                })
            },
            //删除公告
            deleteNotice(){
                var _that = this
                MessageBox.confirm("确定删除此公告?",'提示',{
                    confirmButtonText:"确定",
                    cancelButtonText:"取消",
                    type: 'warning'
                }).then(function(){
                    _that.$http.post("/notice/doDelete",{notice_id:_that.detail_id}).then((rsp)=>{
                        if(rsp.code == 666){
                            //重新获取列表
                            _that.getCurrentList()
                            //返回列表页
                            _that.show_detail = false
                            _that.$message({
                                type:"success",
                                message:rsp.msg
                            })
                        }else{
                            _that.$message({
                                type:"error",
                                message:rsp.msg || "删除失败"
                            })
                        }
                    })
                }).catch(()=>{

                })
            }
        }
    }
</script>

<style scoped lang="less">
.sygg{
  height: 100%;
  a{
    color: #5696ff;
  }
  position: relative;
  .tips{
    padding: 15px;
    border-bottom: 1px solid #e2e2e2;
    letter-spacing: 1px;
    .go_back{
      float: right;
      margin-top: -7px;
    }
    .delete_gg{
      float: right;
      margin-top: -7px;
      margin-right: 10px;
    }
  }
  .search_area{
    padding: 15px;
    table{
      width: 100%;
      tr{
        td{
          padding: 10px;
          &:nth-child(odd){
            text-align: center;
          }
          .el-input{
            width: 70%;
          }

        }
      }
    }
  }
  .table_area{
    padding: 15px;
  }
  .table_pages{
    padding: 0 10px;
  }
  .gg_detail{
    position: absolute;
    z-index: 1;
    top: 45px;
    bottom: 0;
    width: 100%;
    background: #fff;
    overflow-y: auto;
    table{
      margin: 15px;
      width: 97%;
      border-color: #5696ff;
      td{
        padding: 15px;
        &:nth-child(odd){
          width: 15%;
          text-align: right;
        }
        &:nth-child(even){
          width: 35%;
        }
      }
      .bgb{
        background: rgba(110,140,255,0.1);
        color: #5696ff;
        user-select: none;
      }
      .attach_table{
        margin: 0;
        width: 100%;
        tr{
          td{
            border: 1px solid #5696ff;
            &:nth-child(odd){
              width: 70%;
              text-align: left;
            }
            &:nth-child(even){
              min-width: 160px;
              width: 30%;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
