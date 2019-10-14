var mysql = require("mysql");
var db_conf = require("../config");
var db_sql = require("./depart_sql");

var db_pool = mysql.createPool(db_conf);

module.exports = {
    //查询所有部门
    getDeparts(req,res,next,clbk){
        var params = req.body;
        db_pool.getConnection(function(err,conn){
            conn.query(db_sql.get_depart,function(err,rst){
                err && console.log(err);
                if(rst){
                    if(clbk){
                        clbk(rst);
                    }else{
                        res.send({
                            code:666,
                            msg:"查询成功",
                            data:rst
                        })
                    }
                }
                conn.release();
            })
        })
    }
    //查询部门及人
    ,getDepartUser(req,res,next){
        var params = req.body;
        var _that = this
        this.getDeparts(req,res,next,async function (depart_arr) {
            for(let i =0 ;i<depart_arr.length;i++){
                depart_arr[i].users = await _that.getUserByDepart(depart_arr[i].depart_id);
            }
            res.send({
                code:666,
                msg:"查询成功",
                data:depart_arr
            })
        })
    }
    //根据部门id查询部门下人员
    ,getUserByDepart(id){
        return new Promise(((resolve, reject) => {
            db_pool.getConnection(function(err,conn){
                err && reject(err);
                conn.query(db_sql.get_depart_user,[id],function(err,rst){
                    err && reject(err);
                    if(rst){
                        resolve(rst)
                    }else{
                        reject()
                    }
                    conn.release();
                })
            })
        }))
    }
}