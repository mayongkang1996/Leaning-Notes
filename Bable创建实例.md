#babel快速切换es
1. 初始化文件夹
`npm init` 让文件夹有package.json文件
2. 安装Babel命令行工具和Bable预设
`npm install --save-dev babel-cli`
安装成功后会出现：
```
{
  "devDependencies": {
+   "babel-cli": "^6.0.0"
  }
}
```
3. 打开package.json文件，删除原有的script标签里的内容，粘贴里面的内容
```
  {
    "name": "my-project",
    "version": "1.0.0",
+   "scripts": {
+     "build": "babel src -d lib"
+   },
    "devDependencies": {
      "babel-cli": "^6.0.0"
    }
  }
```

4. 创建src文件夹，并进入文件夹
5. 在src下创建.babelrc配置文件，在里面添加如下内容：
```
{
  "presets": ["env"]
}
```

6. npm run build
7. 在src 文件夹下创建一个测试js文件，在进行npm run build ，如果运行成功，会在根目录下创建lib文件夹，并自动生成app.js文件，这个文件就是编译好的。
#gulp安装
1. 新建文件项目
2. 在终端进入项目，输入如下命令：
```
npm install gulp-cli -g  全局安装
npm install gulp -D      本地安装
```
3. 新建文件




#webpack