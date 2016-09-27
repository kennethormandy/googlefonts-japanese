import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import _ from 'lodash'

import SpecimenSawarabi from '../specimens/Sawarabi'

class StickySidebar extends React.Component {
  render () {
    const self = this
    var data = self.props.data
    var font = data.fonts[self.props.font]

    console.log('props', self.props)
    console.log(font)


    return (
      <StickyContainer style={{ zIndex: 4 }}>
        <div className="flex flex-warp">
          <div className="col-9">
            { self.props.children }
          </div>
          <div className="col-3">
            <Sticky style={{ zIndex: 3, height: 0 }}>
              <div className="p2 bg-aqua" style={{ height: 100 + 'vh' }}>
                <h2>{ font.name.en }</h2>
                <code>{'.wf-example \{ example: ' + self.props.font + ' \}' }</code>
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
            <h1>M+</h1>
          </div>
        </StickySidebar>
        <StickySidebar { ...self.props } font="kokoro">
          <div style={{ height: 500 + 'px' }} className="bg-olive">
            <h1>Kokoro</h1>
          </div>
        </StickySidebar>
        <StickySidebar { ...self.props } font="nicomojiplus">
          <div style={{ height: 500 + 'px' }} className="bg-yellow">
            <h1>Nicomoji+</h1>
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
