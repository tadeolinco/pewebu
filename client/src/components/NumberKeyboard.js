import { css } from 'emotion'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import Text from './Text'

const cell = css`
  flex-basis: 25%;
  padding: 1rem;
  border: 0;
`

const blankCell = css`
  ${cell};
  padding: 0;
`

const button = css`
  ${cell};
  cursor: pointer;
  background-color: var(--black);
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s linear;

  &:focus {
    outline: 0;
  }

  &:active {
    background-color: var(--dark-gray);
  }
`

class NumberKeyboard extends Component {
  static propTypes = {
    handleEvent: PropTypes.func.isRequired,
  }

  render() {
    const { handleEvent } = this.props

    return (
      active && (
        <Fragment>
          {/* <div
            className={css`
              position: fixed;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.01);
              height: 100vh;
              width: 100vw;
              z-index: 100;
            `}
          /> */}
          <div
            ref={keyboard => (this.keyboard = keyboard)}
            className={css`
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100vw;
              display: flex;
              flex-wrap: wrap;
              flex-direction: row;
              background-color: var(--black);
              z-index: 200;
            `}
          >
            <button className={button} onClick={() => handleEvent(1)}>
              <Text size={2} color="white">
                1
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent(2)}>
              <Text size={2} color="white">
                2
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent(3)}>
              <Text size={2} color="white">
                3
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent('-')}>
              <Text size={2} color="white">
                −
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent(4)}>
              <Text size={2} color="white">
                4
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent(5)}>
              <Text size={2} color="white">
                5
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent(6)}>
              <Text size={2} color="white">
                6
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent('DEL')}>
              <Text size={2} color="white">
                DEL
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent(7)}>
              <Text size={2} color="white">
                7
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent(8)}>
              <Text size={2} color="white">
                8
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent(9)}>
              <Text size={2} color="white">
                9
              </Text>
            </button>
            <button className={button} onClick={() => handleEvent('CLR')}>
              <Text size={2} color="white">
                CLR
              </Text>
            </button>
            <div className={blankCell} />
            <button className={button} onClick={() => handleEvent(0)}>
              <Text size={2} color="white">
                0
              </Text>
            </button>
            <div className={blankCell} />
            <button className={button} onClick={() => handleEvent('OK')}>
              <Text size={2} color="white">
                OK
              </Text>
            </button>
          </div>
        </Fragment>
      )
    )
  }
}

export default NumberKeyboard
