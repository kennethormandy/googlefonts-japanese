import React from 'react'

class Footer extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    return (
      <div className="flex bg-yellow" style={{ minHeight: 60 + 'vh' }}>
        <div className="col-12 md-col-8 lg-col-9">
          <div className="bg-blue sm-flex flex-wrap">
            <div className="col-12 sm-col-4 bg-darken-1">
              <h2>Footer 1</h2>
            </div>
            <div className="col-12 sm-col-4 bg-darken-1">
              <h2>Footer 2</h2>
            </div>
            <div className="col-12 sm-col-4 bg-darken-1">
              <h2>Footer 3</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
