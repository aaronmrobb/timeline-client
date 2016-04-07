import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


//Landing Page Junk Stuff

class Signup extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Sign Up</h1>
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Signup.prototype, PureRenderMixin)
