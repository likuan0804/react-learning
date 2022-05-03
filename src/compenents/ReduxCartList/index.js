import React, { Component } from 'react'
import { increatement, decreament, decreamentAsync } from '../../actions/cart'
import { connect } from 'react-redux'
 class CartList extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     CartList: []
  //   }
  // }
  // getState = () => {
  //   this.setState({
  //     CartList: this.props.store.getState().cart
  //   })
  // }
  // componentDidMount() {
  //   console.log('componentDidMount')
  //   this.getState()
  //   this.props.store.subscribe(this.getState)//创建监听
  // }
  render() {
    console.log('render', this.props)
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        {/* <tbody>
          {
            this.state.CartList.map(item => {
              return (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={
                    ()=>{
                    this.props.store.dispatch(decreament(item.id))
                  }
                  }> -</button>
                  <span>{item.amount}</span>
                  <button onClick={
                    ()=>{
                    this.props.store.dispatch(increatement(item.id))
                  }
                  }> + </button>
                </td>
              </tr>
              )
            })

          }
          
        </tbody> */}
        {/* react-redux链接库 */}
        <tbody>
          {
            this.props.cartList.map(item => {
              return (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  {/* <button onClick={
                    ()=>{
                    this.props.dispatch(decreamentAsync(item.id))
                  }
                  }> 等一会再减</button>
                  <button onClick={
                    ()=>{
                    this.props.dispatch(decreament(item.id))
                  }
                  }> -</button>
                  <span>{item.amount}</span>
                  <button onClick={
                    ()=>{
                    this.props.dispatch(increatement(item.id))
                  }
                  }> + </button> */}
                  <button onClick={
                    ()=>{
                    this.props.decreamentAsync(item.id)
                  }
                  }> 等一会再减</button>
                  <button onClick={
                    ()=>{
                    this.props.decreament(item.id)
                  }
                  }> -</button>
                  <span>{item.amount}</span>
                  <button onClick={
                    ()=>{
                    this.props.increatement(item.id)
                  }
                  }> + </button>
                </td>
              </tr>
              )
            })

          }
          
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('store.getState的值',state)
  // 在这里return了什么就可以在this.props里获取什么
  return {
    cartList : state.cart
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add: (id) => dispatch(increatement(id)),
    reduce: (id) =>dispatch(decreament(id))
  }
}//可以是第二个参数传入connect后，props里将没有dispatch
// 第二个参数{increatement，decreament }
// this.props.decreament.bind(this, id)
// connect有四个采纳数，常用的就是前两个
//第一个参数 mapStateToProps将store的state注入到当前组件的props上
// 第二个参数 mapDispatchToProps,主要是把action生成的方法注入到当前组件的props中
// 第二个参数直接{increament, decreament}

// 非装饰器模式
// export default connect(mapStateToProps)(CartList)
export default connect(mapStateToProps, {increatement, decreament, decreamentAsync})(CartList)

// 装饰器模式
// @connect(mapState, {increatement, decreament})
// export default (CartList)