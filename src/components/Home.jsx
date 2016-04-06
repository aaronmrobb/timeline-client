import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>Home</div>
    )
  }
}

reactMixin(Home.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
  }
}

export const HomeContainer = connect(mapStateToProps, actionCreators)(Home)
