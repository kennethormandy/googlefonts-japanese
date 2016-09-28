import React from 'react'

class SpecimenHannari extends React.Component {
  render () {
    return (
      <div className="bg-red bg-gradient-red-white white">
        <div className="p2 py4">
        <div className="mx-auto max-width-3">
          <div className="col-12 h1 wf-hannari">
            <div className="col-12 md-col-9">
              <div className="h1 col-12 center mx-auto vertical upright" style={{ minHeight: 80 + 'vh', fontSize: 12 + 'vh' }}>
                <div>あかるく、</div>
                <div>やさしく、</div>
                <div>ふんわり。</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

SpecimenHannari.defaultProps = {

}

export default SpecimenHannari
