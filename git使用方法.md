#git使用方法
##一、安装
    Mac上需要先安装Xcode软件，因为Xcode集成了git环境，有时候会提示无法安装需要更新操作系统，更新完就可以重新安装了，但是安装的Xcode默认不会开启git，需要手动配置，打开Xcode，选择菜单->preferences，找到“download”，选择“Command Line Tools”，点“Install”就可以完成安装了。
##二、版本库的创建以及基本命令
    1. 首先创建一个版本库，进入空闲目录，使用如下命令
```
mkdir gitrepo           //创建名为gitrepo的文件夹
cd gitrepo              //进入当前文件夹
pwd.                    //显示当前目录 
```
    2. 使用git init命令初始化这个文件夹，使这个目录变为git可以管理的仓库。
```
git init
Initialized empty Git repository in ;  //出现后表示init成功；
ls -al
```

/QQ20180628-224856.jpg
    使用ls -al命令查看文件目录，可以看出多了一个.git文件，注意不要随意修改.git目录里面的文件
    3. 基本命令：
```
git add xx1                   //将xx1文件添加到仓库
git commit xx1 -m <message>   //提交xx1文件以及修改的注释即message
git status                    //查看仓库的状态
git diff xx1                  //查看修改内容(git add 之前使用)
git log                       //查看提交日志或分支历史
git log --pretty=oneline      //只使用版本号查看提交记录 head为当前版本
git reset --hard HEAD^        //回退到上个版本，
git reset --hard HEAD~100     //回退到第100个版本
git reset --hard 1094a        //回退到版本号为1094a的版本
git reflog                    //查看每一天操作命令
git checkout --<file>         //撤销修改（丢弃工作区的修改）
git reset Head <file>         //回退版本（添加到暂存区）
git rm <file>                 //删除文件（后面要git commit）
git branch <name>             //查看当前分支
git checkout <name>           //切换分支
git merge <name>              //合并到当前分支
git branch -d <name>          //删除分支
```
##三、暂存区和工作区以及版本库
1. 工作区：自己建立的用来存放文件的位置就就是工作区。
2. 暂存区：git的版本库中存放了很多东西，其中最重要的就是stage（或index）区，也叫暂存区
3. 版本库：.git文件。
  将文件存放到工作区中一般需要先建立文件夹，将文件夹git init为仓库，当编辑的文件执行git add 文件名的时候，git先将文件提交到暂存区，然后commit文件，再将文件存到工作区。提交完成后暂存区就是干净的，如图：

/0.jpg
##四、远程仓库
1. GitHub注册使用：
[点击查看步骤](https://github.com/mayongkang1996/IT-leraning-road/blob/master/GitHub%E5%AE%89%E8%A3%85%E5%8F%8A%E5%85%A5%E9%97%A8.md)
2. git clone ssh链接
  将GitHub中的文件复制到本地仓库。
##五、分支管理
1. 创建与合并分支,使用以下命令：

```
    git checkout -b dev         // -b表示创建并切换分支
相当于：
    git branch dev
    git checkout dev
```

2.解决冲突
 当两个分支都有新的提交时发生冲突，此时无法进行合并，文件有提示修改文件再提交 。
 当多人协作产生冲突时，先用git pull把最新的提交从origin/dev抓下来，然后再在本地合并，解决冲突，再推送。
 ##六、标签管理
 1. 创建标签：
 ```
 git tag v1.0                          //创建标签
 git show v1.0                         //显示标签详细信息
 git tag -a v1.0 -m "message" 1094abd  //创建带说明的标签，-a指定标签名
 ```
 2. 操作标签：
 ```
 git tag -d v1.0                       //删除标签
 git push origin <tagname>             //推送标签到远程
 如果要删除已经推送到远程的标签使用如下方法：
 git tag -d v1.0                       //
 git push origin :refs/tags/v1.0
 ```
