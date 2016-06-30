//组件库中事件 驼峰标识书写 参数传入和HTML相同
//如果需要在手机、平板上使用react的事件处理，需要开启触摸事件处理开关
React.initializeTouchEvent(true);

//React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。React 来决定如何最高效地更新 DOM。
this.setState({data : data}, callback);//通过setState方法触发页面刷新

//哪些组件应该有 State？
//大部分组件的工作应该是从 props 里取数据并渲染出来。但是，有时需要对用户输入、服务器请求或者时间变化等作出响应，这时才需要使用 State。
//** 尝试把尽可能多的组件无状态化。** 这样做能隔离 state，把它放到最合理的地方，也能减少冗余，同时易于解释程序运作过程。
//常用的模式是创建多个只负责渲染数据的无状态（stateless）组件，在它们的上层创建一个有状态（stateful）组件并把它的状态通过 props 
//传给子级。这个有状态的组件封装了所有用户的交互逻辑，而这些无状态组件则负责声明式地渲染数据。


//哪些 应该 作为 State？
//State 应该包括那些可能被组件的事件处理器改变并触发用户界面更新的数据。 真实的应用中这种数据一般都很小且能被 JSON 序列化。
//当创建一个状态化的组件时，想象一下表示它的状态最少需要哪些数据，并只把这些数据存入 this.state。在 render() 里再
//根据 state 来计算你需要的其它数据。你会发现以这种方式思考和开发程序最终往往是正确的，因为如果在 state 里添加冗余数据或计算所得数据，
//需要你经常手动保持数据同步，不能让 React 来帮你处理。

//哪些 不应该 作为 State？ #
//this.state 应该仅包括能表示用户界面状态所需的最少数据。因此，它不应该包括：
//计算所得数据： 不要担心根据 state 来预先计算数据 —— 把所有的计算都放到 render() 里更容易保证用户界面和数据的一致性。例如，
//在 state 里有一个数组（listItems），我们要把数组长度渲染成字符串， 
//直接在 render() 里使用 this.state.listItems.length + ' list items' 比把它放到 state 里好的多。

//React 组件： 在 render() 里使用当前 props 和 state 来创建它。
//基于 props 的重复数据： 尽可能使用 props 来作为惟一数据来源。把 props 保存到 state 的一个有效的场景是需要知道它以前值的时候，
//因为未来的 props 可能会变化。

//设置默认的 组件props， 也就是说props的赋值途径有两条
//1、通过父级组件传入
//2、通过getDefaultProps方法赋值
this.getDefaultProps = function(){
	return {
		data : ''
	}
}
