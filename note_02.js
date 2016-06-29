//组件库中事件 驼峰标识书写 参数传入和HTML相同
//如果需要在手机、平板上使用react的事件处理，需要开启触摸事件处理开关
React.initializeTouchEvent(true);

//React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。React 来决定如何最高效地更新 DOM。
this.setState({data : data}, callback);//通过setState方法触发页面刷新
