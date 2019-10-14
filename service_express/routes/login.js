var express = require('express');
var router = express.Router();
var login_list = require("../mysql/login/login_list");




router.post("/login",function(req,res,next){
    login_list.login(req,res,next)
})

router.post("/register",function (req,res,next) {
    login_list.register(req,res,next)
})

module.exports = router;