import actionType from "./actionType";
import { getPosts } from "../services";
const startFetchBlogList = () => {
  return {
    type: actionType.START_FETCH_BLOG_LIST
    
  }
}
const fetchBlogListSucess = (payload) => {
  return {
    type: actionType.FETCH_BLOG_LIST_SUCESS,
    payload
  }
}
const fetchBlogListFailed = (payload) => {
  return {
    type: actionType.FETCH_BLOG_LIST_FAILED,
    payload
  }
}

export const fetchBlogList = () =>  dispatch => {
  dispatch(startFetchBlogList())
  getPosts().then(resp=>{
    console.log('，，，，，', resp)
    if (resp.status == 200) {
      dispatch(fetchBlogListSucess({
        list: resp.data,
        errorMsg :''
      }))
    } else {
      dispatch(fetchBlogListFailed({
        errorMsg: '错误'
      }))
    }
  }).catch(error => {
    console.log(error)
    dispatch(fetchBlogListFailed)
  })
}