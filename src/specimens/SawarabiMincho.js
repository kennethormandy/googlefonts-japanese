import React from 'react'
import Section from '../components/Section'

class SpecimenSawarabi extends React.Component {
  render () {
    const self = this

    return (
      <div>
        <Section maxWidth={ 2 }>
          <div className="h3 sm-h4 md-h2 lg-h1 line-height-4 white">
            <div className="border-bottom border-red border-medium mb3">
            <p className="wf-sawarabimincho">どうやらアトモスフェアの高い位置まで到達したようだった。空は真っ暗で、星の瞬きもなくなっていた。丘の上では彼方に広がる水平線が同じ高さに見えるのと同じ錯覚によって、眼下に真っ暗な雲が広がり、車は巨大な暗い空間の真ん中に浮いているように見えた。その空間の上半分は銀色にきらめいていた。</p>
            </div>
          </div>
        </Section>
      </div>
    )
  }
}

export default SpecimenSawarabi
