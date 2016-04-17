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
        <div className="row">
          <div className="col-md-12">
            <h1>Landing Page Thing</h1>
          </div>
        </div>
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
