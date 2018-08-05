import faker from 'faker'
import React, { Component } from 'react'
import { BudgetHeader, BudgetList } from '../components'
import { withDB } from '../context/DBContext'
import { range } from '../util'

class BudgetPage extends Component {
  constructor(props) {
    super(props)
    const NUM_OF_GROUPS = 3

    const groups = []
    for (let i = 0; i < NUM_OF_GROUPS; ++i) {
      const name = faker.commerce.product()
      const NUM_OF_ITEMS = range(3, 5)
      const items = []
      for (let j = 0; j < NUM_OF_ITEMS; ++j) {
        items.push({
          name: faker.commerce.product(),
          budget: range(0, 1000),
          available: range(-250, 1000),
        })
      }

      groups.push({ name, items })
    }

    this.state = { groups }
  }

  render() {
    return (
      <main>
        <BudgetHeader groups={this.state.groups} />
        {this.state.groups.map((group, index) => (
          <BudgetList {...group} key={index} />
        ))}
      </main>
    )
  }
}

export default withDB(BudgetPage)
