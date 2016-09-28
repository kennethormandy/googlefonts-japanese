import React from 'react'
import throttle from 'lodash.throttle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SidebarColophon from '../components/SidebarColophon'

import SpecimenSawarabi from '../specimens/Sawarabi'
import SpecimenMPlus from '../specimens/MPlus'
import SpecimenKokoro from '../specimens/Kokoro'

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

    // TODO Switch to map like in footer
    // Not sure how to use imported React elements with this pattern yet

    return (
      <div style={{ height: 100 + '%' }} onClick={ this.onClickSpecimen }>
        <Header { ...self.props } />
        <SidebarColophon { ...self.props } font="sawarabi" show={ self.state.sidebar } backgroundColor="black">
          { React.createElement(SpecimenSawarabi) }
        </SidebarColophon>
        <SidebarColophon { ...self.props } font="mplus" show={ self.state.sidebar } backgroundColor="blue">
          <SpecimenMPlus { ...self.props } />
        </SidebarColophon>
        <SidebarColophon { ...self.props } font="kokoro" show={ self.state.sidebar } backgroundColor="green">
          <SpecimenKokoro { ...self.props } />
        </SidebarColophon>
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
