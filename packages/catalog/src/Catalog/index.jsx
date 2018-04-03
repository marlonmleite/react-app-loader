import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import './styles.scss'

class Catalog extends Component {
  goTo(routeParams) {
    const event = new CustomEvent('CHANGE_ROUTE', { detail: { routeParams } })

    global.window.dispatchEvent(event)
  }

  render() {
    const { onIncrement, counter, children } = this.props

    return (
      <div className="catalogs">
        <div style={{ width: '100%', paddingBottom: 10 }}>
          Catalogs, total {counter}
          <button type="button" onClick={onIncrement}>+ Increment</button>
          <br />
          <Link to="/catalog/m">Catalog M</Link>
          <br />
          <Link to="/catalog/m/1">Catalog M 1</Link>
          <br />
          <Link to="/catalog/k">Catalog K</Link>
        </div>
        <div>
          <button onClick={() => this.goTo('/product')}>Go To Product</button>
        </div>
        {children}
      </div>
    )
  }
}

const mapProps = (counter) => ({ counter })

const mapActions = {
  onIncrement: () => ({ type: 'INCREMENT_CATALOGS' }),
}

export default connect(mapProps, mapActions)(Catalog)
