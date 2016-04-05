import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import reducer from './reducer.js'

require('../styles/main.scss')

const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" />
      
    </Router>
  </Provider> ,
  document.getElementById('app')
)
