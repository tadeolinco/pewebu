import PouchDB from 'pouchdb'
import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext()

export class DBProvider extends Component {
  state = {
    db: null,
    syncing: false,
  }

  context = {}

  componentDidMount() {
    this.setState({ db: new PouchDB('pewebu') })

    this.context = { ...this.state }
  }

  render() {
    return (
      <Provider value={{ ...this.context }}>{this.props.children}</Provider>
    )
  }
}

export const withDB = Component => props => (
  <Consumer>
    {dbContext => <Component {...props} dbContext={dbContext} />}
  </Consumer>
)
