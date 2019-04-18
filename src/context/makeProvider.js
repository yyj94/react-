import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default (data) => (OldComponent) => {
  class NewComponent extends Component {
    static childContextTypes = {
      data: PropTypes.object
    }

    constructor() {
      super()
      this.state = { data: null }
    }

    getChildContext() {
      return { data }
    }

    render() {
      return (
        <OldComponent />
      )
    }
  }

  return NewComponent
}
