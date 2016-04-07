import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import reducer from './reducer.js'
import { NavContainer } from './components/Nav.jsx'
import { AccountContainer } from './components/Account.jsx'
import { HomeContainer } from './components/Home.jsx'
import { ProjectsContainer } from './components/Projects.jsx'
import { SignupContainer } from './components/Signup.jsx'


require('../styles/main.scss')

const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
      <div className="app-wrapper">
        <NavContainer />
        <div className="main">
          <Router history={hashHistory}>
            <Route path="/" component={HomeContainer}/>
            <Route path="/account" component={AccountContainer} />
            <Route path="/projects" component={ProjectsContainer} />
            <Route path="/signup" component={SignupContainer}/>
          </Router>
        </div>
    </div>
  </Provider> ,
  document.getElementById('app')
)
