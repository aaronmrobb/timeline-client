import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/projects'

//Account Management

class Account extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Some Account Info</h1>
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Account.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
  }
}

export const AccountContainer = connect(mapStateToProps, actionCreators)(Account)
