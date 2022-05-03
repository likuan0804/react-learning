
//在实际的项目中，store只有一个，但是状态有多个，craeteStore值能传入一个redecer
// 所以需要使用redux中的combineReducers合并reducer,
import { combineReducers } from  'redux'

import cart from './cart'
import blog from './blogList'

export default combineReducers ({
  // 把多个reducer作为combineReducers对象的参数传入，
  // 在外部就可以通过store.getState().cart获取到cart reducer中的state
  cart,
  blog

})