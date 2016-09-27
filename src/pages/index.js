import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import _ from 'lodash'

import SpecimenSawarabi from '../specimens/Sawarabi'

class StickySidebar extends React.Component {
  render () {
    const self = this

    return (
      <StickyContainer style={{ zIndex: 4 }}>
        <div className="flex flex-warp">
          <div className="col-9">
            { self.props.children }
          </div>
          <div className="col-3">
            <Sticky style={{ zIndex: 3, height: 0 }}>
              <div className="p2 bg-aqua" style={{ height: 100 + 'vh' }}>
                <code>{'.wf-example \{ example: ' + self.props.name + ' \}' }</code>
              </div>
            </Sticky>
          </div>
        </div>
      </StickyContainer>
    )
  }
}

class Index extends React.Component {
  render () {
    const self = this
    const data = self.props.data

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
        <div className="bg-red" style={{ height: 500 + 'px' }}>Header</div>
        <StickySidebar name="Sawarabi">
          <SpecimenSawarabi />
        </StickySidebar>
        <StickySidebar name="M+">
          <div style={{ height: 500 + 'px' }} className="bg-aqua">
            <h1>M+</h1>
          </div>
        </StickySidebar>
        <StickySidebar name="Kokoro">
          <div style={{ height: 500 + 'px' }} className="bg-olive">
            <h1>Kokoro</h1>
          </div>
        </StickySidebar>
        <StickySidebar name="Nicomoji+">
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
