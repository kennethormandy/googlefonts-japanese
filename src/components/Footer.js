import React from 'react'
import map from 'lodash.map'
import FitText from 'react-fittext'

class Footer extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    // <hr className="block mx-auto max-width-4 col-12 border-none bg-navy muted-dark pt1 rounded mb4" />

    // var frag = createFragment(data.fonts)
    // console.log(frag)
    var typefaceList = Object.keys(data.fonts).map((index) => {
      var font = data.fonts[index]
      if (font.published !== false && font.designer) {
        return (
          <li className="p0 m0" key={ 'footer_' + index }><a className="block py2" href={ '#' + index }>
            <div className="flex items-center">
              <div className="h1 col-4 sm-col-3">
                <FitText compressor={0.33} minFontSize={24}>
                  <div className={ 'break-none wf-' + index }>あア</div>
                </FitText>
              </div>
              <div className="flex-auto">
                <span>{ font.name.ja } <span lang="en" className="muted">{ font.name.en !== font.name.ja ? font.name.en : '' }</span></span>
                <span className="block mt1">{ font.designer.name.ja } <span lang="muted" className="muted">{ font.designer.name.en !== font.designer.name.ja ? font.designer.name.en : '' }</span></span>
              </div>
            </div>
          </a></li>
        )
      }
    })

    return (
      <div className="clearfix bg-white bg-fallback-white py2 md-py4" style={{ minHeight: 60 + 'vh' }}>
        <div className="col-12 px2 sm-px3">
          <div className="max-width-4">
          <div className="sm-flex flex-wrap">
            <div className="col-4" lang="en">
              <ul className="list-style-none p0 m0">
              <li><a className="border-none" href={ data.baseurl + '/about' }>About</a></li>
              <li><a className="border-none" href={ data.baseurl + '/contributing' }>Contribute</a></li>
              {/* TODO Add SVGs */}
              <li className="fill-navy"><a href={ 'https://twitter.com/' + data.social.twitter }>@{ data.social.twitter } on Twitter</a></li>
              <li className="fill-navy"><a href={ 'https://twitter.com/' + data.social.github }>@{ data.social.github } on GitHub</a></li>
              </ul>
            </div>
            <div className="col-8">
              <p className="mt0">{ data.description }</p>
              <div className="flex mxn1" lang="en">
                <div className="col-4 px1">
                  <a className="border-none" href={ data.authors['marikotakagi'].url }>{ data.authors['marikotakagi'].name }</a>
                  { data.authors['marikotakagi'].credit }
                </div>
                <div className="col-4 px1">
                  <a className="border-none" href={ data.authors['kennethormandy'].url }>{ data.authors['kennethormandy'].name }</a>
                  { data.authors['kennethormandy'].credit }
                </div>
                <div className="col-4 px1">
                  <h5 className="h5 mt0">Google Fonts team</h5>
                  <ul className="list-style-none m0 p0">
                    <li><a className="border-none" href={ data.authors['davecrossland'].url }>{ data.authors['davecrossland'].name }</a></li>
                    <li><a className="border-none" href={ data.authors['yuinchien'].url }>{ data.authors['yuinchien'].name }</a></li>
                    <li><a className="border-none" href={ data.authors['omerziv'].url }>{ data.authors['omerziv'].name }</a></li>
                    <li><a className="border-none" href={ data.authors['lassefister'].url }>{ data.authors['lassefister'].name }</a></li>
                  </ul>
                </div>
              </div>
              <div className="clearfix">
                <h3>Featued Typefaces</h3>
                <ul className="list-style-none p0 m0">{ typefaceList }</ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
