import React, { Component } from 'react'
import wrapWithLoadData from './wrapWithLoadData'

class TextareaWithContent extends Component {
  render() {
    return <textarea value={this.props.data} />
  }
}

TextareaWithContent = wrapWithLoadData(TextareaWithContent, 'content')
export default TextareaWithContent