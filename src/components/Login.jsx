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
  handleSubmit(e) {
    e.preventDefault()
    this.props.userLogin(this.refs.username.value, this.refs.password.value)
  }
  render() {
    const dropDownClasses = classnames('login', 'dropdown-menu', { open: this.props.loginState})
    return (
      <div className="nav nav-pills pull-right">
        <button className="btn btn-default navbar-btn" onClick={this.handleClick.bind(this)}>Login</button>
          <div className={dropDownClasses}>
               <form className="form" id="formLogin" onSubmit={this.handleSubmit.bind(this)}>
                 <div className="form-group">
                   <input ref="username" className="form-control" name="username" id="username" type="text" placeholder="Username"/>
                 </div>
                 <div className="form-group">
                   <input  ref="password" className="form-control" name="password" id="password" type="password" placeholder="Password"/>
                 </div>
                 <div className="form-group">
                   <button type="submit" id="btnLogin" className="btn btn-default">Login</button>
                 </div>
               </form>
             </div>
      </div>
    )
  }
}

reactMixin(Login.prototype, PureRenderMixin)
