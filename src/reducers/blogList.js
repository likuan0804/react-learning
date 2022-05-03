
import actionType from '../actions/actionType'

const initState = {
  list: [],
  isLoading: false,
  errorMsg :''
}
export default (state = initState, action) => {
  switch(action.type){
    case actionType.START_FETCH_BLOG_LIST:
      console.log('isLoading')
      return {
        ...state,
        isLoading: true
      }
    case actionType.FETCH_BLOG_LIST_SUCESS:
      console.log('Loading',action )
      return {
        ...state,
        isLoading: false,
        list: action.payload.list
      }
    case actionType.FETCH_BLOG_LIST_FAILED:
      console.log('FAILED',action )
      return {
        ...state,
        isLoading: true,
        errorMsg: action.payload.errorMsg
      }
    default:
    return state
  }
  
}