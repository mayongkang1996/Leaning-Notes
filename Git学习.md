#Git基础知识
##获取Git仓库
	- 在现有项目或者目录西夏直接导入所有文件到Git中
	- 从一个服务器克隆一个现有的Git仓库
一、在现有目录中初始化仓库
`git init`
该命令会创建一个.git的子目录，这个子目录包含所有的初始化仓库中所有的必需文件
1. 如果实在一个已经存在文件的文件夹中初始化Git仓库来进行版本控制，应该跟踪这些文件并提交：
```
git add *.c  对文件进行跟踪
git add LICENSE
git commit -m 'initial project version'   对文件进行提交 
```
2. 如果需要获得一份已经存在的Git仓库的拷贝，使用`git clone`命令
克隆仓库的命令是`git clone [url]`。 例如`git clone https://github.com/libgit2/libgit2`，这会在当前目录下创建一个名为“libgit2”的文件夹，然后拷贝最新版本的文件，若想自定义本地仓库的名字可在后面加上自己的命名。
3. 查看文件的状态：
`git status`

4.  状态报告输出：

git status -s

??开头的表示新添加的未跟踪文件
A ：新添加到暂存区中的文件
MM ：左边的M表示修改过的文件放入了暂存区，右边的M表示文件被修改但是还没放入到暂存区。


二、忽略文件
1. 创建一个名为.gitignore的文件，列出要忽略的文件模式。
```
cat .gitignore
*.[oa]         表示忽略所有以.o或.a结尾的文件。
*~             表示忽略所有以~结尾的文件
```

2. 文件`.gitignore`的格式规范：
	- 所有空行或者以#开头的行都会被Git忽略。
	- 可以使用标准的glob模式匹配
	- 匹配模式可以以（/）开头防止递归。
	- 匹配模式可以以（/）结尾指定目录（忽略这个目录）
	- 要忽略指定模式以外的文件或者目录，可以在模式前面加上惊叹号（！）取反
3. git diff
	比较工作目录中当前文件和暂存区域快照间的差异，也就是修改之后还没有暂存起来的变化内容。
4. git diff --cached
查看已暂存的将要添加到下次提交里的内容，可以使用git diff --cached命令
5. 提交
	- `git commit`
	- `git commit -a`    提交之前不需要再git add文件了
6. 移除
	- `rm Project.md`
	- `git rm project.md -f` -f表示强制删除，git rm表示记录删除
	- `git rm --cached REMAND`  把文件从暂存区移除（从git仓库中删除）但仍然保存在当前工作目录当中
7. 移动
	`git mv file_from file_to`
	例如：
	`git mv README.md README`   将README.md改为README。
8. 提交历史
```
git log
git log -p -2   最近两次的提交
git log --stat  查看每次提交的简略的统计信息
```
9. 撤销操作
提交完成后发现漏掉了几个文件没有添加可以使用：`git commit --amend`来添加
###远程仓库的使用
1. 查看远程仓库
`git remote`     
`git remote -v`  显示需要读写仓库使用的Git保存的简写机器对应的URL
2. 添加远程仓库
	- `git remote add <shortname> <url>`  添加一个远程仓库并制定简写
	- 在命令行中使用字符串pb表示整个URL，如果想要拉去仓库中有的东西但是本地没有的可以使用如下命令：
`git fetch pb`
	- 推送到远程仓库：
`git push origin master`
3. 查看远程仓库
`git remote show origin`
4. 远程仓库的移除与重命名
	- 重命名：`git remote rename old_name new_name`
	- 移除：`git remote rm name`
5. 创建附注标签：`git tag -a v1.4 -m 'my version 1.4'`
6. git show命令可以看到标签信息与对应的提交信息
三、Git分支
	1. Git仓库的五个对象
		- 三个blob对象：保存文件快照
		- 一个树对象：记录着目录结构和blob对象索引以及一个提交对象
	2. Git分支的创建
		`git branch testing(分支名)`
	3. 分支切换
		`git checkout testing`   HEAD指向testing分支
	4. git merge:将新创建分支修改后的文件合并到master分支部署到线上
	```
	git checkout master
	git merge file
	```
	5. 删除分支
		`git branch -d 分支名`
	6. 将修改后的特性分支变基到目标分支上，使用
```
git rebase master 分支名
变基操作的实质是丢弃一些现有的提交，然后创建一些内容一样但实际上不同的提交。
```











