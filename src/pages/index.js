import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import throttle from 'lodash.throttle'
import Header from '../components/Header'
import Footer from '../components/Footer'

import SpecimenSawarabi from '../specimens/Sawarabi'
import SpecimenMPlus from '../specimens/MPlus'
import SpecimenKokoro from '../specimens/Kokoro'

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
          <div className="col-12 md-col-8 lg-col-9">{ self.props.children }</div>
          <div
            className="col-12 md-col-4 lg-col-3 absolute md-relative top-0 right-0 height-100 md-height-auto"
            style={{
              // outline: '5px solid yellow'
              // TODO
              // translate: 'transformX(' + 0 + ')'
            }}>
            <div className="js-sidebar col-9 md-col-12 bg-gray right height-100 border absolute md-relaitve"
                 style={{
                   right: (self.props.show ? '0' : '-50') + '%'
                 }}>
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
        </div>
      </StickyContainer>
    )
  }
}

StickySidebar.defaultProps = {
  show: false // Default to false for pre-render
}

class Index extends React.Component {
  constructor () {
    super()

    this.state = {
      sidebar: false, // Default to false for mobile-first prerender
      viewport: {
        width: 1024, // TODO Change
        height: 768
      }
    }

    // If window is less than medium breakpoint, this.setState({ sidebar: true })

    this.onClickSpecimen = this.onClickSpecimen.bind(this)

    this.getViewportWidth = () => {
      if (window && document) {
        // Via http://stackoverflow.com/a/11744120/864799
        return {
          width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
      }
    }

    this.setViewportWidth = () => {
      var viewport = this.getViewportWidth()
      this.setState({
        viewport: viewport,
        sidebar: (viewport.width > this.props.sidebarMaxWidth) ? true : false
      })
    }

    this.handleResize = () => {
      return throttle(this.setViewportWidth, 500)
    }

  }

  componentDidMount () {
    const self = this
    self.setViewportWidth()
    window.addEventListener('resize', self.handleResize(), false)
  }

  componentWillUnmount () {
    const self = this
    window.removeEventListener('resize', self.handleResize(), false)
  }

  onClickSpecimen (e, f) {
    const self = this
    var el = e.target || false

    // TODO Do this a better way, maybe with refs?
    // TODO more possible contextual touch targets
    console.log(self.state.viewport.width, self.props.sidebarMaxWidth)
    if (self.state.viewport.width < self.props.sidebarMaxWidth) {
      if ((self.state.sidebar === true) || (el && el.classList.contains('js-sidebar'))) {
        self.setState({
          sidebar: !self.state.sidebar
        })
      }
    }
  }

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
      <div style={{ height: 100 + '%' }} onClick={ this.onClickSpecimen }>
        <Header { ...self.props } />
        <StickySidebar { ...self.props } font="sawarabi" show={ self.state.sidebar }>
          { React.createElement(SpecimenSawarabi) }
        </StickySidebar>
        <StickySidebar { ...self.props } font="mplus" show={ self.state.sidebar }>
          <SpecimenMPlus { ...self.props } />
        </StickySidebar>
        <StickySidebar { ...self.props } font="kokoro" show={ self.state.sidebar }>
          <SpecimenKokoro { ...self.props } />
        </StickySidebar>
        <div className="flex-none clearfix relative z4">
          <Footer { ...self.props } />
        </div>
      </div>
    )
  }
}

Index.defaultProps = {
  // $breakpoint-md
  sidebarMaxWidth: 800
}

export default Index
