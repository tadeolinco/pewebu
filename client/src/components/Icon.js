import { css } from 'emotion'
import React from 'react'

const Icon = ({ children, size = 24, active = true, variant = '' }) => {
  return (
    <i
      className={
        'material-icons ' +
        css`
          font-size: ${size}px;
          color: ${!variant
            ? 'black'
            : variant === 'dark'
              ? active
                ? 'rgba(0, 0, 0, 0.54)'
                : 'rgba(0, 0, 0, 0.26)'
              : active
                ? 'rgba(255, 255, 255, 1)'
                : 'rgba(255, 255, 255, 0.3)'};
        `
      }
    >
      {children}
    </i>
  )
}

export default Icon
