import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classnames from 'classnames'
import ReactAutomaticForm from 'react-automatic-form'

//Sign In shit toggle

export class Login extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    this.props.user ? this.props.userLogout() : this.props.toggleLogin()

  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.userLogin(this.refs.username.value, this.refs.password.value)
    this.refs.username.value = ''
    this.refs.password.value = ''
  }
  render() {
    const dropDownClasses = classnames('login', 'dropdown-menu', { open: this.props.loginState.get('active') && !this.props.user })
    const statusClass = this.props.loginState.getIn(['status', 'event']) ?
    classnames(this.props.loginState.getIn(['status', 'event']), 'active', 'status') :
    classnames('status', 'hidden')
    return (
      <div className="nav nav-pills pull-right">
        <button className="btn btn-default navbar-btn" onClick={this.handleClick.bind(this)}>{   this.props.user ? 'Logout' : 'Login'}</button>
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
           <div className={statusClass}>
             {this.props.loginState.getIn(['status', 'message'])}
           </div>
         </form>
        </div>
      </div>
    )
  }
}

reactMixin(Login.prototype, PureRenderMixin)
