import React from 'react'

class SVGBackground extends React.Component {
  constructor() {
    super()

    this.state = {
      eventPageX: 0,
      eventPageY: 0,
      offsetTop: 0,
      offsetLeft: 0,
      r: 200
    }

    this.handleOnMouseMove = this.handleOnMouseMove.bind(this)
    this.handleOnTouchMove = this.handleOnTouchMove.bind(this)
  }

  componentDidMount () {
    const self = this
    const container = self._container

    self.setState({
      offsetTop: container.offsetLeft,
      offsetLeft: container.offsetLeft
    })

  }

  handleOnMouseMove (e) {
    e.persist()
    const self = this
    const eventPageX = e.pageX
    const eventPageY = e.pageY
    const container = self._container

    self.setState({
      eventPageX: eventPageX,
      eventPageY: eventPageY,
      offsetTop: container.offsetTop,
      offsetLeft: container.offsetLeft
    })
  }

  handleOnTouchMove (e) {
    e.persist()
    const self = this
    const touch = e.touches[0]
    const eventPageX = touch.clientX
    const eventPageY = touch.clientY

    self.setState({
      eventPageX: eventPageX,
      eventPageY: eventPageY,
      offsetTop: 0,
      offsetLeft: 0
    })
  }

  render () {
    const self = this
    const state = self.state
    const cx = ((state.eventPageX) - (state.offsetLeft - (state.r / 2) ))
    const cy = (state.eventPageY - (state.offsetTop - (state.r / 2) ))

    return (
      <div
           onMouseMove={self.handleOnMouseMove}
           onTouchMove={self.handleOnTouchMove}
           ref={(c) => self._container = c}>
        <div className="relative z1">{ self.props.children }</div>
        <div className="absolute col-12 top-0">
          <svg width="100%"
               height="100%"
               viewBox={'0 0 1122 705'}
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 1.41421 }}>
             <g>
               <circle cx={ 500 - cx } cy={ cy * 0.2 } r={ state.r / 5 } className="fill-red" />
               <circle cx={ cx + 100 * 0.2 } cy={ 300 - cy * 1.1  } r={ state.r / 3 } className="fill-red" />
               <circle cx={ cx * 0.1 } cy={ cy * 0.2 } r={ state.r * 0.12 } className="fill-maroon" />
               <circle cx={ cx * 1.3 } cy={ cy * 3 } r={ state.r * 1.2 } className="fill-red" />
               <circle cx={ cx * 0.25 } cy={ cy * 1.1 } r={ state.r * 0.5 } className="fill-red" />
               <circle cx={ cx * 3 } cy={ cy * 0.2 } r={ state.r * 0.6 } className="fill-red" />
               <circle cx={ cx * 2 } cy={ cy * 3 } r={ state.r * 1 } className="fill-maroon" />
               <circle cx={ cx * 1 } cy={ cy * 1 } r={ state.r } className="fill-maroon" />
             </g>
           </svg>
        </div>
      </div>
    )
  }
}

export default SVGBackground
