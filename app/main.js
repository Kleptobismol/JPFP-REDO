import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Routes from './components/Routes'

// Ties our components to the redux store
render(
  <Provider store={ store }>
    <Routes/>
  </Provider>,
  // Connects to existing div element on page
  document.getElementById('main')
)
