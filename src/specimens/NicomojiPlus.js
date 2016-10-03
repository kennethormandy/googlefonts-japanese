import React from 'react'
import Section from '../components/Section'

class SpecimenNicomojiPlus extends React.Component {
  render () {
    const self = this
    const data = self.props.data
    const font = data.fonts['nicomojiplus']

    return (
      <Section
        maxWidth={4}
        basePaddingX={3}
        className="bg-fallback-black green wf-nicomojiplus">
        <div className="h2 lg-h1">
          <h2 className="mt0 red">{ font.name.ja } { font.name.ja }</h2>
          <p>どうやらアトモスフェアの高い位置まで到達したようだった。空は真っ暗で、星の瞬きもなくなっていた。丘の上では彼方に広がる水平線が同じ高さに見えるのと同じ錯覚によって、眼下に真っ暗な雲が広がり、車は巨大な暗い空間の真ん中に浮いているように見えた。その空間の上半分は銀色にきらめいていた。</p>
        </div>
      </Section>
    )
  }
}

SpecimenNicomojiPlus.defaultProps = {
  data: {}
}

export default SpecimenNicomojiPlus
