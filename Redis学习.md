Redis学习
##Redis简介
1. Redis是一个遵守BSD协议的高性能的key-value数据库
2. Redis特点：
	- Redis支持数据持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载使用。
	- Redis不仅仅支持简单的key-value类型的数据，同时还提供list、set、zset、hash等数据结构的存储。
	- Redis支持数据的备份，即master-slave [^1 master-slave：主仆模式，核心思想是基于分而治之设计模式，将一个任务分解为若干个语义相同的子任务，并由专门的工作者线程来并行执行这些任务，原始任务的结果是通过整合各个子任务的处理结果形成的。] 模式的数据备份.
3. Redis适用场景
	- 并行计算，提升计算性能
	-  容错处理，提高计算的可靠性，因为原始任务的结果是通过整合各个子任务的处理结果形成的
	- 计算精度，提高计算的精确程度，因为原始任务的计算结果是所有子任务的处理结果不精确性最低的一个结果
4. 收集子任务处理结果的两种方法：
	- Master和Slave使用同一个存储仓库
	- 使用Future模式
5. mac安装redis
	- 执行brew install redis
	- 启动redis，可以后台服务启动`brew services start redis`,或者直接启动：`redis-server/usr/local/etc/redis.conf`

##redis数据类型
Redis支持五种数据类型string、 hash（哈希）、 list（列表）、 set（集合）、zset（有序集合）
- string：string类型是Redis最基本的烈性，一个key对应一个value，最大能存储512MB
```
redis> set name "hello"
ok
redis> get name
"hello"
```
- hash: Redis hash是一个键值对集合，string类型的field和value的映射表，hash适合用于存储对象。

```
redis> hmset myhash field1 "hello" field2 "world"
"ok"
redis> hget myhash field1
"hello"
redis> hget myhash field2
"world"
```
- list: Redis列表是最简单的字符串列表，按照插入顺序排序，可以添加一个元素到列表的头部或者尾部。
```
redis> lpush majun redis
(integer)1
redis> lpush majun mongodb
(integer)2
redis>lpush majun rabitmq
(integer)3
redis> lrange majun 0 10
1) "rabitmq"
2) "mongodb"
3) "redis"
注意结果插入顺序
```
- set： Redis的set是string类型的无序集合。集合都是通过哈希表实现的，所以添加、删除、查找的复杂度都是O(1)。
sadd命令：添加一个string元素到key对应的set集合中，成功返回1，如果元素已经在集合中返回0，如果key对应的set不存在则返回错误
`sadd key member`
实例：
```
redis> sadd majun redis
(integer) 1
redis> sadd majun mongodb
(integer) 1
redis> sadd majun rabitmq
(integer) 1
redis> sadd majun redis
(integer) 0
redis> smember majun
1) "redis"
2) "rabitmq"
3) "mongodb"
```
- zset(sorted set: 有序集合)
Redis zset和set一样也是string类型元素的集合，且不允许重复的成员。不同的是每个元素都会关联一个double类型的分数，Redis正式通过分数来为集合中的成员进行从小到大的排序，zset的成员是唯一的，但分数却可以重复.

##Redis事务
1. Redis事务可以一次执行多个命令，并且带有以下两个保证：
	- 批量操作在发送EXEC命令前被放入队列缓存。
	- 收到EXEC命令后进入事务执行，事务中任意命令执行失败，其余的命令依然会被执行。
	- 在事务执行的过程中，其他客户端提交的命令请求不会被插入到事务执行命令序列中
2. 事务从开始到执行会经历以下三个阶段：
		- 开始事务
		- 命令入队
		- 执行事务
3. Redis事务的命令
	- MULTI：标记一个事务块的开始
	- EXEC： 执行所有事务块内的命令
	- discard：取消事务，放弃执行事务块内的所有命令
	- unwatch：取消watch命令对所有key的监视。
	- watch key ：监视一个或多个key，如果在事务执行之前这个key被其他命令改动，那么事务将被打断。

##Redis数据备份与恢复
1. Redis save命令用于创建当前数据库的备份
语法如下：
```
redis> save
ok
该命令将会在Redis安装目录下创建dump.rdb文件
```
创建Redis备份文件也可以使用命令bgsave，该命令在后台执行
```
redis> bgsave
background saving started
```
2. 恢复数据
如果需要恢复数据，只需要将备份文件(dump.rdb)移动到redis安装木并启动服务器即可，获取Redis目录可以使用config命令
```
redis> config get dir
1) "dir"
2) "/usr/local/redis/bin"
```

##Redis客户端连接
Redis通过监听一个TCP端口或者Unix socket的方式来接受来自客户端的连接，的那个一个连接建立后，Redis内部会进行以下一些操作：
1. 客户端socket会被设置为非阻塞模式，因为Redis在网络事件的处理上采用的是非阻塞多路复用模型。
	
2. 为这个socket设置TCP_NODELAY属性，禁用Nagle算法[^ 为了减少广域网的小分组数目，从而减小网络拥塞的出现，该算法要求一个tcp连接上最多只能有一个未被确认的未完成的小分组，在该分组ack到达之前不能发送其他的小分组，tcp需要手机这些少量的分组，并在ack到来时以一个分组的方式发送出去，其中小分组的定义是小于MSS的任何分组。该算法的优越之处在于它是自适应的，确认到达的越快，数据也就发送的越快，在希望减少微小分组数目的低速广域网上，则会发送更少的分组]
3. 然后创建一个可读的文件事件用于监听这个客户端socket的数据发送。

##Redis管道技术
Redis是一种基于客户端-服务端模型以及请求/响应协议的TCP服务，这意味着通常情况下一个请求会遵循以下步骤：
- 客户端向服务端发送一个查询请求，并监听Socket返回，通常是以阻塞模式，等待服务端响应
- 服务端处理命令，并将结果返回给客户端。
Redis管道技术可以在服务端未响应时，客户端继续向服务端发送请求，并最终一次性读取所有服务端的响应。
优势： 管道技术最显著的优势是提高了Redis服务的性能。