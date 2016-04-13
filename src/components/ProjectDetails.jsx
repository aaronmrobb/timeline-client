import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


//Landing Page Junk Stuff

export class ProjectDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, description } = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(ProjectDetails.prototype, PureRenderMixin)
