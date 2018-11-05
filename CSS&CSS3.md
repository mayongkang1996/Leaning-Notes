#CSS&&CSS3


##CSS
一、CSS简介
	CSS指层叠样式表，定义如何显示HTML元素，存储到样式表中。

1. CSS规则主要由两个部分组成：选择器以及一条或多条声明。例如：
	h1 {color:blue;font-size:12px;}
	h1:     选择器，指需要改变样式的HTML元素
	color:  属性，希望设置的样式属性
	blue:   值
	
2. CSS声明以；结束，声明组以大括号{}括起来，为了使阅读性更强，可以每行只描述一个属性
3. CSS注释
	以"/*"开头，以"*/"结束。
	
二、CSS语法
1. CSS Id和class
如果要在HTML元素中设置CSS样式，需要在元素中设置"id"和"class"选择器。

  id选择器可以为标有特定id的HTML元素指定特定的样式，HTML元素以id属性来设置id选择器，CSS中id选择器以#来定义。如
```
#para1
{
	text-align:center;
	color:red;
}
```
  class选择器用于描述一组元素的样式，class选择器有别于id选择器，class可以在多个元素中使用，class选择器在HTML中以class属性表示，在CSS中，类选择器以一个"."号表示
2. CSS创建
	当读到一个样式表时，浏览器会根据它来格式化HTML文档。
	  插入样式表的方法：
	-  外部样式表：通过改变一个文件来改变整个站点的外观，每个页面使用`<link>`标签链接到样式表，在头部使用。（应用于多个页面）。
	-  内部样式表：当单个文档需要特殊的样式时，使用`<style>`标签在文档头部定义内部样式表。
	-  内联样式：当样式仅需在一个元素上应用一次时，使用内联样式，需要在相关的标签内使用style属性，style属性可以包含任何CSS属性。
	-  多重样式：如果某些属性在不同的样式表中被同样的选择器定义，n那么属性值将从更具体的样式表中被继承过来（继承没有的，已有的将外部属性舍弃）。
**多重样式优先级**
	内联样式 >内部样式 >外部样式 >浏览器默认模式
	如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。
3. CSS背景
CSS背景属性用于定义HTML元素的背景。
	-   background-color：    背景颜色
	-   background-image:     背景图像
	-  background-repeat:    背景图像及是否如何重
	-  background-attachment:背景图像是否固定或者随着页面的其余部分滚动。
	-  background-position:  设置背景图像的起始位置
4. CSS文本格式 
	文本颜色：颜色属性被用来设置文字的颜色
	文本对齐：文本排列方式是用来设置文本的水平对齐方式文本可居中或对齐到左或右，两端对齐。
	文本修饰：text-decoration属性来设置或删除文本的装饰。主要用来删除链接的下划线。
	文本转换：文本转换属性是用来指定在一个文本中的大写和小写字母。
	文本缩进：用来指定对文本的第一行的缩进。
	CSS文本属性大致如下：

| 属性 | 描述 |
|:--|:--|
| color | 设置文本颜色 |
| direction | 设置文本方向 |
| letter-spacing | 设置字符间距 |
| line-height | 设置行高 |
| text-align | 对齐元素中的文本 |
| text-decoration | 向文本中添加修饰 |
| text-indent | 缩进元素中文本的首行 |
| text-shadow | 设置文本阴影 |
| text-transform | 控制元素中的字母 |
| unicode-bidi | 设置或返回文本是否被重写 |
| vertical-align | 设置元素的垂直对齐 |
| white-space | 设置元素中空白的处理方式 |
| word-spacing | 设置字间距 |

5. CSS字体
	CSS字体属性定义字体、加粗、大小、文字样式。
	字体系列：font-family属性设置文本的字体系列。
	字体样式：主要用于指定斜体文字的字体样式属性。这个属性有三个值：
	-	正常：正常显示文本；
	-	斜体：以斜体字显示的文字；
	-	倾斜的文字：文字向一边倾斜。
	字体大小：font-size设置文本的大小。
	- 绝对大小：设置一个指定大小的文本，不允许用于在所有浏览器中改变文本大小。确定了输出的物理尺寸时绝对大小很有用
	- 相对大小：相对于周围的元素来设置大小，允许用于在浏览器中改变文字的大小。
	- 用em来设置字体大小
	- 使用百分比和EM组合设置字体大小
	所有CSS字体属性：

| 属性 | 描述 |
|:--|:--|
| font | 在一个声明中设置所有的字体属性 |
| font-family | 指定文本的字体系列 |
| font-size | 指定文本的字体大小 |
| font-style | 指定文本的字体样式 |
| font-variant | 以小型大写字体或者正常字体显示文本 |
| font-weight | 指定字体的粗细 |

6. CSS链接
链接样式：可以用任何的CSS属性
	链接的状态：
	-  a:link    ：正常，未访问过的链接
	-  a:visited ：用户已访问过的链接
	-  a:hover   ：当用户鼠标放在链接上时
	-  a:active  ：链接被点击的那一刻
**a:hover必须在a:link和a:visited之后，需要按照顺序才能看到效果，a;active必须在a:hover之后**
	文本修饰：text-decoration主要用于删除链接中的下划线。
	背景颜色：指定链接背景色。
7. CSS列表样式
	CSS列表属性作用如下：
	-  设置不同的列表项标记为有序列表
	-  设置不同的列表项标记为无序列表
	-  设置列表项标记为图像
	列表：在HTML中有两种类型的列表：
	-  无序列表：列表项标记用特殊图形
	-  有序列表：列表项的标记有数字或字母
	可以使用list-style-type指定列表项标记。如：
```
ul.a{list-style-type:circle;}
ul.b{list-style.type:square}
ol.c{list-style-type:upper-roman}
ol.d{list-style-type:lower-alpha}
``` 
所有的CSS列表属性：

| 属性 | 描述 |
|:--|:--|
| list-style |简写属性，将所有列表的属性设置于一个声明中 |
| list-style-image | 将图像设置为列表项标志 |
| list-style-position | 设置列表中列表项标志的位置 |
| list-style-type | 设置列表项标志的类型 |

8. CSS表格
	表格作用：是HTML表格更加美观
	表格边框：使用border属性指定CSS表格边框
	折叠边框：border-collapse属性设置表格的边框是否被折叠成一个单一的边框或隔开
	表格宽度和高度：width和height属性定义表格的宽度和高度
	表格文字对齐：表格中的文本对齐有水平对齐和垂直对齐两种方式
	-  水平对齐：text-align：right
	-  垂直对齐：vertical-align:bottom
	表格填充：使用td和th元素的填充属性
	表格颜色：在th中使用background-color:green；
	
9. CSS盒子模型
	所有的HTML元素可看作盒子，CSS盒子模型本质上是一个盒子，封装周围的HTML元素，包括边距、边框、填充和实际内容。盒模型允许我们在其他元素和周围元素之间的空白放置元素。
	元素的高度和宽度：
10. margin属性
  margin属性表示在一个声明中设置外边距属性，可以设置1-4个值。  在`<head>`标签中编写`<style>`标签，在这个标签中定义margin属性。margin{a,b,c,d}，其中a表示与上面的外边距，b表示与右边的外边距，c表示与下边的外边距，d表示与左边的外边距
11. CSS边框
	CSS边框属性允许指定一个元素的边框的样式和颜色。使用border-style属性定义边框的样式
	border-style的值：
	-  none：  默认无边框
	-  dashed：定义一个虚线边框
	-  dotted:定义一个虚线边框，比dashed虚线短，颜色淡
	-  solid： 定义实线边框
	-  double：定义两个边框，两个边框的宽度和border-width的值相同
	-  groove：定义3D沟槽边框，效果取决于边框的颜色值
	-  ridge：定义3D脊边框，效果取决于边框的颜色值
	-  inset：定义一个3D的嵌入边框，效果取决于边框的颜色值。
	-  outset：定义一个3D的突出边框，效果取决于边框的颜色值
 边框宽度
	通过border-width属性为边框指定宽度，值可以使用三个关键字thick、medium和thin。
 CSS边框属性

| 属性 | 描述 |
|:--|:--|
| border | 简写属性，用于把针对四个边的属性设置在一个声明。 |
| border-style | 设置元素所有边框的样式或者单独为各边设置 |
| border-width | 简写属性，为所有边框设置宽度 |
| border-color | 简写属性，设置所有边框课件部分的颜色 |
| border-bottom|简写属性，把下边框的所有属性设置在一个声明|
| border-bottom-color | 设置元素的下边框颜色 |
| border-bottom-style | 设置元素的下边框样式 |
| border-bottom-width | 设置元素的下边框的宽度 |
| border-left |简写属性，把左边框的所有属性设置在一个声明 |
| border-left-color | 设置元素左边框的颜色 |
| border-left-style | 设置元素左边框的样式 |
| border-left-width | 设置元素左边框的宽度 |
| border-right | 简写属性，将右边框的属性设置在一个声明中 |
| border-top | 简写属性，将上边框的属性设置在一个声明中|

12. CSS分组和嵌套选择器
分组选择器：
```
h1,h2,p
{
	color :green;
}
```
嵌套选择器

```
p        //为所有p元素指定一个样式。
{
	color:blue;
	text-align;
}
.marked    //为所有class="marked"的元素指定一个样式
{
	background-color:red;
}
.marked p  //为所有class="marked"元素内的的p元素指定一个样式
{
	color:white;
}
p.marked    //为所有class="marked"的p元素指定一个样式
{
	text-decoration:underline;
}

```
13. CSS Display与Visibility
	display属性设置一个元素应如何显示，visibility属性指定一个元素是可见还是隐藏。
	隐藏一个元素可以通过将display设置为"none"，也可以键visibility设置为"hidden"，但是第一种方法隐藏后不会占用布局空间，而第二种方法隐藏元素仍需占用与未隐藏之前一样的空间，会影响布局。
	
14. CSS Position
	position属性指定了元素的定位类型
	
	position属性有五个值：
	-  static：HTML元素的默认值，即没有定位，元素出现在正常的流中，静态定位的元素不会受到top、botton、left、right的影响。
	-  fixed定位：元素的位置相对于浏览器窗口是固定位置，即便窗口滚动也不会移动。fixed定位使元素的位置和文档流无关，因为不占据空间。
	-  relative定位：相对定位元素的定位是相对其正常位置。
	-  absolute定位：绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么他的位置相对于`<html>`。
	-  sticky定位:基于用户的滚动位置来定位。在position：relative于position：fixed定位之间切换
	重叠的元素：
	元素的定位与文档流无关，所以他们可以覆盖页面上的其他元素
```
img{
			position: absolute;
			top: 0px;
			left: 0px;
			z-index: -1;//表示img显示在下面，如果设置为1，则显示在上面。
		}
```
15. CSS Float
	CSS的float会使元素向左或向右移动，其周围的元素也会重新排列，往往用于图像，但他在布局时一样非常有用。
	浮动方式：元素只能左右移动而不能上下移动，一个浮动元素会金莲向左或向右移动，知道外边缘碰到包含框或另一个浮动框的边框为止，浮动元素之后的元素会围绕它，之前的元素不会受到影响。
	将几个浮动的元素放到一起，如果空间足够，它们将彼此相邻
	清除浮动-使用clear：元素浮动之后，周围的元素会重新排列，为了避免这种情况，使用clear属性
16. CSS布局
	-  元素居中对齐：要水平居中一个元素可以使用：`margio:auto`
	-  文本居中对齐：文本在元素内居中对齐，可以使用`text-align:center`
	-  图片居中对齐：`margin:auto`
	-  左右对齐:使用定位方式：position:absolute;属性来对齐元素。
	-  垂直居中对齐：使用`padding`
		-  水平和垂直都居中，可以使用`padding`和`text-align:center`
**绝对定位元素会被从正常流中删除，并且能够交叠元素**
		当使用`position`来对齐元素时，通常`<body>`元素会设置`margin`和`padding`，这样可以避免在不同浏览器中出现可见的差异
17. CSS组合选择符
在CSS3中包含了四种组合方式：
-  后代选择器（以空格 分隔）:包含在`<div>`标签中的`<p>`标签
-  子元素选择器（以大于号>分隔）：直接包含在`<div>`标签中的`<p>`标签
-  相邻兄弟选择器（以加号+分隔）：`<div>`标签之后的第一个`<p>`标签
-  普通兄弟选择器（以破折号~分隔）`<div>`标签后的所有`<p>`标签。

三、CSS伪类

CSS伪类是用来添加一些选择器的特殊效果。
	1. CSS伪类语法
```
selector:pseudo-class {property:value;}
```
		CSS类也可以使用伪类：
```
selector.class:pseudo-class {property:value;}
```
	2. anchor伪类
		伪类的名称不区分大小写：最典型的就是链接的四种状态（见上）
	
	3. 伪类和CSS类
		伪类和CSS类可配合使用。
	-  使用first-child伪类来选择父元素的第一个子元素
	-  使用`p > i:forst-child`来查找p元素中的第一个i元素。
	-  使用`p:firt-child i`来查找作为第一个子元素p元素中的所有i元素
**`<p>`必须是第一个标签，例如前面不能加`<h1>`等标签。**

**四、CSS导航栏**
1. 导航栏一般分为两种：垂直和水平，在一个网页的开发中，导航栏可以说是必不可少的。
```
<style>
ul{
		list-style-type:none;
		margin:0;
		padding:0;
}
</style>
<body>
<ul>
<li><a herf="url">主页</a></li>
<li><a herf="url">服务端</a></li>
<li><a herf="url">注册</a></li>
<li><a herf="url">登录</a></li>
</ul> 
</body>
```
这就是一个简单的导航栏。
2. 激活当前导航条实例：

		ul{                        //建立ul样式
		list-style-type: none;   //去掉列表前面的-
		margin: 0;               //去掉默认格式
		padding: 0;
		width: 200px;
		background-color:#f1f1f1 
		}
		li a{                      //对链接进行样式设置
		display: block;          //显示块元素，让整体变成可点击链接区域
		color:#000;
		padding: 8px 16px;
		text-decoration: none;   //去掉下划线
		}
		li a.active{               //对点击后的链接状态设置
		background-color: green;
		color: white;
		}
		li a:hover:not(.active){   //对没有点击的链接当鼠标停留在上面的时候的样式设置
		background-color: #555;
		color:white; 
		}
		</style>

3. 创建链接并添加边框。
在`<li>`或者`<a>`上添加`text-align:center`样式让链接居中
4. 全新高度的固定导航条
创建一个左侧导航栏可以添加滚动条，右侧内容滚动不会影响左边的内容。
`position :fixed`。设置``
5. 
