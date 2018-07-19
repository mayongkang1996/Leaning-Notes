//判断字符串是否全由数字组成
function isNum(str){
    for(var i=0;i<str.length;i++){
        if(str[i]<="0"||str[i]>="9"){
            return false;
        }

    }
    return true;
}
var flag = isNum("1233444");
console.log(flag);