import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import CodeBlock from '../components/CodeBlock'
import Swipeable from 'react-swipeable'

class SidebarColophon extends React.Component {
  render () {
    const self = this
    var data = self.props.data
    var font = data.fonts[self.props.font]
    var desc = ''

    var fontNameEn = font.name.ja !== font.name.en ? <span lang="en" className="block font-weight-400 muted">{ font.name.en }</span> : <span className="block speak-none">&nbsp;</span>
    var fontDesignerNameEn = font.designer.name.ja !== font.designer.name.en ? <span lang="en" className="muted"> { font.designer.name.en }</span> : ''

    // TODO switch to toggle
    if (font.description) {
      if (font.description.ja && font.description.en) {
        desc = <div><p className="mt0">{ font.description.ja }</p><p lang="en">{ font.description.en }</p></div>
      } else {
        desc = <div><p className="mt0" lang="en">{ font.description.en ? font.description.en : font.description.ja }</p></div>
      }
    }

    return (
      <Swipeable onSwipedLeft={ self.props.onClickSidebar } onSwipedRight={ self.props.onClickSidebar }>
      <StickyContainer style={{ zIndex: 5, overflow: 'hidden' }}>
        <div className="flex flex-wrap justify-start md-justify-end relative font-family-base">
          <div className="col-10 md-col-8 lg-col-9">{ self.props.children }</div>
          <div className="col-12 md-col-4 lg-col-3 absolute md-relative top-0 right-0 height-100 md-height-auto">
            <div ref="sidebar" className={ 'col-9 md-col-12 right height-100 absolute md-relaitve animate-bg animate-left bg-' + self.props.backgroundColor }
                 style={{
                  //  transform: 'translateX(' + (self.props.show ? '0' : '-60') + '%)',
                   right: (self.props.show ? '0' : '-58') + '%'
                 }}>
            <Sticky style={{ zIndex: 10, height: 0 }} onClick={ self.props.onClickSidebar }> {/* bottomOffset could be set to this computed height */}
              <div className="right col-12 md-col-12 ds-sidebar md-ds-none">
                <div className={ 'h5 md-h4 animate-bg bg-' + self.props.backgroundColor } style={{ height: 100 + 'vh' }}>
                <div className={ 'p2 md-p3 animate-bg transition-color ' + (self.props.backgroundColor === 'white' ? 'bg-darken-1' : 'bg-lighten-3') + ' ' + (self.props.backgroundColor === 'black' ? 'white' : '') } style={{ height: 100 + 'vh' }}>
                  <h3 className="border-top pt2 onum pnum inline-block mt0 font-weight-600">{ font.name.ja }{ fontNameEn }</h3>

                  {/* Fixes heights so the changing content is less jarring */}
                  <div style={{ minHeight: 12 + 'em' }} className="mb3">
                    <blockquote>
                      <p className="md-h3 lg-h2">{ font.designer.quote.ja }</p>
                      <p className="muted-dark" lang="en">{ font.designer.quote.en }</p>
                      <footer>
                        <span>{ font.designer.name.ja }</span> <span className="muted-dark" lang="en">{ fontDesignerNameEn }</span>
                      </footer>
                    </blockquote>
                  </div>
                  <div style={{ minHeight: 12 + 'em' }} className="h5 md-h4">{ desc }</div>


                  <div className="mb2">
                  <abbr className="muted border-none">HTML</abbr>
                  <CodeBlock language="html">{ '\<link href\=\"http\:\/\/fonts\.googleapis\.com\/earlyaccess\/' + self.props.font + '\.css\" \/\>' }</CodeBlock>
                  </div>
                  <div className="mb2">
                  <abbr className="muted border-none">CSS</abbr>
                  <CodeBlock language="css">{ '\.wf-' + self.props.font + ' \{ font-family\: ' + self.props.font + '\; \}' }</CodeBlock>
                  </div>

                </div>
                </div>
              </div>
            </Sticky>
            </div>
          </div>
        </div>
      </StickyContainer>
      </Swipeable>
    )
  }
}

SidebarColophon.defaultProps = {
  backgroundColor: 'silver',
  onClickSidebar: false
}

export default SidebarColophon
