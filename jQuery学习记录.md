##jQuery学习
1. jQuery语法

```
$(selector).action()
$：定义jQuery
selector： 选择符，查询和查找HTML元素
action： action()执行对元素的操作
例如：
$(this).hide()  :  隐藏当前元素
$("p").hide() :    隐藏所有段落
$(".test").hide(): 隐藏所有class=test的所有元素
$("#test").hide(): 隐藏所有id=test的所有元素
```

**所有的jQuery函数位于document ready 函数中，是为了防止文档在完全加载之前就运行函数，操作可能失败**
```
S(document).ready(fuction(){
	jquery function go here
})
```

2.jquery选择器















