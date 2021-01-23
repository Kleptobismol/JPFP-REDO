import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router'
import { createBrowserHistory } from 'history'

import store from './store'
import Root from './components/root'
//import Campuses from './components/campuses'
import Students from './components/students'

render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route exact path="/" component={Root} />
      {/* <Route path="/campuses" component={Campuses} /> */}
      <Route path="/students" component={Students} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
