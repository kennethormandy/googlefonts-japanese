import React from 'react'
import Section from '../components/Section'
import KokoroSecret from '../components/svg/kokoro-secret'

class KokoroNotebook extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    return (
      <div className="height-kokoro-book mx-auto max-width-4 bg-white black ds-bookcover rounded flex flex-wrap items-stretch content-stretch overflow-hidden">
        <div className="height-kokoro-page col-12 sm-col-6 md-col-12 lg-col-6 ds-page-left sm-rounded-left flex items-center">
          <div className="flex-auto p3">
            <div className="fill-red muted-dark blend-multiply md-hide lg-hide" aria-label="Secret mark" style={{ maxWidth: 3 + 'rem' }}>
              <KokoroSecret />
            </div>
          </div>
        </div>
        <div className="height-kokoro-page col-12 sm-col-6 md-col-12 lg-col-6 ds-page-right flex items-center">
          <div className="relative p3 flex flex-wrap">
            <div className="self-start fill-red muted-dark xs-hide sm-hide border" style={{ height: 50 + '%', maxWidth: 3 + 'rem' }}>
              <KokoroSecret />
            </div>
            <div className="self-baseline max-width-2 mx-auto h5 md-h4 border lg-h1 line-height-4">{ self.props.children }</div>
          </div>
        </div>
      </div>
    )
  }
}

class SpecimenKokoro extends React.Component {
  render () {
    const self = this
    const data = self.props.data
    const font = data.fonts['kokoro']

    return (
      <Section
        maxWidth={4}
        basePaddingX={3}
        className="bg-fallback-green black wf-kokoro">
        <KokoroNotebook>
          <p className="mt0 h0-kokoro align-left">わたしのふたつのじんかくにはきょうつうのきおくがある。</p>
        </KokoroNotebook>
      </Section>
    )
  }
}

SpecimenKokoro.defaultProps = {
  data: {}
}

export default SpecimenKokoro
