import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import CodeBlock from '../components/CodeBlock'

class SidebarColophon extends React.Component {
  render () {
    const self = this
    var data = self.props.data
    var font = data.fonts[self.props.font]

    var fontNameEn = font.name.ja !== font.name.en ? <span lang="en" className="block font-weight-400 muted">{ font.name.en }</span> : <span className="block speak-none">&nbsp;</span>
    var fontDesignerNameEn = font.designer.name.ja !== font.designer.name.en ? <span lang="en" className="muted"> { font.designer.name.en }</span> : ''

    return (
      <StickyContainer style={{ zIndex: 5 }}>
        <div className="flex flex-wrap justify-end relative font-family-base">
          <div className="col-12 md-col-8 lg-col-9">{ self.props.children }</div>
          <div className="col-12 md-col-4 lg-col-3 absolute md-relative top-0 right-0 height-100 md-height-auto">
            <div className={ 'js-sidebar col-9 md-col-12 right height-100 absolute md-relaitve bg-' + self.props.backgroundColor }
                 style={{
                   right: (self.props.show ? '0' : '-50') + '%'
                 }}>
            <Sticky style={{ zIndex: 6, height: 0 }}> {/* bottomOffset could be set to this computed height */}
              <div className="right col-9 md-col-12">
                <div className={ 'h5 md-h4 bg-' + self.props.backgroundColor } style={{ height: 100 + 'vh' }}>
                <div className="p2 md-p3 bg-lighten-3" style={{ height: 100 + 'vh' }}>
                  <h3 className="border-top pt2 inline-block mt0 font-weight-600">{ font.name.ja }{ fontNameEn }</h3>
                  <div style={{ height: 15 + 'em' }}> {/* So the changing content is less jarring */}
                  <blockquote>
                  <p className="lg-h3">{ font.designer.quote.ja }</p>
                  <p lang="en">{ font.designer.quote.en }</p>
                  <footer>
                    <span>{ font.designer.name.ja }</span>
                    { fontDesignerNameEn }
                  </footer>
                  </blockquote>
                  </div>

                  <div className="mb2">
                  <abbr className="caps muted border-none">HTML</abbr>
                  <CodeBlock language="html">{ '\
<link href="http://fonts.googleapis.com/earlyaccess/' + self.props.font + '.css" />\
                  ' }</CodeBlock>
                  </div>
                  <div className="mb2">
                  <abbr className="caps muted border-none">CSS</abbr>
                  <CodeBlock language="css">{ '\
.wf-' + self.props.font + ' \{ font-family: ' + self.props.font + '; \}\
                  ' }</CodeBlock>
                  </div>

                </div>
                </div>
              </div>
            </Sticky>
            </div>
          </div>
        </div>
      </StickyContainer>
    )
  }
}

SidebarColophon.defaultProps = {
  show: false, // Default to false for pre-render
  backgroundColor: 'silver'
}

export default SidebarColophon
