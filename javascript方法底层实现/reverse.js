//将字符串反转输出。
function reverse(str) {
    var tmp = "";     //存放循环遍历字符串得到的每一个字符。
    for (var i = str.length - 1; i >= 0; i--) {
        tmp += str[i];
    }
    return tmp;
}
var reverse = reverse("abcdefg");
console.log(reverse);