import React, { Component } from 'react'
import {
  Link,
  Route

} from 'react-router-dom'
import ArticalDetail from './ArticalDetail'

//路由传参的方式
//query
// 动态路由 /path/:param => param
// 使用state隐式传参

export default class Artical extends Component {
  render() {
    return (
      <div>
        <Link to="/artical/1?from=artical">文章一</Link>
        <Link to={
          {
            pathname: '/artical/2',
            state: {
              from: 'artical'
            }

          }
        }>文章二</Link>
        <Route component={ArticalDetail} path="/artical/:id"/>
      </div>
    )
  }
}
