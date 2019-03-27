/*
 * @Author: Jarvis Ye
 * @Date: 2019-03-20 22:47:49
 * @Last Modified by: Jarvis Ye
 * @Last Modified time: 2019-03-20 23:22:34
 */
import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render() {
    return (
      <div>{this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}</div>
    )
  }
}

export default CommentList;