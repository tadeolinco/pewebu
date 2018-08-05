import { css } from 'emotion'
import React from 'react'
import BudgetItem from './BudgetItem'

const BudgetList = ({ name, items }) => {
  let totalBudget = 0
  let totalAvailable = 0
  for (const item of items) {
    totalBudget += item.budget
    totalAvailable += item.available
  }

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;

        &:not(:last-of-type) {
          border-bottom: 1rem solid var(--gray);
        }
      `}
    >
      <BudgetItem
        header
        name={name}
        budget={totalBudget}
        available={totalAvailable}
      />
      {items.map((item, index) => <BudgetItem {...item} key={index} />)}
    </div>
  )
}

export default BudgetList
