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

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <div>{this.props.comments.map((comment, i) => <Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />)}</div>
    )
  }
}

export default CommentList;