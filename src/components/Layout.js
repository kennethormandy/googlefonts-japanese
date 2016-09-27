import React from 'react'
import data from '../data'
import ga from 'react-ga'
// import NoScript from '../components/NoScript'

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
  }

  render () {
    const self = this
    return (
      <div className="kern liga">
        { self.renderChildren(self.props) }
      </div>
    )
  }
}

Layout.defaultProps = {
  data: data
}

export default Layout
