module.exports = {
    //登录
    login : "SELECT * FROM `users` WHERE `account_num`=?",
    //注册
    register : "INSERT INTO `users` (`name`,`sex`,`account_num`,`leader_name`,`join_time`,`work_phone`,`depart_name`," +
        "`post_name`,`role_type`,`role_level`,`contract_first`,`promote_time`,`contact_phone`,`ID_card`,`QQ`,`email`," +
        "`nation`,`political_face`,`birth_day`,`graduation_time`,`education`,`graduation_school`," +
        "`graduation_major`,`native_place`,`address`,`password`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    //检测账号是否存在
    get_account:"SELECT * FROM `users` WHERE `account_num`=? "
}