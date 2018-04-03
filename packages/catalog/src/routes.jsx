import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Catalog from './Catalog'

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/catalog" component={Catalog}>
        <Route path="k" component={() => {
          console.log('Catalog K')
          return null
        }} />
        <Route path="m(/:myId)" component={(props) => {
          console.log(`Catalog M ${props.params.myId}`)

          return null
        }} />
      </Route>
    </Router>
  </Provider>
)

export default Routes
