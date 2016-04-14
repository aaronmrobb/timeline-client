import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/projects'

//Explore

class Explore extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Explore</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            Project area
          </div>
          <div className="col-md-3">
            Side Bar
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Explore.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
  }
}

export const ExploreContainer = connect(mapStateToProps, actionCreators)(Explore)
