import React, { Component, createRef } from 'react'

//函数式组件没有生命周期
// 类组件才有生命周期

// React16
export default class TodoItem extends Component {
  
  constructor(props ) {
    super()
    this.checkRef = createRef()
    this.state = {
      computedText: props.completed ? '完成' : '未完成',//老版本
      completedText: ''// 新版本
    }
  }
  static getDerivedStateFromProps (props) {
    console.log('getDerivedStateFromProps' )
    // 静态方法没有this
    // this.setState({
    //   completedText: props.completed ? '完成' : '未完成'
    // })
    return{
      completedText: props.completed ? '完成' : '未完成'
    }
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // 不能和getDerivedStateFromProps公用
  //   console.log('UNSAFE_componentWillReceiveProps' )
  //   this.setState({
  //     computedText: nextProps.completed ? '完成' : '未完成'
  //   })
  //     //constructor只会执行一次，所以需要componentWillReceiveProps来setState
  // }
  handleCheckboxChange = () =>{
    const  {
      id,
      onCompleteChange
    } = this.props
    console.log(this.checkRef)
    onCompleteChange(id, this.checkRef.current.checked)
    // this.props.onCompleteChange(this.props.id, this.checkRef.current.checked)
  }
  // static getDerivedStateFromProps () {
  //   return {}
  // 和下边的componntWillMount是互斥的
  // }
  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount')
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('nextProps', nextProps)
  //   // console.log('nextState', nextState)
  //   // console.log('this.state', this.state)
  //   // console.log('this.props', this.props)
  //   //只渲染一次通过关键字段判断，一般借用lodash库的isEqual来判断
  //   return nextProps.completed != this.props.completed
      // 可以直接替换Component,让类组件通过继承pureComponent
  // }
  render() {
    console.log('todoItem render')
    const {
      completed,
      title
    } = this.props
    return (
      <li>
        <input
          checked={completed}
          type="checkbox"
          onChange={this.handleCheckboxChange}
          ref={this.checkRef}
        />
        <span>
          {title} {completed ? '已完成' : '未完成'} {this.state.computedText} {this.state.completedText}
        </span>
      </li>
    )
  }
}
