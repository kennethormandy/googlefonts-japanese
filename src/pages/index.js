import React from 'react'

class Index extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    return (
      <div>
        <h1>Index { data.name }</h1>
      </div>
    )
  }
}

export default Index
