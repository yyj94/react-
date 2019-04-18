import React, { Component } from 'react'
import wrapWithLoadData from '../components/wrapWithLoadData'

class TextareaWithContent extends Component {
  render() {
    return <textarea value={this.props.data} />
  }
}

TextareaWithContent = wrapWithLoadData(TextareaWithContent, 'content')
export default TextareaWithContent