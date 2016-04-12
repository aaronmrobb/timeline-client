import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


//Landing Page Junk Stuff

export class Project extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.id}</td>
      </tr>
    )
  }
}

reactMixin(Project.prototype, PureRenderMixin)
