import React, { Component } from 'react'
import { Route, Link , Redirect, Switch} from 'react-router-dom'
import {
  Artical,
  Home,
  Users,
  NotFount
} from './view'

// 路由
export default class App extends Component {
  state = {
    isLogin: false
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/artical">文章</Link></li>
          <li><Link to="/users">用户</Link></li>
          <li><Link to="/404">404</Link></li>
        </ul>
        <Switch> 
          {/* switch 相当于是switch语法，switch(path)  ^artical 除去^使用 extract*/}
          {/* exact 用来处理有包含关系组件 */}
          <Route component={Home} path="/home"/>
          <Route render= {()=><Home x={2}/>} path="/home"/>
          <Route component={Artical} path="/artical"/>
          <Route path="/users" render= {(routeProps)=> {
            return(
              this.state.isLogin
              ?
              <Users {...routeProps}/>
              :
              <div>
                请登录
              </div>
            )
          }}/>
          <Route component={NotFount} path="/404"/>
          <Redirect to="/home" form="/" exact></Redirect>
          <Redirect to="/404"></Redirect>
            {/* <Route component={Home} path="/home"/>
          <Route component={Artical} path="/artical"/>
          <Route component={Users} path="/users"/> */}
          {/* <Artical/>
          <Users/> */}
          {/* <Route path="/" element={<Navigate to ="/home" />}/> */}

        </Switch>

      </div>
    )
  }
}
// Route组件可以通过component来渲染,也可以通过render来渲染，render是一个函数