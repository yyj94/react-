/*
 * @Author: Jarvis Ye
 * @Date: 2019-03-20 22:47:46
 * @Last Modified by: Jarvis Ye
 * @Last Modified time: 2019-04-11 23:46:55
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import wrapWithLoadData from './wrapWithLoadData'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      username: props.data || '',
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
      this.props.onSubmit({ username, content, createdTime: +new Date() })
      this.setState({ content: '' });
      this.props.saveData(username)
    }
  }
  componentDidMount() {
    this.commentInput.focus()
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
            <textarea ref={(input) => this.commentInput = input} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
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


CommentInput = wrapWithLoadData(CommentInput, 'username')
export default CommentInput;