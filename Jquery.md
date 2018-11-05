Jquery
一、Jquery概念
1. Jquery是一款优秀的JavaScript库，主要用来查询。同时使用JQuery
2. jQuery如何使用：
	- 下载jQuery库    下载地址：http://code.jquery.com/
	- 引入下载的jQuery库
	- 编写jQuery代码
3. jQuery的入口函数：
```
$(document).ready(function(){
	alert("hello world");
})
```

二、原生JS和jQuery的差异：
1. 加载模式不同：
	- 原生JS会等到DOM元素和图片加载完毕执行
	- jQuery会等到DOM元素但不会等到图片记载完毕执行
2. 执行模式不同：
	- 原生的JS如果编写了多个入口文件，则后写的会覆盖前面的
	- jQuery中如果编写了多个入口文件不会覆盖，会依次执行

三、jQuery接受参数
	- 接收一个函数
```
$(function(){
	alert("abc");
})
```
	- 接收一个字符串选择器
```
var $box1 = $(".box1");
```