import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from '../modules/Main'
import Catalog from '../modules/Catalog'
import Product from '../modules/Product'

const Routes = () => (
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="catalog(/**)" component={Catalog} />
      <Route path="product" component={Product} />
    </Route>
  </Router>
)

export default Routes
