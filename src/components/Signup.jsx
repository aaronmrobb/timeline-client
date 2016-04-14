import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/sign-up'

//Landing Page Junk Stuff

export class Signup extends Component {
  constructor(props) {
    super(props)
  }
  handleCreateUser(e) {
    e.preventDefault()
    this.props.createUser()
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Sign Up</h1>

          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.handleCreateUser.bind(this)}>
              <div className="form-group">
                <label htmlFor="email">
                  Email:
                </label>
                <input className="form-control" type="email" name="email" ref="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>

                <input className="form-control" type="password" name="password" ref="password"/>
              </div>
              <div className="form-group">
                <label htmlFor="password-confirm">Confirm Password:</label>

                <input  className="form-control" type="password" name="password-confirm" ref="password-confirm"/>
              </div>
              <div className="form-group">
                <button className="btn btn-success">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Signup.prototype, PureRenderMixin)
function mapStateToProps(state) {
  return {
  }
}

export const SignupContainer = connect(mapStateToProps, actionCreators)(Signup)
