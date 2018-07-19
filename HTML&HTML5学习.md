#HTML
一、HTML简介
1. 初识HTML
		HTML指的是超文本标记语言HyperText Markup Language,它不是一种编程语言，而是标记语言。HTML文档也叫做web页面。
2. HTML标签
		HTML标签是由<>包围的关键词，如<html>，通常标签是承兑出现的，第一个标签是开始标签如<html>，第二个标签是结束标签如</html>。
3. HTML元素
		包含标签以及文本的元素叫做HTML元素，如<p>这是一行字</p>。
4.HTML结构
```
<!DOCTYPE html>         HTML声明
<html>                  HTML文档开始
<head>                  头部
<meta charset="UTF-8">  设置编码为UTF-8
<title>标题</title>     
</head>
<body> 
<script>
JavaScript语言
</script>
<p>这是文本内容</p>
</body>            
</html>                 HTML文档结束
```



二、新建我的第一个HTML文档
	1. 打开编译器（本人使用的是Sublime Text3），新建一个文件，命名为FirstHtml.html,注意命名时最好加上后缀名，如果不加的话，有些HTML快捷键无法使用。
	2. 键入以下代码：
```
!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8">
	<title>菜鸟教程(runoob.com)</title>
	</head>
	<body>
		<h1>My first title!</h1>
		<p>My first the paragraph</p>
	</body>
</html>
```
由此编写好了第一个HTML文档，点击保存，查看保存位置，双击直接在浏览器中打开，如果使用的是谷歌浏览器，点击右上角的三个竖立的.符号，打开点击更多工具，点击开发者工具，可对HTML代码进行调试。



三、 HTML基本语法及格式
		1. 基本标签
```
<h1>标题标签</h1>     共有h1-h6六个标题标签
<p>段落标签</p>
<a herf="www.baidu.com">链接标签</a>
<img src="" width="" heigth="" /> 可设置宽度和长度的图片标签
<br>       换行
<aside>    定义页面的侧边栏内容
<audio>    定义音频内容
<button>   按钮
<caption>  定义表格标题
<command>  定义命令按钮，比如单选复选框按钮
<dialog>   定义对话框，比如提示框
<div>      定义文档中的节
<footer>   定义section或者document的页脚
<form>     定义HTML文档的表单
<input>    定义输入控件
<img>      定义图片
<link>     定义文档与外部资源的关系
<map>      定义图像映射
<nav>      定义导航链接的部分
<section>  定义文档中的节，比如章节、页眉、页脚或者文档中的其他部分
<script>   定义客户端脚本
<select>   定义选择列表
<span>     定义文档中的节
<table>    定义表格
<tr>       定义表格中的行
<td>       定义表格中的单元
<th>       定义表格的表头单元格
<ul>       定义无序列表
<hr>       定义水平线
文本格式标签
<b>        加粗
<em>       着重文字
<i>        斜体
<small>    小号字
<strong>   加重语气
<sub>      下标
<sup>      上标
```
**<!--表示注释-->**
2. 基本语法
html元素以开始标签起始(<p>)，以结束标签终止(</p>),内容就是标签之间的内容，且大多数HTMl元素具有属性。
	1）属性
		属性一般以键值对的形式出现，如name="value"，总是定义在HTML元素的开始标签中。
	2）标题
		<h1>是最大的标题，<h6>是最小的标题
		 使用标题一般将h1用作主标题，其后是h2，再其次是h3，以此类推。
		 HTML中水平线可用<hr />表示。
	3）段落
		 HTML中通过标签<p>来定义段落，使用<br />标签表示换行。
	4）样式
		 使用style属性来增加HTML的样式dfn可以使用在标题中。
		 使用address标签定义文档或者文章的联系信息，使信息以斜体表示；<bdo>可以改变文字输出方向。
	5）HTML计算机代码
		  HTML <kbd>元素定义键盘输入；
		  HTML <samp>元素定义计算机输出示例；
		  HTML <code>元素定义编程代码示例；
	    <code> 元素不保留多余的空格和折行；
	    <var>元素定义数学变量；
	    <pre>定义预格式化文本。
 6）HTML超链接
	    超链接可以是一个字，一张图片，或者一组词，可以通过点击超链接来跳转到新的文档或者当前文档中的某个部分。
	    使用<a>标签定义一个超链接格式如下：
```
<a herf="">点击</a>
```
			标签中间的“点击”是可以被点击的文本，当点击“点击”时，会跳转到herf路径中。
	    HTML链接-name属性：name属性规定锚的名称，从而创建书签，书签不会以任何特殊方式显示，对读者不可见，使用锚时，可以创建直接跳转到该命名锚的链接，这样就可以无需重复查找。
 7）图片
		 <img src="" alt="">
 8）表格
		 <table border=""> border中的值表示表格线的宽度
		 表格的基本格式：
		 <table>
			 <tr>
				 <td>
				 </td>
			 </tr>
		 </table>
  9）响应式Web设计
		响应式设计也叫做RWD，指可以改变尺寸的网页，对于平板和移动设备是必须的，设计的方法有两种：
		第一种是直接使用.header定义class内容，在进行调用。第二种是使用Bootstrap框架，使用现成的CSS框架,在<head>标签中添加如下代码加载Bootstrap框架：
```
<link rel="stylesheet"  href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
```		 
  10）框架标签
	  通过使用框架标签，可以在同一个浏览器串口中显示不止一个页面，每份HTML文档都可称之为一个框架，并且每个框架都独立于其他的框架。但是使用框架后开发人员必须同时跟踪更多的HTML文档，而且很难打印整个页面。
	  框架标签为<frameset>定义如何将窗口分隔为框架，每个frameset定义了一系列的行或列，rows/columns得知规定了每行或每列占据屏幕的面积。
```
	<frameset cols="25%,75%">
		<frame src="frame_a.html">
		<frame src="frame_b.html">
	</frameset>
```
定义了一个页面，这个页面设置了一个两列的框架集，第一列占据页面的25%，第二个页面占据75%。，框架中包含两个页面frame_a.html、frame_a.html，分别占据整个页面的25%和75%。
假如一个框架有可见边框，用户可以拖动边框来改变它的大小，为了避免这种情况发生，可以在<frame>标签中加入：noresize="noresize"
为不支持框架的浏览器添加noframes标签。

**不能将<body></body>标签与<frameset></frameset>标签同时使用！不过，假如加入了包含文本的noframes标签，就必须将这段文字嵌套于<body></body>标签内！**
	11）内联框架
内联框架表示在一个网页的页面内显示另外一个网页的页面。
 添加一个内联框架的语法：

```
<iframe src="url"></iframe>
		url表示需要内联在页面中的网页的地址
<iframe src="url" width="200" height="200"></iframe>
```

width、height表示内联页面的宽度和高度，有两种表示方法，第一种直接用数字表示，因为他的默认单位就是像素，所以px可加可不加；第二种是通过百分比来设置，例如height=75%。
iframe内联的框架默认会加上边框，如果不需要使用边框，可以使用frameborder属性来取消边框线，用法如下：

```
<iframe src="url" frameborder="0"></iframe>
```
使用`<iframe>`作为连接的目标,在内联框架中的某一个页面加入name属性作为标识，再创建一个链接指向需要显示的页面，用target属性标识，链接的target属性必须引用iframe的name属性。例如：
```
<iframe src="demo_iframe.html" name="

iframe_a></iframe>
<a herf="www.baidu.com" target="iframe_a">切换页面</a>
```



四、HTML脚本
	JavaScript是的HTML页面具有更强的动态和交互性。
1. HTML script元素
	`<script>`”标签用于定义客户端脚本，`<script>`元素既可包含脚本语句也可通过src属性指往外部脚本文件。必须的type属性规定脚本的MIME类型，JavaScript常用语图片操作、表单验证以及内容动态更新。
2. `<noscript>`标签
	`<noscript>`标签提供无法使用脚本时的替代内容，比如浏览器禁用脚本或者浏览器不支持客户端脚本时；`<noscript>`元素可包含普通HTML页面的body元素中能够找到的所有元素，只在浏览器禁用或不支持脚本时，才会显示`<noscript>`中的内容。



五、HTML表单
	1. form元素
	“form” 元素定义HTML表单，而HTML表单用于搜集不同类型的用户输入
	2. input元素
“input”元素是最重要的表单元素，根据type属性的不同主要有三种形态：
```
<input type="text">     定义文本输入框
<input type="radio">    定义单选按钮
<input type="submit">   定义提交按钮
```
	3. action属性
	action属性定义在提交表单时执行的动作，向服务器提交表单的通常做法是使用提交按钮。
	4. Method属性
	method属性规定在提交表单时所用的HTTP方法（GET或POST）例如：
```
<form action="page.php" method="GET">
或
<form action="page2.php" method="POST>
```
	
	5. Name属性
		如果要正确的提交一个输入字段，必须设置一个name属性，如果不设置，则不会被提交。
	6. 用`<fieldset>`组合表单数据
	fieldset组合表单中的数据，`<legend>`元素为fieldset元素定义标题。

	7. HTML Form属性

```
<form action="page.php" method="GET"></form>
```
<form>属性列表：

| 属性            | 描述              |
| -------------- | -:|
| action-charset | 规定在被提交表单中使用的字符集 |
|     action |   规定提交表单的地址（URL）|
|autocomplete    | 规定浏览器应该自动完成表单|
|enctype     | 规定被提交数据的编码  |
|method   |规定在提交表单时所使用的HTTP方法|
|name         |规定识别表单的名称     |
|novalidate      | 规定浏览器不验证表单         |
|target          |规定action属性中地址的目标    |

	8. `<selsect>`元素
		定义下拉列表，`<optin>`元素定义待选择的选项	

	9.`<textarea>`元素
		定义多行输入字段（文本域）
	10.`<button>`元素
		定义可点击的按钮



六、HTML输入
1.`<input>`元素的输入类型
	
	text       ：供文本输入的单行输入字段。
	password   ：定义输入密码字段。
	submit     ：定义提交表单手至表单处理程序的按钮。
	radio      ：定义单选按钮。
	checkbox   ：定义复选框。
	button     ：定义按钮。
	number     ：永不包含数字值的输入字段可以对数字进行限制。
	date       ：用于应该包含日期的输入字段。
	color      ：用于应该包含颜色的输入字段。
	range      ：用于应该包含一定范围内的值得输入字段。
	month      ：允许用户选择月份和年份。
	week       ：允许用户选择周和年。
	time       ：允许用户选择时间。
	datetime   ：允许用户选择日期和时间。
	datetime-local：允许用户选择日期和时间（无时区）。
	email      ：用于应该包含电子邮件地址的输入字段。
	search     ：用于搜索字段。
	tel        ：用于应该包含电话号码的输入字段。
	url        ：用于应该包含URL地址的输入字段。
	
2.HTML input属性
 value     ：value属性规定输入字段的初始值
 readonly  ：表示输入指端只读不能修改
 disable   ：输入字段是禁用的，被禁用的属性不可用且不可点击，也不会被提交
 size      ：size属性规定输入字段的尺寸
 maxlength ：规定输入字段允许的最大长度
 autofocus ：布尔属性，如果设置，当页面加载时`<input>元素自动获得焦点。
 height    ：设置`<input>`元素的高度
 width     ：设置`<input>`元素的宽度
 list      ：引用`<datalist>`元素中包含了`<input>`元素的预定义选项
 min max   ：规定`<input>`元素的最小值和最大值
 step      ：规定输入元素的合法数字间隔
 required  ：规定在提交表单前必须填写的字段。
 
 #XHTML
 一、XHTML和HTML的差异：
		1.XHTML元素必须被正确的嵌套
		2.XHTML元素必须被关闭，空标签也必须被关闭
		3.标签名必须被小写
		4.XHTML文档必须拥有根元素
 二、XHTML语法
 
 1.语法规则：
	 1）属性名称必须小写
	 2）属性值必须加引号
	 3）属性不能简写
	 4）用Id属性代替name属性
	 5）XHTML DTD定义了强制使用的HTML元素
 
 2.XHTML结构
 在一个完整的XHTML文档中， `<!DOCTYPE ...>`是必须使用的
 有三个主要部分：
	 1）DOCTYPE
	 2）Head
	 3）Body
	 
#HTML5
一、HTML5视频
1. 如何在HTML5中显示视频
```
<vidio src="movie.ogg" controls="controls">
controls属性供添加播放、暂停和音量控件。
<video>也可设置宽度和高度属性
```
2. `<video>`标签的属性：
```
autoplay   视频就绪后马上播放
controls   向用户显示控件，比如播放按钮
height     设置视屏播放器的高度
loop       当媒介文件完成播放后再次开始播放
preload    视频在页面加载时进行加载，并预备播放
src        要播放的视频的URL
width      设置视频播放器的宽度
```

3. 使用DOM控制HTML`<video>`视频播放
HTML5`<video>`-方法、属性以及事件

|方法|   属性|事件|
|--------|:-----:|--:|
|play()|currentSrc|play|
|pause()|currentTime|pause|
|load()|videoWidth|progress|
|canPlayType|videoHeight|error|
||duration|timeupdate|
||ended|ended|
||error|abort|
||paused|empty|
||muted|emptied|
||seeking|waiting|
||volume|loadedmetadata|
| |height| |
| |width | |

二、HTML拖放
拖放是指抓取对象以后拖到另一个位置。
1. 实现拖放的步骤
```
a)设置元素为可拖放
	<img draggable="true" />
b)定义拖放元素后发生的事件
	function drag(ev){
		ev.dataTransfer.setData("Text",ev.target.id);
	}
c)放到什么地方？
	event.preventDefault()
d)进行放置
当放置被拖数据时，发生drop事件
function drop(ev){
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById("data"));
}
```
2. HTML5画布
	canvas元素用于在网页上绘制图形，画布是一个矩形区域，可以控制其每一像素，在HTML5中，通过canvas元素使用JavaScript在网页上绘制图像。

```
	a）创建Canvas元素
	<canvas id="myCanvas" width="200" height="100"></canvas>
	b）通过JavaScript来绘制
		<script type="text/javascript">
			var c=document.getElementById("myCanvas");//使用id寻找canvas元素
			var cxt=c.getContext("2d");//创建context对象
			cxt.fillStyle="#FF0000";//染成红色
			cxt.fillRect(0,0,150,75);//设置形状、尺寸和位置
		</script>
	
```
3. SVG
	SVG指可伸缩矢量图形，采用XML格式定义用于网络的基于矢量的图形，SVG图像在放大或者改变尺寸的情况下其图形质量不会有损失，他是万维网的标准。
	SVG于canvas的区别：

| canvas | SVG |
|:--|:--|
| 以来分辨率 |不依赖分辨率  |
| 不支持事件处理器 | 支持事件处理器 |
| 弱的文本渲染能力 | 最适合带有大型渲染区域的应用程序 |
| 能够以.png或.jpg保存结果图像 |复杂度奥会减慢渲染速度  |
| 最适合图像密集型游戏许多对象都会被频繁重绘| 不适合游戏应用|

4. HTML5地理定位
	HTML5 Grolocaton用于定位用户的位置。使用的是getCurrentPosition（）来获得用户的位置
5. HTML5 Web Worker
	web worker是运行在后台的JavaScript，不会影响页面的性能。
```
创建一个Web Worker：
	1） 检测用户的浏览器是否支持Web Worker
	if(typeof(Worker)!=="undefined")
	{
	//Yes!Web Worker support!
	//some code
	else(){
		//sorry,No web worker support...
	}
	}
	2) 创建web worker文件
	var i = 0;
	function timedCount(){
	i=i+1;
	postMessage(i);//用于向HTML页面传回一段消息
	setTimeout("timedCount()",500);
	}
	timedCOunt();
	3） 创建Web Worker对象
	有了web worker文件之后，需要在HTML页面调用，先检测是否存在worker，如果不存在，创建一个新的web worker，然后运行demo_workers.js:
	if(teyeof(w)=="undefined"){
		w=new Worker("demo_workers.js");
	}
	创建完web worker后，我们就可以从web worker发生和接受消息了。
	向web worker添加一个onmessage事件监听器：
	w.onmessage=function(event){
		document.getElementById("result").innerHtML=event.data;
	}
	当web worker传递消息时，会执行事件监听器中的代码。event。data中存有来自event.data的数据。
	4） 终止Web Worker
	当创建web worker对象后，它会继续监听消息（及时外部脚本完成）直到其被终止为止，如需终止web worker，并释放浏览器/计算机资源，使用terminate()方法：
	w.terminate();
```
6. HTML5服务器发送事件
	HTML5服务器发送事件允许网页获得来自服务器的更新。
	1）Server-Sent事件-单向消息传递
		Server-Sent事件指的是网页自动获取来自服务器的更新
	2）接收Server-Sent事件通知
		EventSource对象用于接收服务器发送事件通知。
	3）检测Server-Sent事件支持
```
	if(typeof(EventSource)!=="underfined"){
		//yes,you browse is support Server-Sent events!
	}
	else{
		//yes,you browse dose not support Server-Sent events!
	}
```
	4）服务器端代码
	为了让事件能够运行，还需要能发送数据更新的服务器，将“Content-Type”报头设置为“text/event-stream”。
	5）EventSource对象

| 事件 |描述  |
|:--|:--|
| open | 当通往服务器的连接被打开 |
| onmessage | 当接收到消息 |
| onerror | 当错误发生 |	