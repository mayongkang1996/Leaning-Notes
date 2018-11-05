R语言
1. 数据类型
R语言经常使用的对象是：
	- 矢量
	- 列表
	- 矩阵
	- 数组
	- 数据帧
这些对象中最贱的是向量对象，并且这些原子向量有六种数据类型，也称为六类向量，其他R对象建立在这些原子向量之上。

	| 数据类型 | 例 | 终端输出class类型 |
	|:--|:--|:--|
	| 逻辑型(Logical) | TRUE,FALSE | logical |
	| 数字(Numeric) | 12.3,5 | numeric |
	| 整型(Integer) | 2L,34L,0L | integer |
	| 复合型(Complex) | 3+2i | complex |
	| 字符(Character) | 'a',"good" | character |
	| 原型(Raw) | "Hello"被存储为48 65 6c 6c 6f | raw |

2. Vectors向量：
当我们想用多个元素创建向量时，你应该使用c()函数，这意味着将元素组合成一个向量(还是一个向量，只是这个向量包含多个元素)。

	```
	#create a vector
	arr <- c('red','green',"yellow")
	print(arr)
	#get the class of the vector
	print(class(arr))
	```
3. Matrices矩阵
矩阵是二维矩形数据集，可以使用矩阵函数的向量输入创建
	
	```
	#create a matrix
		M = matrix( c('a','a','b','c','b','a'),nrow = 2, ncol = 3, byrow = TRUE)
	print(M)
	#最终输出结果：
	
	```
4. 








