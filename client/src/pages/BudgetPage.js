import React, { Component } from 'react'
import { BudgetHeader, BudgetList } from '../components'
import { withBudget } from '../context/BudgetContext'
import consume from '../context/consume'
import { withDB } from '../context/DBContext'

class BudgetPage extends Component {
  render() {
    return (
      <main>
        <BudgetHeader groups={this.props.budgetContext.groups} />
        {this.props.budgetContext.groups.map((group, index) => (
          <BudgetList {...group} key={index} />
        ))}

        {this.props.budgetContext.isKeyboardActive && <NumberKeyboard />}
      </main>
    )
  }
}

export default consume(withDB, withBudget)(BudgetPage)
