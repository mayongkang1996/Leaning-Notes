PHPCMS学习
一、站点管理
1. 进入设置—站点管理-选择默认站点，点击修改，可以修改站点名、域名、模板风格等。
2. 模块管理对应htdocs目录下的`phpcms/modules`文件夹，删除模块直接删除对应的文件夹，增加模块的话需要新建文件夹。
3. phpcms/templets 中放的是前台模板
4. phpcms/templets文件夹目录结构分析：
	一级目录：
		- default    前台默认模板
		- index.html 空页面，防止显示目录结构
如何需要自己新建模板，可在此目录下新建一个文件夹，目录名称就是模板名称
	二级目录：（可在模块/模块管理下查看对应模块）
		- announce   公告
		- commment   评论
		- content    内容模块
		- formguide  表单向导
		- link       友情链接
		- member     会员
		- messsage   短消息
		- mood       新闻心情
		- pay        支付
		- poster     广告模块
		- search     搜索
		- special    专题
		- vote       投票
		- wap        手机门户
		- tag        标签向导
	content三级目录：
		- category_download.html  频道页
		- show.html 内容页
在语法中，如果引用的是常量直接用{a}就可以，如果是变量，需要加{$a}
使用{loop}{/loop}循环遍历
5. 在phpcms中，头部、内容和尾部是分开的，所以需要在index.html中使用一下语法引入头部和尾部文件
```
头部加入：
{ template "content", "header"}
尾部加入：
{ template "content", "footer"}
```

二、PHP面向对象
1. 什么是对象：
对象就是一个东西或者一个规则
2. 面向对象
	面向这个对象你就可以操作它（对象），从而帮助你完成任务
3. 类
通过类生成对象
先写类 -> 类变成对象 -> 用这个对象
类就是类型，是对象的描述
4. 如何声明一个类
一个对象包含属性（变量）和方法（函数）
类{
	成员属性  使用变量写
	成员方法  使用函数去写
}
5. phpcms中类和对象的语法：
	- 拿到类
	- 创建这个类的对象
	- 通过对象访问对象中的成员
```
调用方法：
$对象名->属性
$对象名->方法()
```
final 标记的方法不能被子类重写，也就是不让这个方法扩展 标记的类不能被子类继承
构造方法当创建一个子类的时候必须被使用：
```
class link extends admin{
	function::_construct(){
		...
	}
}
```

三、MVC模式：
1. 将项目分成三种模式：
	项目-》模块组成-》MVC组成-》控制器组成-》操作组成
模块：例如友情链接
操作：添加、删除、修改、查看、分类
每个操作由步骤组成，步骤就是调用模型和视图
2. 主入口文件：
```
http://www.aaa.com/index.php?m=模块名&c=控制类&a=操作
典型的MVC模式，其中index.php是主入口文件，无论访问那个地址都不会变
```
3. 控制器文件
创建在modules下文件夹为模块名下的*.php文件
4. 前台模块和后台模块的文件名
前台模块和后台模块一般都放在phpcms/modules目录下，但是前台模块一般都用index.php命名，后台模块一般与文件名相同。

5. phpcms框架的入口文件
`phpcms/base.php`是phpcms框架的入口文件 
在base.php文件中有一个叫`pc_base`的函数，函数中有一个方法叫做`create_app`，这个方法加载了系统类`application`,application在`libs/class/application.php`在这个函数中又调用了参数的类：`param.php`,这个类就在当前目录。
6. 后台的类必须继承admin
7. phpcms的数据库连接地址：localhost:8080/phpmyadmin.php