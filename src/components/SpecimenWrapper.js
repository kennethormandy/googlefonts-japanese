import React from 'react'
import Waypoint from 'react-waypoint'

class SpecimenWrapper extends React.Component {
  constructor () {
    super()

    this.handleOnEnter = this.handleOnEnter.bind(this)
  }

  handleOnEnter (e) {
    const self = this
    console.log('handle on enter', e)

    self.props.specimenActive(self.props.font)
    // Callback to change state in parent?
  }

  handleOnLeave () {
    console.log('handle on leave')
    // TODO Cleanup
  }

  render () {
    const self = this

    return (
      <div className="border border-thick">
        <Waypoint onEnter={ this.handleOnEnter } onLeave={ this.handleOnLeave } />
        { self.props.children }
      </div>
    )
  }
}

export default SpecimenWrapper
