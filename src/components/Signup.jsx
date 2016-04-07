import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'

//Landing Page Junk Stuff

export class Signup extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Sign Up</h1>
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
