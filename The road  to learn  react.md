#the road learn to react
###node 和 npm
1. npm install react :安装react
2. npm init -y :-y表示将package.json内容初始化为默认值。
3. npm install --sava-dev <package>  --save-dev 表示该node报只是用作开发环境的一部分，并不会被作为产品代码的一部分被发布。
4. npm install react react-dom 通过一条命令来安装多个包
###零配置搭建react应用：
1. npm install -g create-react-app  
###ES6箭头函数
1. function(){...}   相当于  () => {...}
**当函数只有一个参数时，可以不加（），但是如果有多个，必须保留（）**
2. 类都有一个用来实例化自己的构造函数，这个构造函数可以用来传入参数来赋给类的实例。此外，react Component类暴露出来的方法都是公共的接口，这些方法中有一个方法必须被重写，其他的则不一定必须被重写，render（）方法是必须被重写的方法，因为他定义了一个React组建的输出。

###总结：
1. 使用create-react-app创建一个React应用
2. JSX混合使用了HTML和JavaScript在React组建的方法中定义它的输出
3. React中，组件、示例和元素是不同的概念
4. ReactDOM.render()是React应用连接DOM的入口方法
5. JavaScript内建函数可以在JSX中使用

#React简介
1. 组件内部状态
组件内部状态也称为局部状态，允许你保存、修改和删除存储在组建内部的属性。当使用ES6编写的组件有一个构造函数，需要强制的调用super（）方法。
2. onDismiss() 通过id来标示那一项需要被删除。
3. 若函数绑定到类，便会成为类方法
4. 受控组件：
元素一旦有人从外部作出修改，就会修改内部的值，在react中被称为不受控组件，因为他们自己处理状态，在React中，你应该确保他们处于可控状态。
做法： 设置输入框的值属性。
5. react带来一种新的模式，将单向数据流引入到单页面应用的生态中。
6. 生命周期方法：
 生命周期方法是嵌入React组件生命周期中的一组挂钩，可以在ES6类组件中被使用，但是不能再无状态组件中使用。
 生命周期方法都有以下几种：
	- constructor(props)：（构造函数）只有组件实例化并插入到DOM中的时候才会被调用，组件实例化的过程叫做组建的挂载。在组件初始化时被调用，在这个方法中你可以设置初始化状态以及绑定类方法。
	- render（）方法也会在组件挂载的过程中被调用，同时当组件更新的时候也会被调用，每当组建的状态或者属性被改变时，组件的render（）方法都会被调用。这个方法是必须有的，返回组件输出的元素，这个方法是一个纯函数，它把属性和状态作为输入并且返回（需要渲染的）元素。
	- componentWillMount（）：在render（）方法之前被调用，可以用作去设置组件内部的状态
	- componentDidMount（）：仅在组件挂载后执行一次，这是发起异步请求去API获取数据的最佳时期
 在函数挂载过程中，四个声明周期方法的调用顺序：constructor()>componentWillMount()>render()>componentDidMount()
 组件的状态或者属性改变的时候用来更新组建的生命周期有五个组件，调用顺序如下：
```
componentWillReceiveProps()>shouldComponentUpdate()>componentWillUpdate()>render()>componentDidUpdate()
```
组件卸载也有生命周期，只有一个生命周期方法：`componentWillUnmount`
componentDidCatch（error，info）：用来捕获组件的错误。
###回顾组件在整个生命周期中发生了什么：
1. 组件通过构造函数得到初始化
2. 将初始化的状态渲染出来，但是阻止了组件的显示（此时本地状态的结果为空）
3. React允许组件通过返回null来不渲染任何东西。
4. componentDidMount（）生命周期函数执行（从API中异步拿到了数据，一旦数据拿到，组件通过setSearchTopStories()函数改变组件内部的状态）
5. 由于状态的更细你，update的生命周期开始运行，组件再次执行render()方法，但这次组件的背部状态中的结果已经填充，不再是空了，因此组件将重新渲染Table组件的内容。
###条件渲染
1. if-else
2. 三元运算符
```
{
	result
	? <Table
		list={result.hits}
		pattner={searchTerm}
		onDismiss={this.onDismiss}
		/>
		:null
}
```
3. 运用&&逻辑运算符
```
true && 'Hello world'  结果为Hello world
false && 'Hello world' 结果为false
```

###分页抓取
1. 从result对象中拿到hits字段和pages字段
2. 检查老的hits字段是否存在，当夜吗为0时，这应该是一个来自componentDidMount()或者onSearchSubmit()方法的新的搜索请求，所以hits是空的，但是当你通过点击“More“按钮去抓取更多的分页数据时，页码不为0；此时他是下一页，老的hits已经存储在状态中等待着新的分页合并。
3. 若不想覆盖老的hits，可以合并老的hits以及API返回新的hits，这两个列表的合并可以通过数据扩展操作符完成。
4. 将合并的hits和页码设置到本地组件的状态中。
5. Enzyme API中的三种渲染机制：
	- shallow() 使用场景：不论怎样都尝试使用浅渲染
	- mount()   需要测试componnentDIdMount()或componentDidupdate()
	- render()  测试一个组件的子组件的渲染，并且不关心生命周期方法和减少渲染花销的话。

##官方文档
一、简单的React
1. JSX生成React元素，如何在JSX中嵌入表达式：

```
声明一个变量name，在JSX中使用它将它包装在花括号中
const name = 'Josh';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
	element,
	document.getElementById('root')
);
```

###创建自己的第一个组件：
1. 在src目录下新建一个Welcome.js文件，写入以下代码：

	```
	import React from 'react';
	
	class Welcome extends React.Component{
		render(){
			return <h1>Hello,React</h1>
		}
	}
	//导出这个welcome组件，导出之后需要挂载到dom节点上，打开src目录下index.js文件
	export default Welcome
	```
2. 将写好的组件挂载到DOM节点上，打开src目录下的index.js文件中，首先导入Welcome.js文件

	```
	import Welcome from './Welcome'
	```
3. 将写好的组件渲染出来：
	```
	ReactDOM.render(<Welcome />,document.getElementById('root'))
	```

二、JSX
1. JSX中属性与HTML相差不大，但是在JSX中`class`是保留字，所以在写html代码时，需要使用`className`来代替
2. `for`使用`htmlFor`来代替

**主要需要掌握花括号的用法**

三、组建的属性、状态和表单
1. Props（属性）
	props不可改变，只能是纯函数（传入的参数不会改变），从而引出state
2. state（状态）
组件内部的数据，可以动态改变
调用this.setState()是更新state的唯一途径

```
给页面增加一个点赞功能

import React from 'react'
//定义一个类
class ButtonLikes extends React.Component{
	//构造函数
	constructor(props){
		//硬性要求
		super(props)
		//设置状态（什么需要改变设置什么）
		this.state:{
			likes : 0
		}
	}
	//定义一个事件处理函数
	increaseLikes(){
		//让点赞数增加
		this.setState=({ ++ this.state.likes })
	}
	//渲染的结果
	render(){
		return(
			<div className="likes-button-compionent">
			//定义一个Button按钮，具有点击事件，调用上面的函数
				<button className="btn btn-outline-primary btn-lg" onClick={()=> {this.increaseLikes()}}>
					👍 {this.state.likes}
				</button>
			</div>
		)
	}
}

export default ButtonLikes
```

四、组件的生命周期：
1.组件的分类：
- 组件初始化 调用`componentDidMount`方法
- 组件更新  调用`componentDidUpdate`方法
- 组件卸载  调用`componentWillUnmount`方法





















aa