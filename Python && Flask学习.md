Python && Flask学习
##安装Anaconda软件 点击environment，新建一个flask，点击三角符号。
##安装flask
```
pip install Flask;
```
##安装pycharm
修改设置中的flask project改为本地配置环境，选择合适的环境。（最好3.5以上的版本）
##app.py文件详解
```
from flask import Flask    //导入Flask类
import json                //导入json包（本文要用到，默认没有）
app = Flask(__name__)  //创建Flask类的实例 第一个参数应该是应用程序或者包的名称。   这个py文件作为应用程序或模块导入名称是不同的（'__main__'与实际导入名称相对），这是必须的，以便Flask知道在哪查找模板、静态文件等。
@app.route('/')     //建立路由，告诉flask应该触发函数的url
def helloworld()    //定义一个方法准备接受数据
	obj = {'name':"zhangsan"} //导入json数据
	return json.dumps(obj)  //将对象转换成数据
```

##静态文件
动态web应用程序需要静态文件，在开发期间，可以在`/static`中找到
```
url_for('static', filename='style.css')  //该文件必须保存在static/style.css中。
```
##渲染模板
在Python中，可以使用`render_template()`方法，我们需要提供模板的名称以及作为关键字参数传递给模板引擎的变量，例如：
```
from flask import render_template

@app.route('/hello/')
@app.router('/hello/<name>')
def hello(name=None):
    return render_template('hello.html',name=name)  //Flask将在templates文件夹中查找模板，如果你的应用程序是一个模板，那么该文件夹就在模板的旁边
```
假设上下文是处理线程，一个请求寄来，Web服务器决定生成一个新线程，，当flask启动其内部请求处理时，它会确定当前线程是活动上下文，并将当前应用程序绑定到上下文。
**由于没有请求对象，依赖于请求对象的代码会突然中断，解决方案是自己创建一个请求对象并将其绑定到上下文**
##重定向和错误

1. 要将用户重定向到另一个端点，可以使用redirect()功能，要使用错误代码提前终止请求，使用abort()函数；

```
from flask import abort, redirect, url_for

@app.route('/')
def index():
    return redirect(url_for('login'))
    
@app.route('/login')
def login():
    abort(401)
    this_is_never_executed()
```

2. python条件循环判断
python条件判断语句的格式一般为：

```
if <条件判断1>:
	<执行1>
elif <条件判断2>：
	<执行2>
elif <调件判断3>：
	<执行3>
else:
	<执行4>
```
if语句执行有个特点，从下往上判断，如果在某个判断上是true，把该判断对应的语句执行后，就忽略剩下的elif和else。
3. 切片
	- 取一个数组的前三个元素：L[0:3]
假设有一个数组L，L有五个元素，取出前三个元素使用表达式：L[0:3]表示从索引0开始取，直到索引3为止，但不包括索引3.如果第一个索引是0，还可以省略。也可以对数组进行倒数切片，记住倒数第一个元素的索引是-1。
	- 根据步长选取数据，L[0:10:2]表示0-10之间步长为2的数据即0，2，4，6，8

##列表生成式

1. 列表生成式是Python内置的非常简单但却十分强大的可以用来创建list的生成式。
```
例如：
生成list[1,2,3,4,5,6,7,8,9,10],可以使用list(range(1,11))
生成[1*1,2*2,3*3,4*4,...10*10]:
方法一：使用循环
L = []
for x in range(1,11):
	L.append(x * x)
print(L)
方法二：使用列表生成式
[x * x for x in range(1,11)]
```
2. 生成器(generator)
列表生成式可以直接创建一个列表，但是，受到内存限制，列表容量是有限的，而且创建一个包含100万个元素的列表，不仅占用很大的空间，而且如果只用前几个元素的话会造成空间的浪费，所以，如果列表元素可以按照某种算法推算出来，那我们是否可以再循环的过程中不断推算出后续的元素，这样就不必创建完整的list，从而节省大量的空间，在python中，一边循环一边计算的机制叫做生成器：generator
3. 创建生成器的方法：
	- 直接把一个列表生成式的[]改成()，就创建了一个generator
	- 定义yield关键字
```
例如：
def fib(max):
	n, a, b = 0, 0, 1
	while n < max:
	yield b
	a, b = b, a+b  相当于求a+b，a表示第一个元素，b表示第二个 
	n = n + 1
return 'done'
```
generator和函数的执行流程不一样，函数是顺序执行，遇到return语句或者最后一行函数语句就返回，编程generator函数，在每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句继续执行。
生成器不但可以作用于for循环，还可以被next()函数不断调用并返回下一个值，直到最后抛出StopIteration错误表示无法继续返回下一个值了，可以被next()函数调用并不断返回下一个值的对象称为迭代器：iterator
可以使用isinstance()判断一个对象是否是Iterator对象。

总结：
1. 凡是可作用于for循环的对象都是Iterable类型；
2. 凡是可作用于next()函数的对象都是Iterator类型，他们表示一个惰性计算的序列；
3. 集合数据类型如list、dict、str等是Iterable但不是Iterator，不过可以通过iter()函数获得一个Iterator对象。
##map和reduce
1. map：map()传入的第一个参数是f，即函数对象本身，由于结果r是一个Iterator，Iterator是一个惰性序列，因此通过list()函数让它把整个序列都计算出来并返回一个list。
2. reduce：把一个函数作用在一个序列[x1,x2,x3,x4,...]上，这个函数必须接收两个参数，reduce把结果继续和序列的下一个元素做累积计算
3. filter
Python内建的filter()函数用于过滤系列。和map类似，filter()也可接受一个函数和序列，和map不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是true或者false决定保留还是丢弃该元素。
```
def is_odd(n):
	return n % 2 ==1
list(filter(is_odd, [1,2,4,5,6,9,10,15]))
```









