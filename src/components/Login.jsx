import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classnames from 'classnames'

//Sign In shit toggle

export class Login extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    this.props.toggleLogin()
  }

  render() {
    const dropDownClasses = classnames('dropdown-menu', { open: this.props.loginState})
    console.log(dropDownClasses)
    return (
      <div className="nav nav-pills pull-right">
        <button className="btn btn-default navbar-btn" onClick={this.handleClick.bind(this)}>Login</button>
          <div className={dropDownClasses}>
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
