import React from 'react'
import Waypoint from 'react-waypoint'

class SpecimenWrapper extends React.Component {
  constructor () {
    super()

    this.handleOnEnter = this.handleOnEnter.bind(this)
  }

  handleOnEnter (e) {
    const self = this

    if (self.props.specimenActive) {
      self.props.specimenActive(self.props.font)
    }
  }

  handleOnLeave () {
    // TODO Cleanup
  }

  render () {
    const self = this

    return (
      <div className="border border-thick">
        <Waypoint onEnter={ this.handleOnEnter } onLeave={ this.handleOnLeave }>
        { self.props.children }
        </Waypoint>
      </div>
    )
  }
}

SpecimenWrapper.defaultProps = {
  specimenActive: false
}

export default SpecimenWrapper
