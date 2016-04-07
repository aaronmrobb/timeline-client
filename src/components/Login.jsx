import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


//Sign In shit toggle

export class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav nav-pills pull-right">
        <button className="btn btn-default navbar-btn">Login</button>
          <div className="dropdown-menu">
               <form className="form" id="formLogin">
                 <input name="username" id="username" type="text" placeholder="Username"/>
                 <input name="password" id="password" type="password" placeholder="Password"/>
                 <button type="button" id="btnLogin" className="btn">Login</button>
               </form>
             </div>
      </div>
    )
  }
}

reactMixin(Login.prototype, PureRenderMixin)
