import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk';
import { NavContainer } from './components/Nav'
import { AccountContainer } from './components/Account'
import { HomeContainer } from './components/Home'
import { ProjectsContainer } from './components/Projects'
import { SignupContainer } from './components/Signup'
import { ExploreContainer } from './components/Explore'
import { ProjectPageContainer } from './components/ProjectPage'

require('../styles/main.scss')

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
      <div className="app-wrapper">
        <NavContainer />
        <div className="main">
          <Router history={hashHistory}>
            <Route path="/" component={HomeContainer}/>
            <Route path="/account" component={AccountContainer} onEnter={requireAuth}/>
            <Route path="/projects" onEnter={requireAuth}>
                <IndexRoute component={ProjectsContainer}/>
                <Route path=":id" component={ProjectPageContainer} />
            </Route>
            <Route path="/signup" component={SignupContainer}/>
            <Route path="/explore" component={ExploreContainer}/>
          </Router>
        </div>
    </div>
  </Provider> ,
  document.getElementById('app')
)


function requireAuth(nextState, replace) {
  if (!store.getState().get('user')) {
    replace({
      pathname: '/signup',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
