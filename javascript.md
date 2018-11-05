##JavaScript BOM
1. 间歇调用和超时调用
- 超时调用需要使用window对象的setTimeOut()方法，接受两个参数：要执行的diamante和以毫秒表示的时间。其中，第一个参数可以使一个包汗JavaScript代码的字符串，也可以是一个函数
```
//不推荐的传递字符串
setTimeOut("alert('hello world!')", 1000);
//推荐的调用方式
setTimeOut(function(){
	alert("hello world!");
	},1000)
```

- 间歇调用：间歇调用和超时调用类似，但是会千兆指定的时间间隔重复执行代码，直至接卸调用被取消或者被页面卸载，设置间歇调用的方法是setInterval(),他接受的参数和setTimeOut()相同，要执行的代码和每次执行之前需要等待的毫秒数。
```
//不推荐的传递字符串
setInterval ("alert('hello world!')",10000);
//推荐的调用方式
setInterval(function(){
	alert("hello world");
}, 10000)
```

##客户端检测
1. 能力检测：又称特性检测，能力检测的目标不是识别特定的浏览器，而是识别浏览器的能力。基本模式如下：
```
if (Object.propertyInQuestion){
	//使用object.propertyInQuestion
}
```
2. 怪癖检测
目标是识别浏览器的特殊行为。
3. 用户代理检测
通过检测用户代理字符来确定实际使用的浏览器。在每次HTTP请求过程中，用户代理字符串是做为响应首部发送的，该字符串可以通过Javscript的navigator.userAgent属性访问。
电子欺骗：浏览器通过在自己的用户代理字符串中加入一些错误或误导性信息，来达到欺骗服务器的目的

##DOM
1. DOM（文档对象模型），针对HTML和XML文档的一个API(应用程序编程接口)。DOM描绘了一个层次化的节点树，允许开发人员添加、移除、和修改页面的某一部分。
2. 文档节点时每个文档的根节点，假设只有一个子节点<html>元素，可将其称之为文档元素
3. Node类型：DOM定义了一个Node接口， 该接口将由DOM中的所有节点类型来实现。这个Node接口在JavaScript中是作为Node类型实现的
**页面注释也是节点**

















a