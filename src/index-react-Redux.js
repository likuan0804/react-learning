import React from 'react'
import { render } from 'react-dom'
import App from './App-react-Redux'
import store from './store'
// provider是react-redux创建的一个组件
import { Provider } from 'react-redux'

console.log(store.getState())
render(
  // 一般直接将provider防砸组建的额最顶层，这个组件炫耀一个store属性
  //provider放在顶层后，所有的子组件都可以通过connect来获取state
  <Provider store ={store}>
    <App></App>
  </Provider>,
  document.querySelector('#root')
)
