//将字符串使用指定的分隔符进行分割
function join(str,fuhao){
    var tmp="";
    for(var i=0;i<str.length-1;i++){
        tmp +=str[i]+fuhao;
    }if(i=str.length-1) {
        tmp += str[i];
    }
    return tmp;
}
var str2 = join("abcdefg","-");
console.log(str2)