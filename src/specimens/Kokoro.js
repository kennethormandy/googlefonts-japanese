import React from 'react'
import Section from '../components/Section'
import KokoroSecret from '../components/svg/kokoro-secret'

class KokoroNotebook extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    return (
      <div className="height-kokoro-book mx-auto max-width-4 bg-white black ds-bookcover rounded flex flex-wrap items-stretch content-stretch overflow-hidden">
        <div className="height-kokoro-page col-12 md-col-6 ds-page-left sm-rounded-left flex items-center">
          <div className="flex-auto p3" style={{ transform: 'translateY(-1rem) rotate(3deg)' }}>
            <div className="fill-red muted blend-multiply mx-auto max-width-1">
              <KokoroSecret />
            </div>
          </div>
        </div>
        <div className="height-kokoro-page col-12 md-col-6 ds-page-right flex items-center">
          <div className="relative p3">
            <div className="max-width-2 mx-auto h4 md-h2 lg-h1 line-height-3">{ self.props.children }</div>
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
          <p className="mt0 h0-kokoro justify">わたしのふたつのじんかくにはきょうつうのきおくがある。</p>
        </KokoroNotebook>
      </Section>
    )
  }
}

SpecimenKokoro.defaultProps = {
  data: {}
}

export default SpecimenKokoro
