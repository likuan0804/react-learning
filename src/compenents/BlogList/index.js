import React, { Component } from 'react'
import BlogItem from './BlogItem'
import {connect} from 'react-redux'
import  {getPosts } from '../../services'
import { fetchBlogList} from '../../actions/blog'
//容器组件，有自己的state，接受redux，在redux中称为container
class index extends Component {
  componentDidMount() {
    this.props.fetchBlogList()
      console.log(this.props)

  }
  render() {
    const {
      isLoading,
      list,
      errorMsg
    } = this.props
    return (
      isLoading
      ?
      errorMsg
      ?
      <p>错误</p>
      :
      <p>isLoading.....</p>
      :
      <ul>
        {
          list.map(item => {
            return (
              <BlogItem
              key={item.id}
              {...item}
              />
            )
          })
        }
      </ul>
    )
  }
}
const mapStateToProps = state => ({
  list: state.blog.list,
  isLoading: state.blog.isLoading,
  errorMsg: state.blog.errorMsg
})
export default connect(mapStateToProps, { fetchBlogList })(index)