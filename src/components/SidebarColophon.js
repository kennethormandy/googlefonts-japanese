import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import CodeBlock from '../components/CodeBlock'

class SidebarColophon extends React.Component {
  render () {
    const self = this
    var data = self.props.data
    var font = data.fonts[self.props.font]

    return (
      <StickyContainer style={{ zIndex: 4 }}>
        <div className="flex flex-wrap justify-end relative font-family-base">
          <div className="col-12 md-col-8 lg-col-9">{ self.props.children }</div>
          <div className="col-12 md-col-4 lg-col-3 absolute md-relative top-0 right-0 height-100 md-height-auto">
            <div className="js-sidebar col-9 md-col-12 bg-gray right height-100 absolute md-relaitve"
                 style={{
                   right: (self.props.show ? '0' : '-50') + '%'
                 }}>
            <Sticky style={{ zIndex: 3, height: 0 }}>
              <div className="right col-9 md-col-12">
                <div className="p2 bg-silver" style={{ height: 100 + 'vh' }}>
                  <h2>{ font.name.en }</h2>

                  <CodeBlock language="html">{ '\
<link href="http://fonts.googleapis.com/earlyaccess/' + self.props.font + '.css" />\
                  ' }</CodeBlock>

                  <pre data-language="html"><code>{ self.props.font }</code></pre>
                  <pre data-language="css"><code>{ self.props.font }</code></pre>

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
  show: false // Default to false for pre-render
}

export default SidebarColophon
