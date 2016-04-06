import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'

//Navigation Outside of Router

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>Nav</div>
    )
  }
}

reactMixin(Nav.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
  }
}

export const NavContainer = connect(mapStateToProps, actionCreators)(Nav)
