//将指定符号分割的字符串转换成数组。
function split(str,fuhao){
    var arr = [];
    for(var i=0;i<str.length;i++){
        if(str[i]!==fuhao){
            arr.push(str[i]);
        }
    }
    return arr;
}
var split = split("a/b/c/d/e/f","/");
console.log(split);