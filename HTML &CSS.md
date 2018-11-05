#HTML&CSS视频学习
1. `<head>`标签包含`<title>`、`<meta>`和`link`标签，不会显示在网页上的内容。`<link>`标签可包含图片，注明type和rel。例如：
```
<link href="./images/1.jpg" type="image/x-icon" rel="shortcut icon">
```
2. HTML标签组成部分，包含属性和实体  
`<marquee>`标签标示滚动条。
3. HTML使用CSS的三种形式：
	- 内联方式
		在HTML的标签中使用style属性来设置HTML样式
		格式：`<标签名 style="属性：值；属性：值...">被修饰的内容</style>`
		特点：仅作用于本标签。
	- 内部方式
		在head标签中使用`<style type="text/css">...</style>`标签来设置CSS样式
		特点：作用于当前整个页面。
	- 外部导入方式
	在`<head>`标签中使用`<link>`标签来导入另外一个CSS文件，
	格式`<link href="" type="" rel="stylesheet"/>`
	还可以使用import在style标签中导入css文件，如：
	```
	<style type="text/css">
	@import "style.css";
	</style>
	```
	特点：作用于整个网站。
	选择符：
	- 标签选择器
	- 类选择器
	- id选择器
选择符的优先级：
	从大到小：ID选择器>类选择器>标签选择器>html属性