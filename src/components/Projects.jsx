import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'
import {Project }from './Project'
import classnames from 'classnames'

//Projects

class Projects extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    if(this.props.user) {
      this.props.loadProjects()
    }
  }
  componentWillUpdate(props) {
    if(!this.props.user && props.user) {
      this.props.loadProjects()
    }
  }
  handleSumbit(e) {
    e.preventDefault()
    this.props.createProject(this.refs.name.value, this.refs.description.value)
    this.refs.name.value = ''
    this.refs.description.value = ''
  }
  handleToggleForm(e) {
    e.preventDefault()
    this.props.toggleAddNewForm()
  }
  render() {
    const projects = this.props.projects ? this.props.projects.map((project, idx)=> {
      return <Project name={project.get('name')}
        description={project.get('description')}
        key={idx} id={idx}
        deleteProject={this.props.deleteProject.bind(this)}
      />
    }) : ''
    const addNewFormClasses = classnames('add-new', { active: this.props.formToggle })
    const addNewButtonClasses = classnames('btn', 'btn-success', 'add-new', { active: !this.props.formToggle })
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Projects</h1>
            <button className={addNewButtonClasses} onClick={this.handleToggleForm.bind(this)}>Add New</button>

          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <form className={addNewFormClasses} onSubmit={this.handleSumbit.bind(this)}>
                <div className="col-md-12">
                  <h3>New Project</h3>
                  <div className="form-group">
                    <label for="name">Name:</label>
                    <input className="form-control" name="name" ref="name" id="name" type="text"/>
                  </div>
                  <div className="form-group">
                    <label for="description">Description:</label>
                    <textarea className="form-control" name="description" ref="description" type="text" />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">Create</button>
                  </div>

              </div>

              </form>
            </div>

          </div>
          <div className="col-md-9">
            <table className="table table-bordered project-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Control</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>

                { projects }
              </tbody>
            </table>
          </div>
          <div className="col-md-3">
            Side Bar
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Projects.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    user: state.get('user'),
    projects: state.getIn(['projects', 'data']),
    formToggle: state.getIn(['projects', 'formToggle'])
  }
}

export const ProjectsContainer = connect(mapStateToProps, actionCreators)(Projects)
