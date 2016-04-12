import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'
import { Map } from 'immutable'

//ProjectPage

class ProjectPage extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    if(this.props.user) {
      this.props.loadProjects()
    }
  }
  componentWillUpdate(props) {
    console.log('happening')
    if (!this.props.user && props.user) {
      this.props.loadProjects()
    }
  }
  render(){
    const { id } = this.props.params
    const activeProject = this.props.projects ? this.props.projects.filter((p, idx) => {
     return idx === id
   }).first() : Map({
     name: 'Loading'
   })

    return(
      <div className="container">
        <h1>{activeProject.get('name')}</h1>
      </div>
    )
  }
}

reactMixin(ProjectPage.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    user: state.get('user'),
    projects: state.getIn(['projects', 'data'])
  }
}

export const ProjectPageContainer = connect(mapStateToProps, actionCreators)(ProjectPage)
