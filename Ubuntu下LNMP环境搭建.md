#Ubuntu下LNMP环境搭建

**一 、安装Nginx**
1. 打开Linux终端，并输入如下代码进行安装Nginx：
2. 

```linux
$ sudo apt-get update
$ sudo apt-get install nginx
```
 输入后显示如图：
/QQ20180621-113750 2.jpg
 输入y进行安装：
/QQ20180621-114347.jpg
 完成安装后输入以下命令查看Nginx版本号：
```linux
$ sudo apt-get install -v
```
结果如图，表示安装成功：
/QQ20180621-130502.jpg
**二、安装Mysql**
1. 在终端中执行如下命令：
```
$ sudo apt-get install mysql-server-5.7 mysql-client-5.7
```
2. 输入用户密码
3. 询问是否继续：输入y，开始安装；
4. 如果输入的密码太过简单，出现如下弹窗，则在红色箭头方向重新设置复杂的密码并牢记：
/QQ20180621-132142.jpg
再次输入更改的密码，并回车，开始安装：
/QQ20180621-132350.jpg

5. 安装完成后，输入一下命令验证安装是否成功,然后输入用户密码：
```
mysql -u root -p
```

/QQ20180621-132741.jpg
如图，表示安装成功。

**三、PHP的安装**
1. 输入以下命令安装PHP（安装前退出数据库，使用\q命令或者exit）：
```
$ sudo apt-get install php7.0-fpm php7.0-mysql php7.0-common php7.0-curl php7.0-cli php7.0-mc
```
2. 输入用户登录密码，输入y继续安装；
3. 配置PHP：
```
sudo vim /etc/php/7.0/fpm/php.ini
```
输入
```
cgi.fix_pathinfo
```
将值修改为0；
4. 启动：
```
sudo phpenmod mcrypt
sudo service php7.0-fpm restart
```
**四、配置Nginx**
1. 修改user,键入一下命令，将user 改为www-data
```
vim /etc/nginx/nginx.conf
```
2. 端口-代码映射
```
vim /etc/nginx/sites-available/default
```
增加一下内容：
```
server {
        #监听端口
        listen 81;
        server_name demo;
        #相应记录可不填
        access_log /home/www/81.log;
        error_log /home/www/81.error.log;
        #项目地址
        root /home/www/demo;
        index index.php index.html;
        #fastcgi_pass为fpm地址，可查看/etc/php/7.0/fpm/pool.d/www.conf中的listen确定
        location ~ \.php$ {
                include fastcgi_params;
                fastcgi_pass unix:/run/php/php7.0-fpm.sock;
                fastcgi_param PATH_INFO $fastcgi_script_name;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                fastcgi_read_timeout 10000;
        }
}
```
3. 重启Nginx
```
nginx -s reload
```
4. 开放端口
```
sudo ufw allow 81
```
5. 测试是否配置成功：
打开linux操作系统，右键进入终端，输入ifconfig查看IP地址
6. 