import { css } from 'emotion'
import React from 'react'
import EditableText from './EditableText'
import Text from './Text'

const BudgetItem = ({ name, budget, available, header = false }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;

        &:not(:last-of-type) {
          border-bottom: 1px solid var(--gray);
        }
      `}
    >
      <div
        className={css`
          padding: 1rem;
          flex: 4;
        `}
      >
        <Text weight={header ? 'bold' : 'normal'}>{name}</Text>
      </div>
      <div
        className={css`
          padding: 1rem;
          flex: 3;
          text-align: right;
        `}
      >
        <EditableText
          currency
          color={
            budget === 0
              ? 'var(--gray)'
              : budget > 0
                ? 'var(--green)'
                : 'var(--red)'
          }
          weight={header ? 'bold' : 'normal'}
          onChange={() => {
            console.log('changing')
          }}
        >
          {budget}
        </EditableText>
      </div>
      <div
        className={css`
          padding: 1rem;
          flex: 3;
          text-align: right;
        `}
      >
        <Text
          currency
          color={
            available === 0
              ? 'var(--gray)'
              : available > 0
                ? 'var(--blue)'
                : 'var(--red)'
          }
          weight={header ? 'bold' : 'normal'}
        >
          {available}
        </Text>
      </div>
    </div>
  )
}

export default BudgetItem
