import React, { Component } from 'react'
import PropTypes from 'prop-types'
import makeProvider from './makeProvider';

class Post extends Component {
  static contextTypes = {
    data: PropTypes.object
  }
  componentWillMount() {
    console.log(this.context.data.name, '1111111111111111')
  }
  render() {
    return (
      <div>111111</div>
    )
  }
}

Post = makeProvider({ name: 'Jerry' })(Post)
export default Post