import PouchDB from 'pouchdb'
import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext()

export class DBProvider extends Component {
  state = {
    db: null,
    syncing: false,
  }

  componentDidMount() {
    this.setState({ db: new PouchDB('pewebu') })
  }

  render() {
    return <Provider value={{ ...this.state }}>{this.props.children}</Provider>
  }
}

export const withDB = Component => props => (
  <Consumer>{db => <Component {...props} db={db} />}</Consumer>
)
