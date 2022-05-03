
// 数据初始化，在reducer中进行初始化

//为了避免action重复，一般会把actionType放在统一的文件里进行统一的管理
import actionType from '../actions/actionType'
//触发一个action所有的reducers都会收到
const initState=  [{
  id: 1,
  title: 'apple',
  price: 8888,
  amount: 10
},{
  id: 2,
  title: 'orange',
  price: 8888,
  amount: 10
}]
// 创建购物车的reducer。reducer的固定写法是两个参数，
//第一个是state并有一个初始值，第二个是action
export default (state =  initState, action) => {
  //根据不同的action.type，做不通的处理，每次返回一个新的state
  switch(action.type){
    case actionType.CART_AMOUNT_DECREAMENT:
      console.log('减了redurces')
      return state.map( item=> {
        if(item.id === action.payload.id) {
          item.amount -= 1
        }
        return item
      })
    case actionType.CART_AMOUNT_INCREAMENT:
      console.log('加了increament')
      return state.map( item=> {
        if(item.id === action.payload.id) {
          item.amount += 1
        }
        return item
      })
    default:
      //一定要default,返回state
      return state

  }
}