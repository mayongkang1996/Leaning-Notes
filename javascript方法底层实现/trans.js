//将一个字符串转换为英文表达式
function trans(str) {
    var tmp = "";
    var str2 = "";
    for (var i = str.length - 1; i >= 0; i--) {      //判断需要给那个数字开始加"，"
        if ((str.length - 1 - i) % 3 == 2) {
            tmp += str[i] + ",";
        } else {
            tmp += str[i];
        }
    }
    if (tmp[tmp.length - 1] == ",") {                   //判断最后一位是否为"，"，且将字符串反向输出。
        for (var j = tmp.length - 2; j >= 0; j--) {     //若果最后是"，"不打印最后一位
            str2 += tmp[j];
        }
    } else {
        for (var j = tmp.length - 1; j >= 0; j--) {      //如果不是，则全部打印
            str2 += tmp[j];
        }
    }
    return str2;
}
var trans = trans("abcdefghl");
console.log(trans);