import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import './styles.scss'

class Catalog extends Component {
  render() {
    const { onIncrement, counter, children } = this.props

    return (
      <div className="catalogs">
        <div>
          Catalogs, total {counter}
          <button type="button" onClick={onIncrement}>+ Increment</button>
          <br />
          <Link to="/catalog/m">Catalog M</Link>
          <br />
          <Link to="/catalog/m/1">Catalog M 1</Link>
          <br />
          <Link to="/catalog/k">Catalog K</Link>
          <br />
          <Link to="/product">Product</Link>
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
