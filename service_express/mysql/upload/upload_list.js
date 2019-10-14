var mysql = require("mysql");
var db_conf = require("../config");
var db_sql = require("./upload_sql");

var db_pool = mysql.createPool(db_conf);

var formidable = require("formidable");
var uuid = require("node-uuid");


module.exports = {
    //新增文件
    addFile:function(req,res,next){
        var form = new formidable.IncomingForm()
        form.encoding = 'utf-8';
        form.uploadDir = "./public/upload"
        form.keepExtensions= true
        form.maxFieldsSize = 10 * 1024 * 1024
        form.parse(req,function (err,filed,file) {
            var _file = file.file
            var file_id = uuid.v1();
            var file_name = _file.name;
            var file_size = _file.size;
            var file_path = _file.path.split("public")[1];
            var file_type = _file.type;
            var file_time = (new Date()).getTime();
            db_pool.getConnection(function(err,connection){
                connection.query(db_sql.addFile,[file_id,file_name,file_path,file_time,file_size,file_type],function(err,rst){
                    err && console.log(err);
                    if(rst && rst.affectedRows>0){
                        res.send({
                            code:666,
                            msg:"上传成功",
                            data:{
                                name:file_name,
                                time:file_time,
                                size:file_size,
                                path:file_path,
                                id:file_id
                            }
                        })
                    }else{
                        res.send({
                            code:555,
                            msg:"上传失败"
                        })
                    }
                    connection.release();
                })
            })
        })
    },
    //删除文件
    deleteFile:function(req,res,next){
        var params = req.query || req.params;
        if(params.id){
            db_pool.getConnection(function(err,connection){
                connection.query(db_sql.deleteFile,[params.id],function(err,result){
                    if(result && result.affectedRows>0){
                        res.send({
                            code:666,
                            msg:"删除成功"
                        });
                    }
                    connection.release()
                })
            })
        }
    }
}