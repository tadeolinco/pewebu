import { css } from 'emotion'
import React from 'react'
import { toCurrency } from '../util'

const Text = ({
  children,
  size = 0,
  weight = 'normal',
  color = 'black',
  currency = false,
}) => {
  return (
    <span
      className={css`
        font-size: ${1 + size * 0.2}rem;
        font-weight: ${weight === 'bold'
          ? 500
          : weight === 'light'
            ? 300
            : 400};
        color: ${color};
      `}
    >
      {currency ? toCurrency(+children) : children}
    </span>
  )
}

export default Text
