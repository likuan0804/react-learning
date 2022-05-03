import React, { Component } from 'react'
import {
  CartList,
  BlogList
} from './compenents'
class App extends Component {
  render() {
    return (
      <div>
        {/* <CartList store={this.props.store}/> */}
        <BlogList/>
      </div>
    )
  }
}

export default App