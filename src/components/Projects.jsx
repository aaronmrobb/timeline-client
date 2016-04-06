import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'

class Projects extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>Projects</div>
    )
  }
}

reactMixin(Projects.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
  }
}

export const ProjectsContainer = connect(mapStateToProps, actionCreators)(Projects)
