// reactHooks是react 16.8的新特性,在无状态的函数式组件中实现类似于有状态的类组件的状态管理
import React, {Component, createContext} from 'react'
import {render} from 'react-dom'
// createContext是一个React提供的跨组件传值的方法

//createContext的方法结果有两个对象，一个是提供者，一个是接受者
// Provider和Consumer
// 前者用来提供状态，后者用来接受状态
console.log(createContext())
const {
  Provider,
  Consumer: CounterConsumer// 解构出来重新赋值
} = createContext()

// 封装一个provider,直接使用Provider，不方便管理状态
class CounterProvider extends Component {
  constructor() {
    super()
    // 这里的状态都是共享的，所有CounterProvider的后代组件都可以通过cusmer共享
    this.state ={
      count: 100
    }
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return(
      //使用Provider这个组件，它必须要有一个value值，来传递需要共享的数据，一般会传递一个对象
      <Provider value={
        {
          count: this.state.count,
          onIncrementCount: this.incrementCount,
          onDecrementCount: this.decrementCount
        }
      }>
        {this.props.children}
      </Provider>
    )
  }
}

//第一一个Counter
class Counter extends Component {
  render() {
    return (
      //   <CounterConsumer>
      //   <span>10</span>
      // </CounterConsumer>
      //   报错，里边需要是一个函数
      
      
      <CounterConsumer>
        {
          ({ count }) => {
            // console.log('arg', arg)
            return <span>{count}</span>
        }}
      </CounterConsumer>
    )
  }
}

class CounterBtn extends Component {
  render() {
    return (
      <CounterConsumer>
        {
          ({onDecrementCount, onIncrementCount}) => {
            let handler = this.props.type === 'increamnet' ? onIncrementCount : onDecrementCount
            return <button onClick={handler}>{this.props.children}</button>
    
          }
        }
      </CounterConsumer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <CounterBtn type="decrement" >
          -
        </CounterBtn>
        <Counter></Counter>
        <CounterBtn type="increment" >
          +
        </CounterBtn>
      
      </>

    )
  }
}

render(
  <CounterProvider>
    <App/>
  </CounterProvider>,
  document.querySelector('#root')
)