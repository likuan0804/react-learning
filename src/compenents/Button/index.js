import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
// 因为只有Route组件包裹的组件才会有route的属性，所以需要withRouter高阶组件来包裹才会有
 class  index extends Component {
  goHome = () => {
    // this.props.history.push('/home')
    console.log('mmmm',this.props)
  }
  render() {
    return (
      <button onClick={this.goHome}>返回首页</button>
    )
  }
}

export default withRouter(index)