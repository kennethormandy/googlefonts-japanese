import React from 'react'
import SVGBackground from '../components/SVGBackground'
import Section from '../components/Section'

// require('../../build/fonts/sawarabigothic/SawarabiGothic-Regular.ttf')

class SpecimenSawarabi extends React.Component {
  render () {
    const self = this

    return (
      <SVGBackground>
      <Section maxWidth={ 3 }>
        <div className="h4 sm-h5 md-h3 lg-h2 line-height-4 white">
           <p className="wf-sawarabimincho">どうやらアトモスフェアの高い位置まで到達したようだった。空は真っ暗で、星の瞬きもなくなっていた。丘の上では彼方に広がる水平線が同じ高さに見えるのと同じ錯覚によって、眼下に真っ暗な雲が広がり、車は巨大な暗い空間の真ん中に浮いているように見えた。その空間の上半分は銀色にきらめいていた。</p>
           <p className="wf-sawarabigothic">依然として速度を増しながら進むにつれて、夜と日中の切り替わりが曖昧になり、一続きの灰色になった。空は深い青色で夕暮れ時のような明るい光で照らされている。急に現れる太陽はきらめく円弧の形をした光の筋となった。月はおぼろげに揺らぐ帯となり、星は見えなかった。ただ、時折青い空に明るく瞬く円が見えた。</p>
        </div>
      </Section>
      </SVGBackground>
    )
  }
}

export default SpecimenSawarabi
