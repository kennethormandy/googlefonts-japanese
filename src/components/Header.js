import React from 'react'

class Header extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    return (
      <div className="flex bg-silver black font-family-base">
        <div className="col-12 md-col-8 lg-col-9">
          <div className="bg-maroon white sm-flex flex-wrap px2">
            <h1>
              <span style={{ fontFamily: 'Product Sans' }}>Google Fonts</span>
              <span className="font-weight-500" style={{ fontSize: 0.9 + 'em' }}>による早期アクセス日本語フォント</span>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
