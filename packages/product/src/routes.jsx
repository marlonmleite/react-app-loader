import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Product from './Product'

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/product" component={Product} />
    </Router>
  </Provider>
)

export default Routes
