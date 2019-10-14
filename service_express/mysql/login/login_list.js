var mysql = require("mysql");
var db_conf = require("../config");
var db_sql = require("./login_sql");

var bcrypt = require("bcrypt-nodejs");
var salt = bcrypt.genSaltSync(10);

var db_pool = mysql.createPool(db_conf);

module.exports = {
    //登录
    login (req,res,next){
        var params = req.body;
        if(params.account_num && params.userpass){
            db_pool.getConnection(function(err,conn){
                conn.query(db_sql.login,[params.account_num,params.userpass],function(err,rst){
                    err && console.log(err);
                    if(rst.length>0){
                        //登录认证
                        var flag = bcrypt.compareSync(params.userpass,rst[0].password)
                        if(flag){
                            delete rst[0].password;
                            delete rst[0].ID_card;
                            res.send({
                                code:666,
                                msg:"登陆成功",
                                data:
                                    {
                                        user_info:rst[0],
                                        token : "hzst_" + rst[0].account_num  //鉴于此项目为练手项目，token简化
                                    }
                            })
                        }else{
                            res.send({
                                code:555,
                                msg:"密码错误"
                            })
                        }
                    }else{
                        res.send({
                            code:555,
                            msg:"用户不存在"
                        })
                    }
                    conn.release();
                })
            })
        }
    },
    //注册
    register (req,res,next) {
        var params = req.body;
        if(params.name && params.sex && params.account_num && params.leader_name && params.join_time && params.role_type && params.role_level){
            //判断账号是否存在
            db_pool.getConnection(function(err,conn){
                conn.query(db_sql.get_account,[params.account_num],function(err,rst){
                    err && console.log(err);
                    if(rst.length == 0){
                        //账号不存在
                        var template_arr = []
                        template_arr[0] = params.name || "";
                        template_arr[1] = params.sex  || "";
                        template_arr[2] = params.account_num || "";
                        template_arr[3] = params.leader_name || "";
                        template_arr[4] = params.join_time || "";
                        template_arr[5] = params.work_phone || "";
                        template_arr[6] = params.depart_name || "";
                        template_arr[7] = params.post_name || "";
                        template_arr[8] = params.role_type || "";
                        template_arr[9] = params.role_level || "";
                        template_arr[10] = params.contract_first || "";
                        template_arr[11] = params.promote_time || "";
                        template_arr[12] = params.contact_phone || "";
                        template_arr[13] = params.ID_card || "";
                        template_arr[14] = params.QQ || "";
                        template_arr[15] = params.email || "";
                        template_arr[16] = params.nation || "";
                        template_arr[17] = params.political_face || "";
                        template_arr[18] = params.birth_day || "";
                        template_arr[19] = params.graduation_time || "";
                        template_arr[20] = params.education || "";
                        template_arr[21] = params.graduation_school || "";
                        template_arr[22] = params.graduation_major || "";
                        template_arr[23] = params.native_place || "";
                        template_arr[24] = params.address || "";
                        //加盐密码
                        template_arr[25] = bcrypt.hashSync("123456",salt);
                        conn.query(db_sql.register,template_arr,function(err,rst){
                            err && console.log(err);
                            if(rst){
                                res.send({
                                    code:666,
                                    msg:"注册成功"
                                })
                            }else{
                                res.send({
                                    code:555,
                                    msg:"注册失败"
                                })
                            }
                            conn.release();
                        })
                    }else{
                        //账号已存在
                        res.send({
                           code:555,
                           msg:"账号已存在"
                       })
                    }
                })
            })

        }
    }
}