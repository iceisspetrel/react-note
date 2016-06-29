/*
 * 简单记录注释react的使用要点
 */
 
 //依赖： react react-dom browser
 //type="text/babel" 需要browser将jsx编译为js

var Item = React.createClass({

	click : function(){
		this.props.action(); //通过引用关系调用 父组件的doSomething方法
	}

	render : function(){
		//获取父节点传入数据，并遍历构建模板
		var rNodes = this.props.data.map(function(item, index){
			return (
				<div>
					//ref属性将书写此属性的节点映射到组件this下的refs中
					//this.refs.author 等价于 document.getElementById('author')
					<span ref="author" id="author">{item.author} : </span>
					<span ref="desc">{item.desc}</span>
				</div>
				//模板中的事件需要以驼峰标识书写
				<button onClick={this.click}>Click</button>
			);
		});

		return rNodes;
	}
});

//自定义component 自定义组件的首字母必须大写，render中根据大小写规则识别react重写的标签以及自定义组件
//render函数返回
var MyConponent = React.createClass({

	//框架方法
	//初始化设置state属性 
	getInitialState : function(){
		return {data : [{
			author : 'petrel.iceiss',
			desc   : 'A smart man !!!'
		}]};
	},

	//框架方法
	//用于数据加载， 源码中目测应该是在getInitialState之后执行
	componentDidMount : function(){
		//例如用ajax请求服务，修改state的值。修改后，有后代组件引用state的话 将会自动更新组件
		//类似angular的双向绑定
	},

	//框架方法
	render : function(){
		return (
			//模板中引用对象数据需要使用'{}'包起来, 属性方法传递通用
			//Item组件中通过this.props.state this.props.action中接收
			//可以与angular指令的scope参考学习
			<Item data={this.state.data} action={this.doSomething}/> 
		)；
	},

	//自定义方法，可以传递给children引用， 类似angular指令中的 '&'
	doSomething : function(){

	}
});

//react总入口 
ReactDom.render(
	<MyConponent/>, //第一个参数可以是react重写的html标签 也可以是通过react衍生的自定义component
	document.getElementById('') //必须是js源生选择器
);
