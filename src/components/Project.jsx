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
      <div>this.props.name</div>
    )
  }
}

reactMixin(Project.prototype, PureRenderMixin)
