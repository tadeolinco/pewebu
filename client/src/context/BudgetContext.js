import faker from 'faker'
import React, { Component } from 'react'
import { range } from '../util'
const { Consumer, Provider } = React.createContext()

export class BudgetProvider extends Component {
  state = {
    isKeyboardActive: true,
    groups: [],

    changeItem: newItem => {
      this.setState({
        groups: this.state.groups.map(
          group =>
            group._id === newItem.groupId
              ? {
                  ...group,
                  items: group.items.map(
                    item => (item._id === newItem._id ? newItem : item)
                  ),
                }
              : group
        ),
      })
    },
  }

  componentDidMount() {
    const NUM_OF_GROUPS = 3

    const groups = []
    for (let i = 0; i < NUM_OF_GROUPS; ++i) {
      const name = faker.commerce.product()
      const NUM_OF_ITEMS = range(3, 5)
      const items = []
      const _id = faker.random.uuid()
      for (let j = 0; j < NUM_OF_ITEMS; ++j) {
        items.push({
          _id: faker.random.uuid(),
          name: faker.commerce.product(),
          budget: range(0, 1000),
          available: range(-250, 1000),
          groupId: _id,
        })
      }

      groups.push({ name, items, _id })
    }

    this.setState({ groups })
  }

  render() {
    return <Provider value={{ ...this.state }}>{this.props.children}</Provider>
  }
}

export const withBudget = Component => props => (
  <Consumer>
    {budgetContext => <Component {...props} budgetContext={budgetContext} />}
  </Consumer>
)
