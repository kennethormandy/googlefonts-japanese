import React from 'react'

class SpecimenHannari extends React.Component {
  render () {
    return (
      <div className="bg-red bg-gradient-red-white white">
        <div className="p2 py4">
        <div className="mx-auto max-width-3">
          <div className="col-12 h1 wf-hannari">
            <div className="flex flex-wrap">
            <div className="col-12">
              <div className="flex flex-wrap items-stretch justify-around h0-hannari">
                <div><span className="vertical upright center">あかるく、</span></div>
                <div><span className="vertical upright center">やさしく、</span></div>
                <div><span className="vertical upright center">ふんわり。</span></div>
              </div>
            </div>
            <div className="border col-12 md-col-9">
              <div className="h0-hannari col-12 center mx-auto vertical" style={{ minHeight: 80 + 'vh' }}>
                <div>あかるく、</div>
                <div>やさしく、</div>
                <div>ふんわり。</div>
              </div>
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
