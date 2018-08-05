import { css } from 'emotion'
import React from 'react'
import { withRouter } from 'react-router-dom'
import Icon from './Icon'
import Text from './Text'

const Navbar = ({ match }) => {
  const hasOptions = false
  const { path } = match
  const title = path === '/' ? 'Budget' : null

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 4rem;
        padding: 0 1rem;

        background-color: var(--black);
      `}
    >
      <Text size={3} color="white">
        {title}
      </Text>
      {hasOptions && <Icon>more_vert</Icon>}
    </div>
  )
}

export default withRouter(Navbar)
