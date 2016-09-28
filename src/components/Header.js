import React from 'react'

class Header extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    return (
      <div className="flex bg-maroon white font-family-base">
        <div className="col-12 md-col-8 lg-col-9">
          <div className="sm-flex flex-wrap px2">
            <h1 className="h1 font-weight-600">
              <span style={{ fontFamily: 'Product Sans' }}>Google Fonts</span>
              <span style={{ fontSize: 0.9 + 'em' }}>による早期アクセス日本語フォント</span>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
