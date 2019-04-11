/*
 * @Author: Jarvis Ye
 * @Date: 2019-03-20 22:47:39
 * @Last Modified by: Jarvis Ye
 * @Last Modified time: 2019-04-11 21:26:48
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }

  constructor() {
    super()
    this.state = {
      timeString: ''
    }
  }

  componentWillMount() {
    this._updateTimeString()
    this._timer = setInterval(() => {
      this._updateTimeString()
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }

  _updateTimeString() {
    let { createdTime } = this.props.comment
    const duration = (+new Date() - createdTime) / 1000
    console.log(duration)
    this.setState({
      timeString: duration > 60
        ? duration > 60 * 60
          ? duration > 60 * 60 * 24
            ? duration > 60 * 60 * 24 * 7
              ? duration > 60 * 60 * 24 * 31
                ? duration > 60 * 60 * 24 * 365
                  ? `${Math.round(Math.max(duration / 60 * 60 * 24 * 365, 1))} 年前`
                  : `${Math.round(Math.max(duration / 60 * 60 * 24 * 31, 1))} 月前`
                : `${Math.round(Math.max(duration / 60 * 60 * 24 * 7, 1))} 周前`
              : `${Math.round(Math.max(duration / 60 * 60 * 24, 1))} 天前`
            : `${Math.round(Math.max(duration / 60 * 60, 1))} 小时前`
          : `${Math.round(Math.max(duration / 60, 1))} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  _getProcessedContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  render() {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>：
        </div>
        <p dangerouslySetInnerHTML={{ __html: this._getProcessedContent(comment.content) }}></p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
          删除
        </span>
      </div>
    )
  }
}

export default Comment