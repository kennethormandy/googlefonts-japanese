import React from 'react'
import { Keyframes, Frame } from 'react-keyframes'
import map from 'lodash.map'
import Section from '../components/Section'
import FitterHappierText from '../vendor/react-fitter-happier-text'

class SpecimenNicoMojiPlus extends React.Component {
  render () {
    const self = this
    const data = self.props.data
    const font = data.fonts['nicomojiplus']

    return (
      <Section
        maxWidth={4}
        basePaddingX={3}
        className="bg-fallback-black green wf-nicomojiplus overflow-hidden">

        <img src="/media/illustration-storefront-2-outlined.svg" className="col-12 block" />
        <div className="flex items-center px3 my3 center height-nicomojiplus blue">
          <div className="line-height-1 mt0 mb2 wf-nicomojiplus mx-auto col-10">
            <Keyframes loop={ true }>

              <Frame duration={ 2500 }><div className="red transition-color"><FitterHappierText text="ニCもじ" /></div></Frame>
              <Frame duration={ 2500 }><div className="green transition-color"><FitterHappierText text="カフェでコーヒ" /></div></Frame>
              <Frame duration={ 2500 }><div className="blue transition-color"><FitterHappierText text="おちゃにしますか" /></div></Frame>
              <Frame duration={ 2500 }><div className="purple transition-color"><FitterHappierText text="いらっしゃいませ" /></div></Frame>

            </Keyframes>
          </div>
        </div>
        <img src="/media/illustration-storefront-3-outlined.svg" className="col-12 block" />

      </Section>
    )
  }
}

SpecimenNicoMojiPlus.defaultProps = {
  data: {}
}

export default SpecimenNicoMojiPlus
