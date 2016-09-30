import React from 'react'
import Section from '../components/Section'

// require('../../build/fonts/sawarabigothic/SawarabiGothic-Regular.ttf')

class SpecimenSawarabi extends React.Component {
  render () {
    return (
      <Section maxWidth={5} className="bg-fallback-black white">
        <div className="sm-flex flex-wrap">
          <div className="col-12 sm-col-6 p3">
            <div className="wf-sawarabimincho h4 sm-h5 md-h3 lg-h2 line-height-4">
              <p>どうやらアトモスフェアの高い位置まで到達したようだった。空は真っ暗で、星の瞬きもなくなっていた。丘の上では彼方に広がる水平線が同じ高さに見えるのと同じ錯覚によって、眼下に真っ暗な雲が広がり、車は巨大な暗い空間の真ん中に浮いているように見えた。その空間の上半分は銀色にきらめいていた。</p>
            </div>
          </div>
          <div className="col-12 sm-col-6 p3">
            <div className="wf-sawarabigothic h4 sm-h5 md-h3 lg-h2 line-height-4">
            <p>依然として速度を増しながら進むにつれて、夜と日中の切り替わりが曖昧になり、一続きの灰色になった。空は深い青色で夕暮れ時のような明るい光で照らされている。急に現れる太陽はきらめく円弧の形をした光の筋となった。月はおぼろげに揺らぐ帯となり、星は見えなかった。ただ、時折青い空に明るく瞬く円が見えた。</p>
            </div>
          </div>
        </div>
      </Section>
    )
  }
}

export default SpecimenSawarabi
