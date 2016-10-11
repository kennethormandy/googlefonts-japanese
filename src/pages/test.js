import React from 'react'
import SidebarColophon from '../components/SidebarColophon'
import TestSpecimen from '../specimens/Sawarabi'

class Test extends React.Component {
  constructor () {
    super()

    this.state = {
      backgroundColor: 'black'
    }
  }
  render () {
    const self = this
    const data = self.props.data

    return (
      <div>
      <div style={{ height: 33 + 'vh' }} className="h1 bg-blue">Hello</div>
      <div style={{ height: 33 + 'vh' }} className="h1 bg-red">Hello</div>
      <div style={{ height: 33 + 'vh' }} className="h1 bg-green">Hello</div>
      <div className="clearfix" className={ 'bg-' + self.state.backgroundColor }>
        <SidebarColophon { ...self.props } font={ 'sawarabi' } show={ true } backgroundColor={ 'transparent' }>
          <TestSpecimen { ...self.props } />
        </SidebarColophon>
      </div>
      </div>
    )
  }
}

export default Test
