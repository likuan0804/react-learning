import React, { Component } from 'react'
import classNames from 'classnames'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      isliked: true
    }
  }
  handleLikedClicked = () => {
   // 直接修改无效在react里是不允许的，能修改数据，但是界面不会重新渲染（需要用$forceUpdate）
    //this.state.isliked = !thia.state.isliked

    // 要修改数据，需要使用setState方法，setState方法可以有两个参数
    // setState是异步的
    //第一个参数有两种情况
      // 1> 是个对象
        // this.setState({
        //   isliked: !this.state.isliked
        // })
      // 2>方法能拿到上一次的旧值
      this.setState((preState) => {
        console.log(preState)
        console.log('setState内部的', this.state.isliked)
        return {
          isliked: !preState.isliked
        }
      }, () => {
        // setState 是异步的，如果想要获取最新的state，应该在的哥参数的回调中来获取
        console.log('最新的是state', this.state)
      })
      console.log('外部的', this.state.isliked)

  }
  
  render() {
    return (
      <>
      <div onClick={this.handleLikedClicked} className={classNames({'like': this.state.isliked, 'no-liked': !this.state.isliked} )}>
        {this.state.isliked ? 'YES' : 'NO'}
      </div>
      {/* <style jsx> {
        `
        .like {
          color: red
        }
        .no-liked {
          color: black
        }
          `
        }
          
      </style> */}
      </>
      
    )
  }
}
