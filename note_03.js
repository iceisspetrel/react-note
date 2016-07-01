//表单组件 都统一添加有value属性
//<select value="B">
//    <option value="A">a</option>
//    <option value="B">b</option>
//    <option value="C">c</option>
//</select>

//<textarea value="abc"></textarea>

//添加value属性后， 表单组件认定为受限组件，在默认情况下用户的输入将不会被响应，元素中的内容也不会改变
//如果需要受限元素响应用户输入需要监听onChange事件，更新state
var InputComponent = React.createClass({
   //初始化state
  getInitialState : function(){
      return {
        inputValue : 'demo'
      }
  },
  //监听受限组件的输入内容变化事件，更新state
  inputChange : function(event){
    this.setState({inputValue : event.target.value});
  },
  
  render : function(){
    return (
      //设置受限组件的绑定值，以及内容变化监听
      //设置value以后组件就被认定为受限组件
      //PS： 此处的value属性应该与html中input.value属性区分开，应该是不同的属性
      <input type="text" value={this.state.inputValue} onChange={this.inputChange}/> 
      
      //如果需要给组件设置默认值，而又不希望组件是默认组件 可以使用defaultValue属性
      //当一个组件没有设置value属性，或者value属性为null时，不属于受限组件
      <input type="text" defaultValue="demo"/>
      <input type="text" defaultValue={this.state.inputValue}/>
    );
  }
});
