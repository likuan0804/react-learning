import { createStore, applyMiddleware} from 'redux'
// createStore是redux提供的一个创建store的方法，
import thunk  from 'redux-thunk'

//引入全局后的reducer
import rootReducer from './reducers'

//createStore的第一个参数必须是reducers,
// 如果是多个需要在reducers目录下先使用combineReducers合并后导出
export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)