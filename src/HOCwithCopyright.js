import React, { Component } from 'react'


// 高阶组件
const withCopyright = (YourComponent) => {
  return class withCopyright extends Component {
    render() {
      console.log(this.props )
      // 为了保证传入的参数的类组件的props有效，所以需展开props
      return (
        <>
          <YourComponent {...this.props}/>
          <div>&copy; 2022 </div>
          这是高阶组件的内容
        </>
      )
    }
  }
}
export default withCopyright

