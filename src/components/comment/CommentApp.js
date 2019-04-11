/*
 * @Author: Jarvis Ye 
 * @Date: 2019-03-20 22:44:51 
 * @Last Modified by: Jarvis Ye
 * @Last Modified time: 2019-04-11 23:50:44
 */
import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from './wrapWithLoadData'

class CommentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data || []
    }
  }

  componentWillMount() {
    console.log(this.state.comments, 'data is')
  }

  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.props.saveData(comments)
    this.setState({
      comments
    });
  }

  // 删除评论
  handleDeleteComment(index) {
    let comments = this.state.comments
    comments.splice(index, 1)
    this.setState({
      comments
    });
    this.props.saveData(comments)
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
      </div>
    )
  }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp;