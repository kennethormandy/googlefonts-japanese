import React from 'react'
import Section from '../components/Section'
import FitterHappierText from '../vendor/react-fitter-happier-text'

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

        <img src="/media/illustration-storefront-2-outlined.svg" class="col-12 block" />
        <div class="flex items-center px1 center height-nicomojiplus">
          <div class="h0 line-height-1 mt0 mb2 wf-nicomojiplus mx-auto">
            <FitterHappierText text="ニCもじ" />
            <FitterHappierText text="カフェでコーヒ" />
            <FitterHappierText text="おちゃにしますか?" />
            <FitterHappierText text="いらっしゃいませ!" />
          </div>
        </div>
        <img src="/media/illustration-storefront-3-outlined.svg" class="col-12 block" />

      </Section>
    )
  }
}

SpecimenNicomojiPlus.defaultProps = {
  data: {}
}

export default SpecimenNicomojiPlus
