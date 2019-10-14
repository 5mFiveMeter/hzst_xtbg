var mysql = require("mysql");
var db_conf = require("../config");
var db_sql = require("./notice_sql");

var db_pool = mysql.createPool(db_conf);
var uuid = require("node-uuid");

module.exports = {
    getList(req,res,next){
        var params = req.body;
        if(params.start !='undefined' && params.count){
            db_pool.getConnection(function(err,conn){
                conn.query(db_sql.get_list,[params.start , params.count],function(err,rst){
                    err && console.log(err);
                    if(rst){
                        var back_data = {
                            code:666,
                            msg:"查询成功",
                            data:{
                                notice_list:rst,
                                count:0
                            }
                        }
                        conn.query(db_sql.get_count,function(err2,rst2){
                            err2 && console.log(err2);
                            if(rst2){
                                back_data.data.count = rst2[0]["COUNT(*)"]
                            }
                            //查询结束
                            res.send(back_data);
                            conn.release();
                        })
                    }
                })
            })
        }
    },
    getDetail(req,res,next){
        var params = req.body;
        if(params.notice_id != 'indefined'){
            db_pool.getConnection(function(err,conn){
                conn.query(db_sql.get_detail,[params.notice_id],function(err,rst){
                    err && console.log(err);
                    if(rst){
                        res.send({
                            code:666,
                            msg:"查询成功",
                            data:rst[0]
                        })
                    }
                    conn.release();
                })
            })
        }
    },
    //标题及起草人模糊查询
    getSearch(req,res,next){
        var params = req.body;
        db_pool.getConnection(function(err,conn){
            conn.query(db_sql.get_search(params.start,params.end,params.key_words,params.key_words),function(err,rst){
                err && console.log(err);
                if(rst){
                    res.send({
                        code:666,
                        msg:"查询成功",
                        data:rst
                    })
                }
                conn.release();
            })
        })
    },
    //假删除
    doDelete(req,res,next){
        var params = req.body;
        if(params.notice_id != 'undefined'){
            db_pool.getConnection(function(err,conn){
                conn.query(db_sql.do_delete,[params.notice_id],function(err,rst){
                    err && console.log(err);
                    if(rst){
                        if(rst.changedRows > 0){
                            res.send({
                                code:666,
                                msg:"删除成功"
                            })
                        }else{
                            res.send({
                                code:555,
                                msg:"删除失败"
                            })
                        }
                    }
                    conn.release();
                })
            })
        }
    },
    //新增公告add_notice
    addNotice(req,res,next){
        var params = req.body;
        var notice_id = uuid.v1();
        db_pool.getConnection((err,conn)=>{
            err && console.log(err);
            conn.query(db_sql.add_notice,[notice_id,params.title,params.content,params.print_time,params.push_time,params.attach,params.draft_man,params.verify_man,params.draft_time],(err,rst)=>{
                err && console.log(err);
                if(err){
                    res.send({
                        code:555,
                        msg:"操作失败",
                        error:err
                    })
                }else{
                    res.send({
                        code:666,
                        msg:"提交成功"
                    })
                }
            })
        })
    }
}