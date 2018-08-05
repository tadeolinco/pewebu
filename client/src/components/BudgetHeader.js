import { css } from 'emotion'
import React from 'react'
import Text from './Text'

const BudgetHeader = ({ groups }) => {
  let totalBudget = 0
  let totalAvailable = 0
  for (const group of groups) {
    for (const item of group.items) {
      totalBudget += item.budget
      totalAvailable += item.available
    }
  }

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
      `}
    >
      <div
        className={css`
          flex: 1;
          padding: 0.5rem 1rem;
          background-color: ${totalBudget === 0
            ? 'var(--gray)'
            : totalBudget > 0
              ? 'var(--green)'
              : 'var(--red)'};
        `}
      >
        <Text color="white">Budgeted</Text>
        <br />
        <Text color="white" size={2} weight="bold" currency>
          {totalBudget}
        </Text>
      </div>
      <div
        className={css`
          flex: 1;
          padding: 0.5rem 1rem;
          background-color: ${totalAvailable === 0
            ? 'var(--gray)'
            : totalAvailable > 0
              ? 'var(--blue)'
              : 'var(--red)'};
        `}
      >
        <Text color="white">Available</Text>
        <br />
        <Text color="white" size={2} weight="bold" currency>
          {totalAvailable}
        </Text>
      </div>
    </div>
  )
}

export default BudgetHeader
