PostgreSQL  网上学习笔记
##数据类型：
1. 整数类型：类型smallint、integer、bigint存储各种范围内全部是数字的数，也就是没有小数部分的数字。常用类型是integer，因为她提供了在范围、存储空间和性能能之间最佳平衡，一般只有在磁盘空间紧张的时候才会用smallint，在integer范围不够的时候才使用bigint
	- 任意精度数值：类型numeric可以存储最多1000位精度的数字并且准确的进行计算，适用于货币金额和其他要求计算准确的数量。，但是整体算数运算比整数类型或者浮点数类型要慢很多。，numeric字段的最大精度和最大比例都是可以配置的，要声明一个类型为numeric的字段，可以使用如下语法
```
NUMERIC(precision,scale)   precision:精确度   scale：比例
```
	- 浮点数类型： 可能会丢失精度
	- Serial类型： （序号类型）serial和bigserial类型不是真正的类型，只是为在表中设置唯一标识做的概念上的便利。
2. 字符类型

| 名字 | 描述 |
|:--|:--|
| varchar | 定长，有长度限制 |
| char(n) | 定长，不足补空白 |
| text | 变长，无长度限制 |

SQL定义了两种基本的字符类型，varchar(n)和char（n），n是一个正整数，两种数据类型最多可以存储n个字符长的字串，试图存储更长的会报错，如果没有声明长度的话，char=char（1），而varchar（）可以接受任意长度的字符串。

3. 日期/时间类型：

| 名字 | 存储空间 | 描述 | 最低值 | 最高值 | 分辨率 |
|:--|:--|:--|:--|:--|:--|
| timestamp | 8字节 | 包括日期和时间 | 4317bc | 5874897AD | 1毫秒/14位 |
| intervl | 12字节 | 时间间隔 | -1780000000年 | 1780000000 | 1毫秒/14位 |
| date | 4字节 | 只用于日期 | 4713bc | 32767AD | 1天 |
| time[无时区] | 8字节 | 只用于一日内时间 | 00：00：00 | 24：00：00 |1毫秒/14位  |


- 日期/时间输入
	任何时间或者日期的文本输入均需要由单引号包围，就像一个字符串一样
4. 布尔类型
boolean只能是两个状态之一：真或假。
- 真值的有效文本值为：
	* TRUE
	* 't'
	* 'true'
	* 'y'
	* 'yes'
	* '1'
- 假值得有效文本为：
	* FALSE
	* 'f'
	* 'n'
	* 'no'
	* 'O'
5. 位串类型
位串类型就是一串0和1的字串，可以用于存储和视觉化位掩码，有两种类型的SQL位类型：bit和bit varying(n),这里的n是一个正整数，bit类型的数据必须准确匹配长度n，试图存储短些或者长一些的数据都是错误的，。类型bit varying数据是最长的你的变长类型；更长的串会被拒绝。
写一个没有长度的bit等同于bit（1），没有长度的varying相当于没有长度限制。


##约束
检查约束是表中最为常见的约束类型，他允许你声明在某个字段里的数值必须满足一个布尔表达式
- 非空约束：约束的字段不能插入空值，或者是将已有数据更新为空值。
- 如果一个字段中存在多个约束，在定义时，可以不考虑约束的声明顺序
- 唯一性约束：指定的字段不能插入重复值，或者是将某一记录的值更新为当前表中的已有值。
- 还可以为表中的多个字段定义联合唯一性
```
create table example(
	a integer,
	b integer,
	c integer,
	unique(a,c)
)
```

##主键和外键
1. 主键约束只是唯一约束和非空约束的组合。
2. 和唯一性约束一样，主键可以同时作用于多个字段，形成联合主键：
```
create table example2(
	a integer,
	b integer,
	c integer,
	primary key (b,c)
)
```
3. 相关表之间的参考完整性：
外键约束声明一个字段的数值必须匹配另外一个表中某些行出现的数值，我们把这个行为称作两个相关表之间的参考完整性。
```
create table orders(
	order_id  integer primary key,
	--该表的product_no为上面的products表主键（product_no）的外键。
	product_no integer references products(product_no),
	quantity integer
)
```
限制和级联删除是两种最常见的选项：
- restrict 禁止删除被引用的行
- no action 如果在检查约束的时候，如果还存在任何引用行，则抛出错误，如果不声明任何东西，则会是缺省的行为。no action允许约束检查推迟到事务的晚些时候，而restrict不行
- cascade 声明在删除一个被引用的行的时候，引用它的行也会被自动删除
在外键字段上的动作选项：
- set null 在被引用行删除的时候设置为空
- set default 在被引用行删除的时候设置为默认值

##系统字段
PostgreSQL的每个数据表都包含几个隐含定义的系统字段。
- oid： 行的对象标识符，这个字段只有在创建表的时候是用来with oids，或者是设置了配置参数
- tableoid：包含本行的oid，这个字段对那些从继承层次中选取的查询特别有用，因为如果没有它的话，我们就很难说明一行来自哪个独立的表。tableoid可以和pg_class的oid字段链接字段连接起来获取表名字。
- xmin: 插入该行版本的事务的表示
- cmin：在插入事务内部的命令表示（事务id）
- xmax：删除事务的标识，如果不是被删除的行版本，那么是零。
- cmax：在珊瑚事务内部的命令标识符，或者是零。

##表的修改
1. 增加字段
	`alter table products add column description text`
	新增的字段对于表中已经存在的行而言最初将先填充所给出的缺省值
	在新增字段时，可以同时给该字段指定约束。
	`alter table products add column description text check(descript <>");`
2. 删除字段
`alert table products drop column description;`
3. 增加约束 add check
4. 删除约束
5. 改变字段的缺省值
6. 修改字段的数据类型
7. 修改字段名
8. 修改表名

##模式匹配
postgreSQL提供了实现模式匹配的方法：
1. like
2. similar to 正则表达式
