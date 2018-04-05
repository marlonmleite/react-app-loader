import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Catalogs extends Component {
  goTo(routeParams) {
    const event = new CustomEvent('CHANGE_ROUTE', { detail: { routeParams } })

    global.window.dispatchEvent(event)
  }

  render() {
    const { onIncrement, counter } = this.props

    return (
      <div>
        <div style={{ width: '100%', paddingBottom: 10 }}>
          Products, total: {counter}
          <button type="button" onClick={onIncrement}>+ Increment</button>
        </div>
        <div>
          <button onClick={() => this.goTo('/catalog')}>Go To Catalog</button>
        </div>
      </div>
    )
  }
}

const mapProps = (counter) => ({ counter })

const mapActions = {
  onIncrement: () => ({ type: 'INCREMENT_PRODUCT' }),
}

export default connect(mapProps, mapActions)(Catalogs)
