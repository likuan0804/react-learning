import actionType from "./actionType";



// action有两种写法
// 第一种写成一个对象，这是标准的action，
// 但是不方便传递参数
// export const increatement = {
//   type: actionType.CART_AMOUNT_INCREAMENT,
//   payload: {
//     id
//     }
//   }

// 为了传递参数，所以要写成一个函数，传递参数

// 普通的写法相当于自动dispatch
export const increatement = (id)=>  {
  console.log('加了')
  return {
    type: actionType.CART_AMOUNT_INCREAMENT,
    payload: {
      id
    }
  }
}

export const decreament =(id)=>  {
  console.log('减了')
  return {
    type: actionType.CART_AMOUNT_DECREAMENT,
    payload: {
      id
    }
  }
}
//异步需要一个中间件，不能像普通的action一样,需要过一会在dispatch
//异步action return的是一个 方法
// 使用redux-thunk之后，就可以在actionCreater中return一个方法
// export const decreamentAsync =(id)=>  {
//   return (dispatch) => {
//     setTimeout(() => {
//       console.log('decreamentAsync减了')
//       //手动dispatch,中间件将异步action变成了通后，手动dispatch
//       dispatch(decreament(id))
//     }, 2000)
//   }
// }
// 等同于
export const decreamentAsync = id => dispatch => {
  setTimeout(() => {
    console.log('decreamentAsync减了')
    //手动dispatch,中间件将异步action变成了通后，手动dispatch
    dispatch(decreament(id))
  }, 2000)
}