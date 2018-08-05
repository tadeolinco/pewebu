import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BudgetPage from './pages/BudgetPage'

const routes = [{ to: '/', component: BudgetPage }]

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            {routes.map(route => <Route {...route} key={route.to} />)}
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
