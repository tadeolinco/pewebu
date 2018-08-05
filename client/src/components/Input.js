import { css } from 'emotion'
import React from 'react'

const Input = ({
  value,
  onChange,
  onBlur,
  size = 0,
  weight = 'normal',
  color = 'black',
}) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={css`
        padding: 0;
        border: 0;
        width: 100%;
        text-align: right;
        font-size: ${1 + size * 0.2}rem;
        font-weight: ${weight === 'bold'
          ? 500
          : weight === 'light'
            ? 300
            : 400};
        color: ${color};
        &:focus {
          outline: 0;
        }
      `}
    />
  )
}

export default Input
