import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'
import { Login } from './Login.jsx'

//Navigation Outside of Router

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">

                <button type="button" className="navbar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Timelines</a>
              </div>
              <div className="navbar-collapse navbar-left collapse">
                <ul className="nav navbar-nav">
                  <li><a href="/#/account">Account</a></li>
                  <li><a href="/#/projects">Projects</a></li>

                 </ul>
              </div>
              <Login loginState={this.props.loginForm} toggleLogin={this.props.toggleLogin}/>
          </div>
      </nav>
    )
  }
}

reactMixin(Nav.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    loginForm: state.get('loginForm')
  }
}

export const NavContainer = connect(mapStateToProps, actionCreators)(Nav)
