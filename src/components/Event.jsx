import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


//Landing Page Junk Stuff

export class Event extends Component {
  constructor(props) {
    super(props)
  }
  handleEdit(e) {
    e.preventDefault()
  }
  handleDelete(e) {
    e.preventDefault()
    this.props.deleteEvent(this.props.projectId, this.props.id)
  }
  render() {

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.description}</td>
        <td>{this.props.date}</td>
        <td>
          <button onClick={this.handleEdit.bind(this)} className="btn btn-warning">Edit</button>
          <button onClick={this.handleDelete.bind(this)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

reactMixin(Event.prototype, PureRenderMixin)
