import React from 'react'
import FitText from 'react-fittext'
import Section from '../components/Section'
import FitterHappierText from '../vendor/react-fitter-happier-text'

// require('../../build/fonts/sawarabigothic/SawarabiGothic-Regular.ttf')

class GlyphColumn extends React.Component {
  render () {
    const self = this

    return (
      <div className={ self.props.className + ' font-weight-' + self.props.fontWeight }>
        <FitterHappierText text={ self.props.value } />
      </div>
    )
  }
}

GlyphColumn.defaultProps = {
  fontWeight: 400,
  className: '',
  compressor: 1.0,
  value: ''
}

class SpecimenMPlus extends React.Component {
  render () {
    const self = this
    const data = self.props.data
    const font = data.fonts['mplus']

    return (
      <Section
        maxWidth={5}
        basePaddingX={3}
        className="bg-fallback-blue black wf-mplus">

        <div className="py4">
          <div className="">
          <div className="ty50 relative animate animate-ty50">
            <div className="flex wf-mplus yellow h0">
              <GlyphColumn value="夜" compressor={ 0.125 } fontWeight={ 200 } className="flex-auto" />
              <GlyphColumn value="空" compressor={ 0.125 } fontWeight={ 300 } className="flex-auto" />
              <GlyphColumn value="に" compressor={ 0.125 } fontWeight={ 400 } className="flex-auto" />
              <GlyphColumn value="な" compressor={ 0.125 } fontWeight={ 500 } className="flex-auto" />
              <GlyphColumn value="が" compressor={ 0.125 } fontWeight={ 600 } className="flex-auto" />
              <GlyphColumn value="れ" compressor={ 0.125 } fontWeight={ 700 } className="flex-auto" />
              <GlyphColumn value="星" compressor={ 0.125 } fontWeight={ 800 } className="flex-auto" />
            </div>
          </div>

          <div className="tyn50 animate animate-tyn50 blend-luminosity relative z2">
          <div className="flex navy wf-roundedmplus h0">
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
          </div>

          <div className="mx-auto max-width-4">
            <div className="sm-flex mxn1 sm-mxn2 md-mxn3 py3 md-py3">
              <div className="col-12 sm-col-6 px1 sm-px2 md-px3 wf-mplus navy">
                <GlyphColumn fontWeight={ 200 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 300 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 400 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 500 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 600 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 700 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 900 } value="すると、夜空に最初の流れ星が現れた。" />
                <h3 className="h6 sm-h5 md-h4 font-weight-400 white font-family-base select-none center">{ font.name.ja }</h3>
              </div>
              <div className="col-12 sm-col-6 px1 sm-px2 md-px3 wf-roundedmplus navy">
                <GlyphColumn fontWeight={ 200 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 300 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 400 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 500 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 600 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 700 } value="すると、夜空に最初の流れ星が現れた。" />
                <GlyphColumn fontWeight={ 900 } value="すると、夜空に最初の流れ星が現れた。" />
                <h3 className="h6 sm-h5 md-h4 font-weight-400 white font-family-base select-none center">{ data.fonts['roundedmplus'].name.ja }</h3>
              </div>
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
