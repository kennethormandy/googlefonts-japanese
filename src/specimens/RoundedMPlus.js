import React from 'react'
import FitText from 'react-fittext'
import Section from '../components/Section'
import GlyphColumn from '../components/GlyphColumn'

class SpecimenRoundedMPlus extends React.Component {
  render () {
    const self = this
    const data = self.props.data
    const font = data.fonts['roundedmplus']

    return (
      <Section
        maxWidth={5}
        basePaddingX={3}
        className="bg-fallback-navy black wf-mplus">

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

SpecimenRoundedMPlus.defaultProps = {
  data: {}
}

export default SpecimenRoundedMPlus
