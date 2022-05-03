// react里需要通过ref来获取组件或者dom元素，要使用ref之前必须先调用react的createRef来创建Ref
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types' // 对Prop的类型检查的第三方库

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  }
  static defaultProps = {
    btnText: '添加TODO'
  }
  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
    //进行this绑定

    //在构造器汇总进行ref的创建
    this.inputDom = createRef()
  }
  handleInputChange = (e) => {
    this.setState(()=>{
      return {
        inputValue : e.target.value
      }
    })
  }
  handleAddClick = (id) => {
    if (!this.state.inputValue) {
      return
    }
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue: ''
    }, ()=>{
      this.inputDom.current.focus()
    })
  }
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleAddClick()
    }

  }

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        <input 
        type="text"
        value={this.state.inputValue}
        onChange={this.handleInputChange}
        onKeyUp = {this.handleKeyUp}
        ref={this.inputDom}
        ></input>
        {/* 传多余参数，常见vue()=>{函数 ()} */}
        <button onClick={this.handleAddClick.bind(this, 1234)}>{this.props.btnText}</button>
      </div>
    )
  }
}
