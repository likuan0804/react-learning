//jsx里写js
import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import classNames from 'classnames'
import styled from 'styled-components' // 样式单独拎出来
// style-jsx

const Title = styled.h1`
  color: #F00
`
// 这种方式可以理解为创建了一个简单的react元素
// const app = <h1> Wwlcome React!!</h1>
// 箭头函数创建组件
// const createApp = (props) =>{
//   return (
//   <div>
//     {/* 注释只要在jsx里插入js的代码，就加入一层花括号，注释也是js的代码 */}
//     <h1> Wwlcome {props.title}!!</h1>
//   </div> 
//   )
// }
// const app = createApp({
//   title: 'React 16.8'
// })

// 创建组件的第一种方式，箭头函数
// const APP = (props) =>{
//     return (
//     <div>
//       {/* 注释只要在jsx里插入js的代码，就加入一层花括号，注释也是js的代码 */}
//       <h1> Wlcome {props.title}!!</h1>
//     </div> 
//     )
//   }

  //第二种 类组件生成实例后调用实例的render（）
  // render里的是不符合js语法的，react 在真正渲染的时候会渲染成DOM数
  // 通过React.createElement的方法（三个参数，1，标签名， 2标签的属性 3子元素）
//   class APP2 extends React.Component {
//     render () {
//       console.log(this.props)
//       return (
//       <div>
//         <APP></APP>
//         <h1>类组件</h1>
//         <p>{this.props.title}</p>
//       </div>
//       )
//     }
//   }
//   //类组件调用的原理 
//   // const app = new APP2({title:'类组件是继承React.Component'}).render()
// ReactDom.render(
//   // <APP title="1111"/>,
//   <APP2 title="类组件是继承React.Component"/>,
//   document.querySelector('#root')
// )

// 在react16以前，使用这种方式来创建类组件
// React.createClass({
//   render() {
//     return Element
//   }
// })

class APP3 extends React.Component{
  render() {
    const style = {color: 'blue'}
    return (
      <div>
        {/* <h1 style={{color: '#F00'}}> 元素中的样式</h1> */}
        <Title> 元素中的样式</Title>
        <ol>
          <li style={style}>
            使用style内联创建
          </li>
          <li style={{color: '#F00'}}>
            使用style内联创建
          </li>
          <li className='has-red-text'>
            使用class的方式，在react中class要写成className
          </li>
          <li className={classNames('a',{'b': true, 'c': false})}>
            要动态添加不同的className就可以使用第三方的包叫classNames
            (只有ab,没有c)
          </li>
          <li>styled-components</li>
        </ol>
      </div>
    )
  }

}
ReactDom.render(
  <APP3 title="类组件是继承React.Component"/>,
  // document.querySelector('#root')
)
// const appVDom = {
//   tag:'div',
//   attrs: {
//     className: 'title'
//   },
//   children: [
//     {
//       tag: 'h1'
//     }
//   ]
// }



{/* <MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton> */}
// jsx的原理，其实jsx就是React.creatElement()的语法糖
// React.createElement(
//   MyButton,
//   {color: 'blue', shadowSize: 2},
//   'Click Me'
// )