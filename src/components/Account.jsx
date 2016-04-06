import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'

//Account Management

class Account extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>Account</div>
    )
  }
}

reactMixin(Account.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
  }
}

export const AccountContainer = connect(mapStateToProps, actionCreators)(Account)
