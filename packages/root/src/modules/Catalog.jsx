import React from 'react'
import { withRouter } from 'react-router'
import withAppLoader from '@entria/react-app-loader'

const elementId = 'container-catalog'
const appUrl = 'http://localhost:8181'

const AppLoader = withAppLoader({ elementId, appUrl })

export default withRouter(AppLoader)