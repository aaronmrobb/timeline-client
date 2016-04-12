import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'

//ProjectPage

class ProjectPage extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="container">
        Hi
      </div>
    )
  }
}

reactMixin(ProjectPage.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    activeProject: state.get('activeProject'),
    projects: state.get('projects')
  }
}

export const ProjectPageContainer = connect(mapStateToProps, actionCreators)(ProjectPage)
