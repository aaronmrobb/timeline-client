import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/projects'

//Landing Page Junk Stuff

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <h1>Some landing page bullshit</h1>
      </div>
    )
  }
}

reactMixin(Home.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
  }
}

export const HomeContainer = connect(mapStateToProps, actionCreators)(Home)
