var express = require('express');
var router = express.Router();
var depart_list = require("../mysql/depart/depart_list");




router.post("/getDeparts",function(req,res,next){
    depart_list.getDeparts(req,res,next)
})

router.post("/getDepartUser",function (req,res,next) {
    depart_list.getDepartUser(req,res,next)
})

module.exports = router;