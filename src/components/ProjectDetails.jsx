import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Event } from './Event'

//Landing Page Junk Stuff

export class ProjectDetails extends Component {
  constructor(props) {
    super(props)
  }
  handleCreateEvent(e){
    e.preventDefault()
  }
  render() {
    const { name, description, events} = this.props
    const eventList = events.map((e, idx) => {
      return <Event name={e.get('name')} time={e.get('time')} key={idx} id={idx} />
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <table className="table table-bordered">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Control</th>
                  </tr>
                </thead>
                <tbody>
                  { eventList }

                </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="col-md-12">
              <form onSubmit={this.handleCreateEvent}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input className="form-control" ref="name" name="name" type="text"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input className="form-control" ref="date" name="date" type="date"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea className="form-control" ref="description" name="description"></textarea>
                </div>
                <div className="form-group">
                  <button className='btn btn-success'>Add Event</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

reactMixin(ProjectDetails.prototype, PureRenderMixin)
