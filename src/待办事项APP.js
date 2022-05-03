import React, { Component, Fragment} from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './compenents'

import {getTodos} from './services'



// rcc 
// state只存在类组件中，有状态组件，
// 非受控组件，有自己的state的，不接受props也就是 App.js,
// 半受控组件，有自己的state也接受props
//函数式组件是无状态组件，完全受控组件，所有的值都是props得来的
export default class App extends Component {
  // state= {
  //   title: '待办事项列表'
  // }
  constructor () {
    super()
    this.state = {
      title: '待办事项列表',
      desc:'今日事今日毕',
      article:'<div>hashkjhjhj</div>',
      todos:[],
      isLoading: true
    }
  }
  getdata = ()=>{
    getTodos().then(resp=>{
      console.log(resp)
      if (resp.status === 200) {
        this.setState({
          todos: resp.data
        })
      }
    }).catch(error => {
      console.log(error);
    })
    .finally(()=> {
      this.setState({
        isLoading: false
      })
    })
  }
  componentDidMount() {
    this.getdata()
  }
  onCompleteChange = (id, checked)=> {
    this.state.todos.map(item => {
      if(item.id === id) {
        item.completed = checked
      }
      return item
    })
    this.setState({
      todos: this.state.todos
    }, ()=>{
    })
  }
  addTodo = (todoTitle) => {
    // this.state.todos.push({
    //   id: Math.random(),
    //   title: '打豆豆',
    //   assignee: 'lilei',
    //   completed: true
    // })
    this.setState({
      // todos: [...this.state.todos, {
      //   id: Math.random(),
      //   title: '打豆豆',
      //   assignee: 'lilei',
      //   completed: true
      // }]
      todos: this.state.todos.concat({
        id: Math.random(),
        title: todoTitle,
        assignee: 'lilei',
        completed: true
      })
    })
    
  }
  render() {
    return (
      <Fragment> 
        {/* Fragment用来替换空标签 等于<>，如果用div会生成一个空标签 */}
        <TodoHeader desc={this.state.desc} x={1} y={2}>
          {this.state.title}
        </TodoHeader>
        <TodoInput
          btnText="ADD"
          addTodo={this.addTodo}
          >
          inputChildren
        </TodoInput>
        {
          this.state.isLoading
          ? 
          <div>loading</div>
          :
          <TodoList 
          todos={this.state.todos}
          onCompleteChange={this.onCompleteChange}
        />
        }
       
        <Like/>
        {/* 循环渲染 */}
        {
          this.state.todos.map(todo => {
            return <div key={todo.id}>{todo.title}</div>
          })
        }
        {/* 类似于v-html */}
        {
          <div dangerouslySetInnerHTML={{__html: this.state.article}} />
        }
      </Fragment>


      // <> 
      //   {/* Fragment用来替换空标签 等于<>，如果用div会生成一个空标签 */}
      //   <TodoHeader/>
      //   <TodoInput/>
      //   <TodoList/>
      // </>
    )
  }
}

