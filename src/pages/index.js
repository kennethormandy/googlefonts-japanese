import React from 'react'
import throttle from 'lodash.throttle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SpecimenWrapper from '../components/SpecimenWrapper'
import SidebarColophon from '../components/SidebarColophon'

import SpecimenSawarabi from '../specimens/Sawarabi'
import SpecimenMPlus from '../specimens/MPlus'
import SpecimenRoundedMPlus from '../specimens/RoundedMPlus'
import SpecimenHannari from '../specimens/Hannari'
import SpecimenKokoro from '../specimens/Kokoro'
import SpecimenNikukyu from '../specimens/Nikukyu'
import SpecimenNotoSansJapanese from '../specimens/NotoSansJapanese'

class Index extends React.Component {
  constructor () {
    super()

    this.state = {
      sidebar: false, // Default to false for mobile-first prerender
      active: 'mplus',
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

  handleSpecimenWaypoint (specimenActive) {
    const self = this

    self.setState({ active: specimenActive })
  }

  render () {
    const self = this
    const data = self.props.data

    // TODO Switch to map like in footer
    // Not sure how to use imported React elements with this pattern yet

    return (
      <div style={{ height: 100 + '%' }} onClick={ self.onClickSpecimen }>
        <Header { ...self.props } />
        <div className="bg-purple white fixed top-0 left-0 z4 h1"><code>debug {self.state.active}</code></div>
        <SidebarColophon { ...self.props } font={ self.state.active } show={ self.state.sidebar } backgroundColor="blue">

          <SpecimenMPlus { ...self.props } />
          <SpecimenRoundedMPlus { ...self.props } />

          <SpecimenWrapper
            font="hannari"
            specimenActive={self.handleSpecimenWaypoint.bind(self)}>
            <SpecimenHannari { ...self.props } />
          </SpecimenWrapper>


          <SpecimenKokoro { ...self.props } />
          <SpecimenSawarabi { ...self.props } />
          <SpecimenNikukyu { ...self.props } />
          <SpecimenNotoSansJapanese { ...self.props } />
        </SidebarColophon>
        <div className="flex-none clearfix relative" style={{ zIndex: 7 }}>
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
