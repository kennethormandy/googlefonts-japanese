import React from 'react'
import data from '../data'
import dataFonts from '../data/fonts'
import dataAuthors from '../data/authors'
import { loadCSS } from 'fg-loadcss'
import ga from 'react-ga'
import smoothscroll from 'smoothscroll'
import NoScript from '../components/NoScript'

data.fonts = dataFonts
data.authors = dataAuthors

class Layout extends React.Component {
  renderChildren (props) {
    return React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        data: props.data
      })
    })
  }

  componentDidMount () {
    ga.initialize(data.service.analytics)
    ga.pageview(window.location.pathname.toString())

    // Specimen
    Object.keys(data.fonts).map((index) => {
      var font = data.fonts[index]
      if (font.published !== false) {
        console.log('loading ' + index)
        loadCSS('http://fonts.googleapis.com/earlyaccess/' + index + '.css')
      }
    })

    // Non-critical UI
    // TODO Check on existing hosted version
    // although I’m using a fairly heavily subset version here
    loadCSS('/css/notosansmono.css')

  }

  render () {
    const self = this

    return (
      <div className="kern liga">
        { self.renderChildren(self.props) }
        <NoScript />
      </div>
    )
  }
}

Layout.defaultProps = {
  data: data
}

export default Layout
