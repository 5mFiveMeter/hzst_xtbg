module.exports = {
    //增
    addFile:"INSERT INTO `upload` (`file_id`,`name`,`path`,`time`,`size`,`type`) VALUES (?,?,?,?,?,?)",
    //删除
    deleteFile:"UPDATE `upload` SET `is_delete`=1 WHERE `id`=?"
}