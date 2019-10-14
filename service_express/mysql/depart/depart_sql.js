module.exports = {
    //查询所有部门
    get_depart:"SELECT * FROM `depart`"
    //查询部门下人员
    ,get_depart_user:"SELECT `name`,`account_num`,`depart_id`,`depart_name` FROM `users` WHERE `depart_id`=? "
}