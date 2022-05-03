import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropsTypes from 'prop-types'

export default class TodoList extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     titile: '1111'
  //   }
  // }
  static propTypes = {
    todos: PropsTypes.arrayOf(PropsTypes.shape({
      id: PropsTypes.number.isRequired,
      title: PropsTypes.string.isRequired,
      completed: PropsTypes.bool.isRequired
    }).isRequired),
    onCompleteChange:PropsTypes.func
  }
  static defaultProps = {
    btnText: '添加TODO'
  }
  render() {
    return (
      <ul>
        {/* <TodoItem/> */}
        {
          this.props.todos.map( todo=> {
            return (
              // <TodoItem 
              // key={todo.id}
              // title={todo.title}
              // isCompleted={todo.isCompleted}
              // />
              // 传递对象不合适，要用展开运算符
              <TodoItem 
              key={todo.id}
              onCompleteChange={this.props.onCompleteChange}
              {...todo}
              />
            )
          })
        }
      </ul>
    )
  }
}
