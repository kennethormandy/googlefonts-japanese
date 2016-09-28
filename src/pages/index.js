import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import _ from 'lodash'

import SpecimenSawarabi from '../specimens/Sawarabi'

class StickySidebar extends React.Component {
  constructor () {
    super()

    this.state = {
      sidebar: true
    }

    this.onClick = this.onClick.bind(this)

  }

  onClick () {
    console.log('click')
  }

  render () {
    const self = this
    var data = self.props.data
    var font = data.fonts[self.props.font]

    return (
      <StickyContainer style={{ zIndex: 4 }}>
        <div className="flex flex-wrap justify-end relative">
          <div className="col-12 md-col-9">{ self.props.children }</div>
          <div
            className="col-9 bg-gray md-col-3 absolute md-relative top-0 right-0 height-100 md-height-auto temp-translate-sidebar"
            style={{
              // TODO
              // translate: 'transformX(' + 0 + ')'
            }}
            onClick={ self.onClick }>
            <Sticky style={{ zIndex: 3, height: 0 }}>
              <div className="right col-9 md-col-12">
                <div className="p2 bg-silver">
                  <h2>{ font.name.en }</h2>
                  <code>{'.wf-example \{ example: ' + self.props.font + ' \}' }</code>
                </div>
              </div>
            </Sticky>
          </div>
        </div>
      </StickyContainer>
    )
  }
}

StickySidebar.defaultProps = {

}

class Index extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    console.log(self.props)

    // var specimenList = ['sawarabi', 'mplus']
    //
    // var timeline = [specimenList].map((decade) => {
    //   return (
    //     <StickyContainer style={{ zIndex: 4 }}>
    //       <div className="flex flex-warp">
    //         <div className="col-9">
    //           { decade }
    //         </div>
    //         <div className="col-3">
    //           <Sticky style={{ zIndex: 3, height: 0 }}>
    //             <div className="p2 bg-aqua" style={{ height: 100 + 'vh' }}>
    //               <code>{'.wf-example \{ example: example \}'}</code>
    //             </div>
    //           </Sticky>
    //         </div>
    //       </div>
    //     </StickyContainer>
    //   )
    // })

    return (
      <div style={{ height: 100 + '%' }}>
        <h1>{ data.title }</h1>
        <div className="bg-red" style={{ height: 500 + 'px' }}>Header</div>
        <StickySidebar { ...self.props } font="sawarabi">
          { React.createElement(SpecimenSawarabi) }
        </StickySidebar>
        <StickySidebar { ...self.props } font="mplus">
          <div style={{ height: 500 + 'px' }} className="bg-aqua">
            <h2 className="mt0">M+</h2>
          </div>
        </StickySidebar>
        <StickySidebar { ...self.props } font="kokoro">
          <div style={{ height: 500 + 'px' }} className="bg-olive">
            <h2 className="mt0">Kokoro</h2>
          </div>
        </StickySidebar>
        <StickySidebar { ...self.props } font="nicomojiplus">
          <div style={{ height: 500 + 'px' }} className="bg-yellow">
            <h2 className="mt0">Nicomoji+</h2>
          </div>
        </StickySidebar>
        <div className="flex-none clearfix relative z4">
          <div className="bg-red" style={{ height: 500 + 'px' }}>Footer</div>
        </div>
      </div>
    )
  }
}

export default Index
