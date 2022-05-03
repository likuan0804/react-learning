// reactHooks是react 16.8的新特性,在无状态的函数式组件中实现类似于有状态的类组件的状态管理
import React, {useState, useEffect} from 'react'

import {render} from 'react-dom'

// 函数式组件，无状态使用hooks
const Counter = () =>{
  // useState在函数式组件中可以使用多个,useState的函数参数是默认值，返回值是个数组，
  // 第一个值就是state，第二个就是setState
  const [count, setCount] = useState(10)
  // useEffect的参数是一个回调，不管是组件挂载还是更新都会触发回调函数的执行
  useEffect(() => {
    console.log('更新了')
    //初始化的时候会执行，更新的时候会执行
    document.title = `当前数量为${count}`
  })
  return (
    <div>
      Counter
      <br></br>
      <button onClick={()=>{ setCount(count-1) }}>-</button>
      <span>{count}</span>
      <button onClick={()=>{ setCount(count+1) }}>+</button>
    </div>
  )
}

render(
  <Counter/>,
  document.querySelector('#root')
)