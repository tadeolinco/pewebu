import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Text from './Text'

class EditableText extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  focusInput = () => {
    this.input.focus()
    console.log('focusing')
  }

  render() {
    const { children, onChange, ...textProps } = this.props

    // fake your own input dialogue

    return (
      <div onClick={this.focusInput}>
        <Text {...textProps}>{children}</Text>
      </div>
    )
  }
}

export default EditableText
