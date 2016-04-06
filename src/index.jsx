import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import reducer from './reducer.js'
import { NavContainer } from './components/Nav.jsx'
import { AccountContianer } from './components/Account.jsx'
import { HomeContainer } from './components/Home.jsx'
import { ProjectsContainer } from './components/Projects.jsx'

require('../styles/main.scss')

const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
      <div className="client">
        <NavContainer />
        <div className="main">
          <Router history={hashHistory}>
            <Route path="/" component={HomeContainer}>
              <NavContainer />
              <Route path="/account" component={AccountContianer} />
              <Route path="/projects" component={ProjectsContainer} />
            </Route>
          </Router>
        </div>
    </div>
  </Provider> ,
  document.getElementById('app')
)
