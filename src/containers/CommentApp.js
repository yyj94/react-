/*
 * @Author: Jarvis Ye 
 * @Date: 2019-03-20 22:44:51 
 * @Last Modified by: Jarvis Ye
 * @Last Modified time: 2019-04-11 23:50:44
 */
import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {
  render() {
    return (
      <div className='wrapper'>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}