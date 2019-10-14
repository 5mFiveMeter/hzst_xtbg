var express = require('express');
var router = express.Router();
var notice_list = require("../mysql/notice/notice_list");




router.post("/getList",function(req,res,next){
    notice_list.getList(req,res,next);
})
router.post("/getDetail",function(req,res,next){
    notice_list.getDetail(req,res,next);
})
router.post("/getSearch",function(req,res,next){
    notice_list.getSearch(req,res,next);
})
router.post("/doDelete",function(req,res,next){
    notice_list.doDelete(req,res,next);
})
router.post("/addNotice",function(req,res,next){
    notice_list.addNotice(req,res,next);
})

module.exports = router;