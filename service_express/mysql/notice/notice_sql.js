module.exports = {
    //公告列表
    get_list:"SELECT `notice_id`,`title`,`push_time`,`print_time`,`draft_man` FROM `notice` WHERE `is_delete`='0' LIMIT  ?,?",
    //公告总数
    get_count:"SELECT COUNT(*) FROM `notice`",
    //公告详情
    get_detail:"SELECT * FROM `notice` WHERE `notice_id`=?",
    //模糊查询
    get_search:function(start = "",end = "",key = ""){
       return "SELECT `notice_id`,`title`,`push_time`,`print_time`,`draft_man` FROM `notice` WHERE "+(start==""?" 1=1 ":" `push_time` >= "+start)+(end==""?" AND 1=1 ":" AND `push_time` <= "+end)+(key==""?" AND 1=1 ":" AND (`title` LIKE '%"+key+"%' OR `draft_man` LIKE '%"+key+"%')")+" ORDER BY `push_time` "
    },
    //假删除
    do_delete:"UPDATE `notice` SET `is_delete`=1 WHERE `notice_id`=? ",
    //新增公告
    add_notice:"INSERT INTO `notice` (`notice_id`,`title`,`content`,`print_time`,`push_time`,`attach`,`draft_man`,`verify_man`,`draft_time`) VALUES (?,?,?,?,?,?,?,?,?) "
}