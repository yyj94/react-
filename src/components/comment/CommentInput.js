/*
 * @Author: Jarvis Ye
 * @Date: 2019-03-20 22:47:46
 * @Last Modified by: Jarvis Ye
 * @Last Modified time: 2019-03-20 23:21:29
 */
import React, { Component } from 'react'

class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  // 处理姓名表单事件
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  // 处理内容表单事件
  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }
  // 提交按钮
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({ username, content })
      this.setState({ content: '' });
    }
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput;