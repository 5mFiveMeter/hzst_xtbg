var express = require('express');
var router = express.Router();
var upload_list = require("../mysql/upload/upload_list")



router.post("/formData",function(req,res,next){
    upload_list.addFile(req,res,next)
})
router.post("/delete",function (req,res,next) {
    upload_list.deleteFile(req,res,next)
})

module.exports = router;