import React from 'react'
import { Link } from 'react-router'

const Main = ({ children }) => (
  <div>
    <ul>
      <li><Link to="/catalog">Catalog</Link></li>
      <li><Link to="/product">Product</Link></li>
    </ul>
    {children}
  </div>
)

export default Main