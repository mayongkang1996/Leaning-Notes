#GitHub安装及入门
**Git简介**
Git是目前世界上最先进的分布式版本控制系统。如何创建一个自己的HubGit？步骤如下：
一、 需要创建一个GitHub[点此访问官网](https://github.com/)。
二、 因为Git是基于SSH的远程代码管理工具，所以需要对Git进行SSH配置，配置步骤如下：
    第一步 设置Git的用户名和邮箱：
```python
$ git config --global user.name "Github注册用户名"
$ git config --global user.email "github注册使用邮箱"
```
    第二步 生成SSH密钥：
     1. 查看是否已有SSH密钥： 打开终端输入：cd ~/.ssh，如果没有的话不会有文件夹，有的话需要删除。
     2. 生成密钥：
     输入如下命令：
```
$ ssh-keygen -t rsa -C "输入注册邮箱"
```
     连续按三个回车，显示如下结果：
```
Your identification has been saved in /home/tekkub/.ssh/id_rsa.
Your public key has been saved in /home/tekkub/.ssh/id_rsa.pub.
The key fingerprint is:
………………
```
    此时便会得到两个文件：id_rsa和id_rsa.pub，其中id_rsa.pub为公钥，通过vim命令打开id_rsa.pub文件，复制里面的内容，
     3. 进入GitHub官网，登录进去后点击右上角，如图：
/QQ20180622-105649 2.jpg  
/QQ20180622-110004 2.jpg
   
三、 进行仓库的初始化设置：
1. 仓库初始化：
```
git init
```
2. 添加文件：
```
git add 文件名
```
此时提交的文件位于git的暂存区，还未提交
3.  提交文件
```
git commit -m <修改信息>
```
暂时就介绍这么多，如果有更多需求可以查看[廖雪峰老师的官方网站](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013743256916071d599b3aed534aaab22a0db6c4e07fd0000)
