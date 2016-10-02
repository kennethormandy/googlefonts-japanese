import React from 'react'
import SidebarColophon from '../components/SidebarColophon'
import SpecimenSawarabi from '../specimens/Sawarabi'

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
      <div className="clearfix" className={ 'bg-' + self.state.backgroundColor }>
        <SidebarColophon { ...self.props } font={ 'sawarabi' } show={ true } backgroundColor={ self.state.backgroundColor }>
          <SpecimenSawarabi { ...self.props } />
        </SidebarColophon>
      </div>
    )
  }
}

export default Test
