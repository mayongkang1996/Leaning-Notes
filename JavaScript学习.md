#JavaScript学习。
##JavaSCript中的标准内置对象及其方法属性
一、返回值类型
1⃣️ Infinity       返回值为无穷大类型  例如2/0；

2⃣️ NAN   表示表达式结果不是一个数字Not-a-Number，在浏览器中，NaN是一个不可配置、不可编辑的属性。

**isNaN和Number.isNaN来确定一个值是否为NaN，但是isNaN()表示当前值为NaN时返回true，或者在强制为一个数字后返回NaN，后者只是在当前值为NaN时返回true**

3⃣️ undefined 未定义，表示变量或者对象使用时没有定义，会报错。

4⃣️ null           空值
二、内置对象
  内置对象全局调用，但是对象的函数只将值返回给调用者。
**函数属性**

1. eval()

作用：计算以字符串形式表示的javascript代码

参数：字符串，表示javascript表达式或者语句
返回值：计算给定代码的值，如果值为空，返回undefined

**eval()函数的参数是一个字符串。如果字符串表示表达式，那么eval()计算表达式。如果参数表示一个或多个JavaScript语句，那么eval()计算语句。不要调用eval()来计算算术表达式;JavaScript自动计算算术表达式。**

2. uneval()
   与eval()相反；

3. isFinite()
   判断返回值是否是有限的，语法为：isfinite(x),返回值为true或者false；

4. isNaN()
   判断返回值是否不为数字，是数字返回false，不是数字返回true；但是当isNaN函数的参数不是类型号时，该值首先被强制为一个数字。然后测试生成的值，以确定它是否是NaN。因此，对于强制为数字类型导致有效的非nan数值(特别是空字符串和布尔原语，当强制为数值0或1时)的非数字，“false”返回值可能是不可预期的；

5. parseFloat()
    函数作用：解析一个参数并返回一个浮点数；

6. parseInt()
    函数作用：解析一个参数并返回一个整数；

7. decodeURI()
    函数的作用是:解码由encodeURI编辑的URI；

8. decodeURIComponent()
    函数的作用是:解码由encodeURIComponent编辑的URI组件；

9. encodeURI()
    函数的作用是:用表示字符UTF-8编码的1、2、3或4个转义序列替换特定字符的每个实例，如https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
10. encodeURIComponet()
    函数的作用是：通过将特定字符的每个实例替换为一个、两个、三个或四个转义序列，表示字符的UTF-8编码；
11. escape()
    escape()函数计算一个新字符串，其中某些字符被十六进制转义序列替换。
12. unescape()
    与escape()相反；


**基本对象**

1. Object
所有对象的父对象，也可以说是根对象。
2. Function
表示函数构造函数创建函数对象
3. Boolean
布尔对象是布尔值的对象包装器
4. Symbol
返回一个Symbol类型的值，类似于内置对象，不支持new Symbol();每次执行Symbol(x),都会创建一个新的值，如Symbol('abc')===Symbol('abc')    返回值为false
方法：
	
	Symbol.for(key):  使用给定的键搜索现有的符号，如果找到则返回。否则，将使用此键在全局符号注册表中创建一个新符号。
	
	Symbol.keyFor(sym):  从全局符号注册表中检索给定符号的共享符号键。
	
5. Error
		当运行时发生错误时，将抛出错误对象实例。错误对象也可以用作用户定义异常的基对象。
	
		语法:    new Error([message[,filename[,lineNumber]]])
	  	        message:  错误信息描述
			    filename:创建的错误对象上的文件名属性的值。默认为包含调用Error()构造函数的代码的文件的名称。
  
  6. EvalError：创建一个实例，该实例表示针对eval()发生的错误
  
  7. InternalError：表示在抛出JavaScript引擎中的内部错误时发生的错误
  
  8.  RangeError:数值变量或参数超出其有效范围时发生的错误。
  
  9.  ReferenceError:表示在反引用无效引用时发生的错误
  
  10. SyntaxError:eval()中解析代码时发生的语法错误
  
  11. TypeError:表示当变量或参数不是有效类型时发生的错误。
  
  12. URIError:表示当传递无效参数时发生的错误encodeURI()或decodeURI()。

**时间和日期**

1. Number
		
		1)语法：new Number(value);
		2)用途：如果参数不能转换为数字，返回NaN，在非构造函数中，可以使用Numnber。
		3)属性:
			Number.EPSILON :表示数字之间的最小间隔；
			Number.MAX_SAFE_INTEGER：javascript中的最大整数2^53-1；
			Number.MAX_VALUE：最大值；
			Number.MIN_SAFE_INTEGER：最小整数-（2^53-1）；
			Number.MIN_VALUE：最小值；
			Number.NaN：非数字值；
			Number.NEGATIVE_INFINITY：表示负无穷，溢出；
			Number.POSITIVE_INFINITY：表示正无穷，溢出；
			Number.prototype：允许向数字对象添加属性。
		4）方法：
			Number.isNaN()：判断变量是否为数字；
			Number.isFinite()：判断变量是否为有限数；
			Number。isInteger()：判断变量是否为整数；
			Number.isSafeInteger()：判断变量是否为安全整数；
			Number.parseFloat()：解析一个参数并返回一个浮点数；
			Number.parseInt()：解析一个参数并返回一个整数。
2. Math

	**Math是一个内置对象，具有数学常量和函数的属性和方法，不是一个函数对象**

	1）属性：
		Math.E:        自然对数的底
		Math.LN2:      2的自然对数
		Math.LN10:     10的自然对数
		Math.LOG2E:    
		Math.LOG10E:
		Math.PI:       3.1415926
		Math.SQRT1_2:  1/（2的平方根）
		Math.SQRT:
	2)方法
		Math.abs(x):返回一个数字的绝对值；
		Math.acos(x)
		Math.acosh(x)
		Math.asin(x)
		Math.asinh(x)
		Math.atan(x)
		Math.atanh(x)
		Math.atan2(y,x)
		Math.cbrt(x)
		Math.ceil(x)
		Math.clz32(x)
		Math.cos(x)
		Math.cosh(x)
		Math.exp(x)
		Math.expml(x)
		...

3. Date
创建一个javascript日期实例，表示单个时间点，从当前时间到1970年1月1日的毫秒数。

	1）语法：
		new Date();
		new Date(value);
		new Date(dateString);
		new Date(year, monthIndex [, day [, hours [,                           minutes [, seconds [, milliseconds]]]]]);
**Date对象只能通过调用javascript Data作为构造来实例化，返回一个字符串而不是日期对象，且javascript日期对象没有文字语法**
	
	2）属性：
		Date.prototype：允许向javascript日期对象添加属性
		Date.length:值为7，由构造器控制参数个数。
	
	3）方法：
		Date.now():  返回与当前时间对应的数值；
		Date.parse():解析日期的字符串表示形式并返回毫秒数；
		Date.UTC():接受与构造函数的最长形式(即2到7)相同的参数，并返回自1970年1月1日以来的毫秒数
		
	三、文本处理
	1. String
		字符串全局对象是字符串或字符序列的构造函数。
		1）属性：
			String.prototype：允许对字符串对象添加属性
		2）方法：
			String.fromCharCode()：返回使用指定的Unicode值创建的字符串。
			String.fromCodePoint()：返回使用指定的代码点序列创建的字符串。
			String.raw()：返回从原始模板字符串创建的字符串。
	2. RegExp
			RegExp构造函数创建一个正则表达式对象，用于将文本与模式匹配。
			1）属性：
				RegExp.prototype objects：允许向所有对象添加属性。
				RegExp.length：RegExp.length的值为2。
				get RegExp[@@species]：用于创建派生对象的构造函数。
				RegExp.lastIndex：开始匹配下一个的角标。
			2）方法：
				全局RegExp没有自己的方法，但是可通过原型链继承了一些方法。
				
				
四、数组集合
1. Array
		Array对象用于构建数组的全局对象
创建数组对象：
```
var Arr1=['a','b','c'];
var Arr2=['d','e',Arr[]]
```
		1)属性：
		Array.length:数组构造函数的长度属性，值为1.
		get Array[@@species]:  用于创建派生对象的构造函数。 
		Array[Symbol,species]:     返回一个数组构造函数
		Array.prototype:       允许向所有数组添加属性
		2）方法：
			Array.from():从类数组或可迭代对象创建一个新的数组实例。
			Array.isArray():判断变量是否为数组，若是返回true，否则返回false。
			Array.of():创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
		
	
2. Int8Array：表示一组二补8位有符号整数。内容被初始化为0。一旦建立，可以使用对象的方法或使用标准的数组索引语法(即使用括号标记)引用数组中的元素。

3. Uint8Array：表示一个8位无符号整数数组。内容被初始化为0。一旦建立，您可以使用对象的方法或使用标准的数组索引语法(即使用括号标记)引用数组中的元素。
4. Uint8ClampedArray
5. Int16Array
  6. Uint16Array
  7. Int32Array
  8. Uint32Array
  9. Float32Array
  10. Float64Array

五、键集合
	1. Map
		以键值对的形式保存对象或者变量
		1）属性：
			Map.length:长度属性的值是0；
			get Map[@@species]:用于创建派生对象的构造函数
			Map.prototype:表示映射构造函数的原型，允许向所有映射对象添加属性。
		2）方法：
			Map.prototype.clear()：从Map对象中删除所有的键值对；
			
			Map.prototype.delete(key)：若key被删除或者不存在，返回true，否则返回false；
			
			Map.prototype.entries()：返回一个新的迭代器对象，该对象包含映射对象红按插入顺序的诶个元素的[key,value]数组。
			
			Map.prototype.forEach(callbackFn[, thisArg])：在插入顺序中，为映射对象中的每个键值对调用callbackFn，如果向forEach提供一个thisAge参数，它将作为每个回调的值。
			
			Map.prototype.get(key)：返回与键相关的值，如果没有则返回未定义的值。
			
			Map.prototype.has(key)：返回一个布尔值，该值是否与映射对象中的键相关联。
			
			Map.prototype.keys()：返回一个新的迭代器对象，该对象插入按插入顺序包含映射对象中的每个元素的值。
			
			Map.prototype.set(key, value)：设置映射对象中键的值，返回Map对象。
			
			Map.prototype.values()：返回一个新的迭代器对象，该对象按插入顺序包含映射对象中的每个元素的值。
			
			Map.prototype[@@iterator]()：返回一个新的迭代器对象，该对象那个包含映射对象中按插入顺序的每个元素的[key,value]数组。

	2. Set
    set对象允许存储任何类型“唯一值”，无论是原始值还是对象引用。
		1）属性：
			Set.length:长度的属性值为0
			get Set[@@species]：用于创建派生对象的构造函数
			Set.prototype：表示Set构造函数的原型，允许向所有设置对象添加属性
	3. WeakMap
			弱映射对象是键值对集合，其中键被弱引用。键必须是对象，值没有要求。
	4. WeakSet
			WeakSet对象允许在集合中存储弱持有的对象。
六、结构化数据
**这些对象表示并与使用JavaScript对象符号（JSON）编码的结构化数据缓冲区和数据进行交互。**
	
	1. ArrayBuffer
		ArrayBuffer对象用于表示一般的、固定长度的原始二进制数据缓冲区，不能直接操作里面的内容，相反，可以创建一个类型化数组或者一个DataView对象，该对象以特定格式表示缓冲区，并使用它来读写缓冲区的内容。
	
	2. SharedArrayBuffer 
		SharedArray对象用于表示一般的、固定长度的原始二进制数据缓冲区，类似于ArrayBuffer对象，可以在共享内存上创建视图，但是不可以被分离。（在浏览器中默认是禁用的）。
	
	3. DataView
		DataView视图提供了一个低级接口，用于在ArrayBuffer中读和写，但是考虑平台的耦合性。
		
	4. JSON
		JSON对象包含了解析JavaScript对象表示法并将值转换为JSON的方法，不能被调用或者构造。
		
	JavaScript对象表示法
		JSON是序列化对象、数组、数字、字符串、布尔值和null的语法。它基于JavaScript语法，但与之不同:有些JavaScript不是JSON，有些JSON不是JavaScript。也可以看到JSON:不是的JavaScript子集。
		方法：
			JSON.parse():将字符串解析成JSON，可选地转换生成的值及其属性，并返回值。
			JSON.stringify():返回与指定值对应的JSON字符串，可选地仅包含某些属性或以用户定义的方式替换属性的值。                        
			
## 语句
一、 流程控制
	1. Block
			Block语句用于对零个或多个语句进行分组，由{}分隔。 
	2. break
			break语句终止当前循环、开关或标签语句，并将程序控制转移到终止语句之后的语句。
	3. continue
			continue语句终止当前循环或已标记的循环的当前迭代中语句的执行，并在下一次迭代中继续执行循环。
	4. empty
			empty语句用于不提供语句，尽管JavaScript语法可能需要一个。
	5. if else
			如果指定的条件为真，则if语句执行语句；如果条件是false，则执行另一个语句。
	6. switch
		  switch语句计算表达式，将表达式的值与case子句匹配，并执行与该案例相关联的语句，以及正在匹配的情况下的语句。
	7. throw
			throw语句抛出用户定义的异常，当前函数的执行将停止（抛出之后的语句将不会被执行），控制将被传递到调用堆栈中的第一个catch块，如果调用函数之间不存在catch块，程序将终止。
	8. try ...catch
			thy...catch语句标记要尝试的语句块，并在抛出异常时指定响应。
二、变量声明
	1. var
			var语句声明一个变量，可选的将其初始化为一个值。
	2. let
			let语句声明块作用域局部变量，可选的将其初始化为值
	3. consr
			常量是块作用域的，很像使用let语句定义的变量，常数的值不能通过重新赋值而改变，也不能重新声明。
三、函数和类
	1. function
			函数声明用指定的参数定义一个函数
	2. function*
			function*定义生成器函数，该函数返回生成器对象。
	3. async function
			async function声明定义了一个异步函数，返回一个AsyncFunction对象。
	4. return
			return语句结束函数执行，冰之地点呢返回给函数调用者的值。
	5. class
			class声明使用基于原型的继承创建一个具有给定名臣的新类。
四、迭代
	1. do...while
			do...while语句创建一个循环，该循环执行指定的语句，直到测试条件计算为false，条件在执行语句后进行评估，导致指定语句至少执行一次。
	2. for
			for语句创建一个有三个可选表达式组成的循环，这些表达式包含在圆括号中，并由分号分隔，然后在循环中执行一个语句（通常是块语句）
	3. for...in
			for...in表示在语句中，迭代对象的所有非符号、可枚举属性。
	4. for...of
			for...of语句创建一个循环遍历可迭代对象（包括内置的字符串、数组、例如类数组的参数或NodeList对象、TypedArray、Map和Set，以及用户定义的可迭代对象），调用一个自定义的迭代钩子，其中包含要为对象的每个不同属性的值执行的语句。即将数组或者字符串进行遍历，并对数组或者字符串中的每个元素执行for...of里面的语句。
	5. while
			while语句创建一个循环，该循环在测试条件计算为true时执行指定的语句，在执行语句之前对条件进行评估。

五、其他
	1. debugger
			dubugger语句可调用调试功能，如果没有可用的调试功能，则词语局无效。
	2. export
			export语句用于创建JavaScript模块以从模块中导出函数，对象或者原语值时，将使用export语句，以便其他程序与import语句一起使用。
**导出模块不可再嵌入式脚本中使用**
	3. import
			import用于导入由另外一个模块的包，导入的模块都处于严格模式，除非该脚本具有type="module",否则不能在嵌入式脚本中使用import语句。
	4. label
			被标记的语句可以与break或continue语句一起使用，他的前缀是一个标识符，可以被引用。
```
		语法：
			lable:
				statement
		当使用statement的时候可以通过lable标签直接调用。
```
六、通用表达式和基本关键字
 1. this
		可以通过this关键字进行调用，调用的时候取决于调用函数，不能在执行过程中通过赋值来设置，在全局执行上下文中，this值得式全局对象，无论他是否处于严格模式。在一个函数中，this的值取决于如何调用这个函数。
 2. function
		function关键字可用于定义表达式中的函数。
 3. class
		class表达式式定义类的一种方法，于函数表达式类似，类表达式可以命名或者不命名，如果命名，类的名臣金贵类主体式本地的。
```
语法：
var MyClass = [className][extends]{
	class body;
};
```
 4. function*
		function* 关键字可用于定义表达式中的生成器函数。
 5. yield
		yield关键字可用于暂停或者回复生成器函数
 6. yield*
		yield*表达式用于委托给另外一个生成器或可迭代对象。
 7. []
		JavaScript数组对象是用于构建数组的全局对象，是高级的像列表一样的对象。
 8. {}
		可以通过{}里面的内容对对象进行初始化。
 9. /ab+c/i
		RegExp构造函数创建一个正则表达式对象，用于将文本于模式匹配。
 10. ()
		分组运算符（）控制表达式中求值的优先级。
	