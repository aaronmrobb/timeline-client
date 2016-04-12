import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'


//Landing Page Junk Stuff

export class Project extends Component {
  constructor(props) {
    super(props)
  }
  handleEdit(e) {
    e.preventDefault()
  }
  handleDelete(e) {
    e.preventDefault()
    this.props.deleteProject(this.props.id)
  }
  render() {

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.description}</td>
        <td>
          <Link to={`/projects/${this.props.id}`}>
            <button className="btn btn-success">
              View/Edit
            </button>
          </Link>
        </td>
        <td>
          <button className="btn btn-warning" onClick={this.handleDelete.bind(this)}>
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

reactMixin(Project.prototype, PureRenderMixin)
