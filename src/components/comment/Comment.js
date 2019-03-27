/*
 * @Author: Jarvis Ye
 * @Date: 2019-03-20 22:47:39
 * @Last Modified by: Jarvis Ye
 * @Last Modified time: 2019-03-20 23:18:25
 */
import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}

export default Comment