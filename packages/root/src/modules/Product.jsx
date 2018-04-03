import React from 'react'
import { withRouter } from 'react-router'
import withAppLoader from '@entria/react-app-loader'

const elementId = 'container-product'
const appUrl = 'http://localhost:8282'

const AppLoader = withAppLoader({ elementId, appUrl })

export default withRouter(AppLoader)