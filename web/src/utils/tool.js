export default {
  //毫秒时间戳格式化
  formatStamp:function(target){
    if(!target){return "";}
    var time = new Date(Number(target));
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var hours = time.getHours();
    var mins = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    var sens = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    return year + "/" + month +"/" + day + " " + hours + ":" + mins + ":" + sens;
  }
}
