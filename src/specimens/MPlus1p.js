import React from 'react'
import FitText from '../vendor/react-fittext'
import Section from '../components/Section'
import GlyphColumn from '../components/GlyphColumn'

class SpecimenMPlus extends React.Component {
  render () {
    const self = this
    const data = self.props.data
    const font = data.fonts['mplus1p']

    return (
      <Section
        maxWidth={5}
        basePaddingX={3}
        className="bg-fallback-blue black wf-mplus1p">

        <div className="py4">
          <div className="ty50 relative animate animate-ty50">
            <div className="flex wf-mplus1p yellow h0">
              <GlyphColumn value="夜" compressor={ 0.125 } fontWeight={ 200 } className="flex-auto" />
              <GlyphColumn value="空" compressor={ 0.125 } fontWeight={ 300 } className="flex-auto" />
              <GlyphColumn value="に" compressor={ 0.125 } fontWeight={ 400 } className="flex-auto" />
              <GlyphColumn value="な" compressor={ 0.125 } fontWeight={ 500 } className="flex-auto" />
              <GlyphColumn value="が" compressor={ 0.125 } fontWeight={ 600 } className="flex-auto" />
              <GlyphColumn value="れ" compressor={ 0.125 } fontWeight={ 700 } className="flex-auto" />
              <GlyphColumn value="星" compressor={ 0.125 } fontWeight={ 800 } className="flex-auto" />
            </div>
          </div>

          <div className="tyn50 animate animate-tyn50 blend-luminosity">
            <div className="flex navy wf-roundedmplus1c h0">
              <GlyphColumn value="夜" compressor={ 0.125 } fontWeight={ 200 } className="flex-auto" />
              <GlyphColumn value="空" compressor={ 0.125 } fontWeight={ 300 } className="flex-auto" />
              <GlyphColumn value="に" compressor={ 0.125 } fontWeight={ 400 } className="flex-auto" />
              <GlyphColumn value="な" compressor={ 0.125 } fontWeight={ 500 } className="flex-auto" />
              <GlyphColumn value="が" compressor={ 0.125 } fontWeight={ 600 } className="flex-auto" />
              <GlyphColumn value="れ" compressor={ 0.125 } fontWeight={ 700 } className="flex-auto" />
              <GlyphColumn value="星" compressor={ 0.125 } fontWeight={ 800 } className="flex-auto" />
            </div>
          </div>

          <div className="flex h6 sm-h5 md-h4 font-weight-400 white font-family-base select-none">
            <div className="flex-auto pl2">Thin</div>
            <div className="flex-auto pl2">Light</div>
            <div className="flex-auto pl2">Regular</div>
            <div className="flex-auto pl2">Medium</div>
            <div className="flex-auto pl2">Bold</div>
            <div className="flex-auto pl2">Heavy</div>
            <div className="flex-auto pl2">Black</div>
          </div>

        </div>
      </Section>
    )
  }
}

SpecimenMPlus.defaultProps = {
  data: {}
}

export default SpecimenMPlus
