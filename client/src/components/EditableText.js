import { css } from 'emotion'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NumberKeyboard from './NumberKeyboard'
import Text from './Text'

class EditableText extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    handleChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.children.toString(),
    }
  }

  onNumberKeyboardEvent = key => {
    const { value } = this.state
    switch (key) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        return this.setState({ value: value + key })
      case '-':
        return this.setState({
          value: value[0] === '-' ? value.slice(1) : '-' + value,
        })
      case 'DEL':
        return this.setState({
          value: value.length < 2 ? '0' : value.slice(0, -1),
        })
      case 'CLR':
        return this.setState({ value: '0' })
      case 'OK':
        return
      default:
        return
    }
  }

  render() {
    const { children, handleChange, ...textProps } = this.props

    return (
      <div
        className={css`
          cursor: pointer;
        `}
      >
        <Text {...textProps}>{children}</Text>
        <NumberKeyboard
          active={true}
          handleEvent={this.onNumberKeyboardEvent}
        />
      </div>
    )
  }
}

export default EditableText
