import React from "react";
import { render } from 'react-dom'


//如果想要全局的苦战React.component的prototype,比如想把Ajax的方法瓜子啊的全局额this上

// import * as service from './services'
// // 挂载在类组件的父级的原型上，然后就可以通过this.http来调用
// React.Component.prototype.http = service

import App from './App'
render (
  <App/>,
  document.querySelector('#root')
)