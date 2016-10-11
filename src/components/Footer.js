import React from 'react'
import _map from 'lodash.map'
import FitText from '../vendor/react-fittext'

class Footer extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    var typefaceList = _map(Object.keys(data.fonts), function (index) {
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
              <div className="flex-auto line-height-3">
                <span>{ font.name.ja } <span lang="en" className="muted">{ font.name.en !== font.name.ja ? font.name.en : '' }</span></span>
                <span className="block mt1">{ font.designer.name.ja } <span lang="en" className="muted">{ font.designer.name.en !== font.designer.name.ja ? font.designer.name.en : '' }</span></span>
              </div>
            </div>
          </a></li>
        )
      }
    })

    return (
      <div className="clearfix bg-white bg-fallback-white py2 md-py4" style={{ minHeight: 60 + 'vh' }}>
        <div className="mx-auto max-width-4 px2 sm-px3">
          <div className="md-flex flex-wrap">
            <div className="col-12 md-col-4 md-pr3" lang="en">
              <p className="md-mt4">Check back often!</p>
              <p>We’ll update this page with samples as new fonts are added to Early Access, and provide information about our own experiments and technology when possible.</p>
              <ul className="list-style-none p0 m0">
              <li><a href={ data.baseurl + '/about' }>About</a></li>
              <li><a href={ data.baseurl + '/contributing' }>Contribute</a></li>
              {/* TODO Add SVGs */}
              <li className="fill-navy"><a href={ 'https://twitter.com/' + data.social.twitter }>@{ data.social.twitter } on Twitter</a></li>
              <li className="fill-navy"><a href={ 'https://twitter.com/' + data.social.github }>@{ data.social.github } on GitHub</a></li>
              </ul>
            </div>
            <div className="col-12 md-col-8">
              <div className="clearfix mb4">
                <h3 className="h3 mt0">Featued Typefaces</h3>
                <ul className="list-style-none p0 m0">{ typefaceList }</ul>
              </div>
              <div className="clearfix">
                <h3 className="h3">Made by Friends of Google Fonts</h3>
                <div className="sm-flex mxn1" lang="en">
                  <div className="col-12 sm-col-4 px1">
                    <a className="" href={ data.authors['marikotakagi'].url }>{ data.authors['marikotakagi'].name }</a>
                    <p className="mt0">{ data.authors['marikotakagi'].credit }</p>
                  </div>
                  <div className="col-12 sm-col-4 px1">
                    <a className="" href={ data.authors['kennethormandy'].url }>{ data.authors['kennethormandy'].name }</a>
                    <p className="mt0">{ data.authors['kennethormandy'].credit }</p>
                  </div>
                  <div className="col-12 sm-col-4 px1">
                    <a href="https://fonts.google.com">Google Fonts</a>
                    <ul className="list-style-none m0 p0">
                      <li><a className="border-none" href={ data.authors['yuinchien'].url }>{ data.authors['yuinchien'].name }, art direction</a></li>
                      <li><a className="border-none" href={ data.authors['lassefister'].url }>{ data.authors['lassefister'].name }, font mastering</a></li>
                    </ul>
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

export default Footer
