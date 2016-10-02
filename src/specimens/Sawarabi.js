import React from 'react'
import Section from '../components/Section'

// require('../../build/fonts/sawarabigothic/SawarabiGothic-Regular.ttf')

class SpecimenSawarabi extends React.Component {
  constructor(props) {
    super(props)

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
    const state = this.state
    const cx = ((state.eventPageX) - (state.offsetLeft - (state.r / 2) ))
    const cy = (state.eventPageY - (state.offsetTop - (state.r / 2) ))

    return (
      <div>
        <div className="relative"
             onMouseMove={this.handleOnMouseMove}
             onTouchMove={this.handleOnTouchMove}
             ref={(c) => this._container = c}>
          <svg width="100%"
               height="100%"
               viewBox={'0 0 1122 705'}
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 1.41421 }}>
             <g>
               <circle cx={ 500 - cx } cy={ cy * 0.2 }  r={ state.r / 5 } className="fill-red" />
               <circle cx={ cx + 100 * 0.2 } cy={ 300 - cy * 1.1  } r={ state.r / 3 }  className="fill-red" />
               <circle cx={ cx * 0.1 } cy={ cy * 0.2 }  r={ state.r * 0.12 } className="fill-maroon" />
               <circle cx={ cx * 1.3 } cy={ cy * 3 } r={ state.r * 1.2 }  className="fill-red" />
               <circle cx={ cx * 0.25} cy={ cy * 1.1 }  r={ state.r * 0.5}   className="fill-red" />
               <circle cx={ cx * 3 } cy={ cy * 0.2 }  r={ state.r * 0.6 }  className="fill-red" />
               <circle cx={ cx * 2 } cy={ cy * 3 }    r={ state.r * 1 }    className="fill-maroon" />
               <circle cx={ cx * 1 }   cy={ cy * 1 }        r={ state.r }        className="fill-maroon" />
             </g>
             <g>
             <g>
               <text x="200" y="200" className="wf-sawarabimincho h4 sm-h5 md-h3 lg-h2 line-height-4 fill-white">どうやらアトモスフェアの高い位置まで到達したようだった。空は真っ暗で、星の瞬きもなくなっていた。丘の上では彼方に広がる水平線が同じ高さに見えるのと同じ錯覚によって、眼下に真っ暗な雲が広がり、車は巨大な暗い空間の真ん中に浮いているように見えた。その空間の上半分は銀色にきらめいていた。</text>
               <text x="200" y="350" className="wf-sawarabigothic h4 sm-h5 md-h3 lg-h2 line-height-4 fill-white">依然として速度を増しながら進むにつれて、夜と日中の切り替わりが曖昧になり、一続きの灰色になった。空は深い青色で夕暮れ時のような明るい光で照らされている。急に現れる太陽はきらめく円弧の形をした光の筋となった。月はおぼろげに揺らぐ帯となり、星は見えなかった。ただ、時折青い空に明るく瞬く円が見えた。</text>
             </g>
             </g>
           </svg>
        </div>
      </div>
    )
  }
}

export default SpecimenSawarabi
