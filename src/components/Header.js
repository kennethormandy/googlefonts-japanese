import React from 'react'

class Header extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    return (
      <div className="flex bg-yellow">
        <div className="col-12 md-col-8 lg-col-9">
          <div className="bg-blue sm-flex flex-wrap">
            <h1>{ data.title }</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
