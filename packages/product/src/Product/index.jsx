import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Catalogs extends Component {
  render() {
    const { onIncrement, counter } = this.props

    return (
      <div>
        <div>
          Products, total: {counter}
          <button type="button" onClick={onIncrement}>+ Increment</button>
        </div>
        <Link to="/catalog">Catalog</Link>
      </div>
    )
  }
}

const mapProps = (counter) => ({ counter })

const mapActions = {
  onIncrement: () => ({ type: 'INCREMENT_PRODUCT' }),
}

export default connect(mapProps, mapActions)(Catalogs)
