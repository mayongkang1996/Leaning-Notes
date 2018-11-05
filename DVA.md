DVA学习
dva是基于现有应用架构（redux+react-router+redux-saga）的一层轻量封装
一、整个程序的入口文件是在根目录下的index.js文件
1. dva流程：
	- 初始化
	- 加载插件
	- 加载models
		- services
		- utils
	- 加载路由
		- routes
		- Components
	- 启动应用
2. app.model(obj)
	- namespace:model的命名空间
	- state：初始state
	- reducers：同步的修改状态的操作，由action触发`(state,action) => state`
	- effects:异步的操作，并不直接修改state，可以调用actions(action,{put,call,select})
	- subscription:异步的只读操作，并不直接修改state，可以调用actions。`({ diaspatch, history })`
3. put(action)和dispatch(action)
effects中的put(action)等同于subscription(action),作用是分发一个action