#启动第一个Vue程序
通过创建一个Todo的实例，来学习Vue
1. 安装npm，输入以下指令将vue-cli安装到机器的全局环境中：
```
npm i vue-cli -g
```
2. 建立工程：

```
vue init webpack-simple vue-todos(需要回答问题，一直回车便可)
```
3. 进入vue-todo目录，安装脚手架项目的基本支持包：
```
npm i
```
4. 运行Vue.js程序：
```
npm run dev
```
5. vue-cli构造的代码结构：

```
index.html    默认启动页面
package.json  npm包配置文件
src 
	 - App.vue   启动组件
	 - assets
	  	- logo.png
	 - main.js          Vue实例启动入口 
 webpack.config.js   Webpack配置文件
```
##项目文件介绍
1. main.js文件介绍

```
import Vue from 'vue'   
import App from './App.vue'  

new Vue({
	el: '#app',
	render:h =>h(App)
})
```
	
	通过import将一个Vue.js的组件文件导入，并创建一个Vue对象的实例，在Vue实例中用render方法来绘制这个Vue组件就完成了初始化。
	然后，将vue实例绑定到一个页面上，真实存在的元素App Vue程序就引导成功了。

2. index.html文件介绍
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
</head>
<body>
	<!--Vue实例所对应的页面元素 -->
	<div id="app"></div> vue实例与id="app"的页面元素绑定
	<!--由Webpack编译后的运行文件-->
	<script src="/dist/build.js"></script>
</body>
</html>
```
  Vue实例必须与一个页面元素绑定，Vue实例一般用作Vue的全局配置来使用。
3. App.vue文件
	* vue 是Vue.js特有的文件格式，表示的就是一个Vue组件，他也是Vue.js的最大特色，被称为单页式组件。
	* vue文件可以同时承载“视图模板”、“样式定义”和组件代码，他是的组建的文件组织更加清晰与统一。

Vue.js的组件系统提供了一种抽象，让我们可以用独立可服用的小组件来构建大型应用，所以几乎任意类型应用的界面都可以抽象为一个组件树。
脚手架为我们创建的App组件内加入了介绍性文字，最简单的Vue组件定义模板：

```
<template>
	<div id="app">
	</div>
</template>

<style></style>

<script>
export default {
	name: 'app'
}
</script>
```
上面的代码得出单页组建的三大组成部分：
```
	<template>    视图模板
	<style>       组件样式表
	<script>      组件定义
```

4. 插值
Vue的视图模板是基于DOM实现的，这意味着所有的Vue模板都是可解析的有效的HTML，而且他对一些特殊的特性做了增强。
演示定义一个网页标题，并通过绑定语法将App组建上定义的数据模型绑定到模板上：
	* 在组件脚本定义中使用Data定义用于内部访问的数据模型


```
export default{
	
	data () {
		return {
			title:"vue-todos"
		}
	}
}

```

插值是Vue模板语法的基础用法，支持JavaScript表达式运算和过滤器{{}}引用的内容都会被编码，如果要输出未被编码的文本，可以使用{{{}}}对变量进行引用。
**从Vue2开始，组件模板必须且只能有一个顶层元素，如果在组件模板内设置多个顶层元素将会引发编译异常。**

5. Mustache语法
用双大括号引住的内容被称为“Mustache”语法，Mustache标签会被相应数据对象的title属性的值替换，每当这个属性变化时他也会更新。

##数据绑定
思想和问题：
数据绑定：首先要有数据，数据是什么，在哪能找到数据？绑定到什么地方？怎么绑定？有什么作用？
1. 数据模型：
数据模型结构：
```
{
	value:'事项1',    //待办事项的文字内容
	done: false      //标记该事项是否已完成
}
```
data作用：将Vue实例定义看做一个类的定义，data相当于这个类的内部字段属性的定义区域，在Vue实例内的其他地方都可以直接用this引用data内定义的任何属性。
显示todos的数据：需要使用Vue模板的一个最常用的v-for指令标记
v-for：枚举一个数组并将对象渲染成一个列表，例如：
```
<ul>
		<li v-for="todo in todos">
			<label>{{ todo.value }}</label>
		</li>
</ul>
```

2. 样式绑定步骤：
	- 安装webpack支持less编译的包方法
```
npm i less style-loader css-loader less-loader -D
```
	- 在webpack.config.js的modules设置内加入以下配置
```
module:{
	rules:[
		{
			test: /\.less$/,
			loader: "style!css!less"
		}
	]
}
```
	- 在/assets/中添加一个todos.less文件，并在App.vue的组件定义内引入less样式表

```
import './assets/todos.less'

export default{
	...
}
```
**通过import将样式文件导入是一种全局性的做法，也就是说，在每一个页面内的`<head>`中都会有一个样式表，这样很容易导致样式冲突，如果希望样式表仅应用于当前组件，可以使用`<style scoped>`,然后用CSS的@import导入样式表**

```
<style scoped>
	@import './assets/todos.less'
</style>
```
Vue属性绑定：
Vue属性的绑定是通过v-bind实现的，完整的写法如下：
```
<li v-for="(todo,index)">
```

##Vue-router
1. 路由是定义一系列的访问地址规则，路由引擎根据这些规则匹配并找到对应的处理页面，然后将请求转发给页进行处理。前端路由是直接找到与地址匹配的一个组件或对象直接将其渲染出来。
改变浏览器地址而不向服务器发出请求有两种做法：
	- 在地址中加入#以欺骗浏览器，地址的改变是由于正在进行页内导航
	- 使用HTML5的window.history功能，使用URL的Hash来模拟一个完整的URL。
2. 新建路由并进行跳转步骤：
	- 在src文件下新建几个vue文件
```
最简单的vue文件如下：
<template>
  <div>首页 me</div>
</template>
<style></style>
<script>
export default {}
</script>
```
	- 在src/router/index中引入路由

```
如下：
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../Home'
import Cart from '../Cart'
import Explorer from '../Explorer'
import Me from '../Me'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',  //使用history模式，利用history.pushState API来完成URL跳转而无需重新加载页面。
  base: __dirname,  //应用的基路径
  routes: [
    {path: '/home', component: Home},
    {path: '/explorer', component: Explorer},
    {path: '/me', component: Me},
    {path: '/cart', component: Cart}
  ]
})
```

 - 在main.js文件中引入router

```
import Vue from 'vue'
import App from './App'
import router from './router/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```
至此便可以运行程序测试了。在浏览器中输入http://loaclhost:8080/...便可以跳转不同的页面。
3. 路由的模式
传统意义上的路由是多个URL或者URL规则组成的，对服务端而言，网页的访问时无状态的，称之为服务端路由。而浏览器的history API则给与了一种实现可状态化页面的可能，因为页面的跳转并不会出现页面刷新