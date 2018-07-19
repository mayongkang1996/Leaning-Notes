//查找字符串中是否包含另外一个字符串
function search(str1,str2) {
    for(var i=0;i<str1.length;i++){
        if(str2[0]==str1[i]){           //判断str2中第一个元素出现在str1中的位置
            for(var j=1;j<str2.length;j++){
                if(str2[j]!=str1[i+j]){  //判断第一个元素之后相同的元素是否全部相同
                    break;
                }
            }
            if(j==str2.length) {
                return true;
            }
        }
    }
    return false;
}
var flag = search("abcdefg","ef");
console.log(flag);