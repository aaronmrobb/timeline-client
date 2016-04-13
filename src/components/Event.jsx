import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


//Landing Page Junk Stuff

export class Event extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.description}</td>
        <td>{this.props.date}</td>
        <td><button className="btn btn-warning">Edit</button></td>
      </tr>
    )
  }
}

reactMixin(Event.prototype, PureRenderMixin)
