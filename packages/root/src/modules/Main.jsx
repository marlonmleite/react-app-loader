import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router'

const CHANGE_ROUTE = 'CHANGE_ROUTE'

export class Main extends Component {
  constructor(props) {
    super(props)

    this.onChangeRoute = this.onChangeRoute.bind(this)
  }

  onChangeRoute({ detail }) {
    const { router } = this.props
    const { routeParams } = detail

    router.push(routeParams)
  }

  componentWillMount() {
    const { router } = this.props

    global.window.addEventListener(CHANGE_ROUTE, this.onChangeRoute)
  }

  componentWillUnmount() {
    global.window.removeEventListener(CHANGE_ROUTE, this.onChangeRoute)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <ul>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
        {children}
      </div>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main