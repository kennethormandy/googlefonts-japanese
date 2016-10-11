import React from 'react'
import _map from 'lodash.map'
import FitText from '../vendor/react-fittext'

class HeaderColumn extends React.Component {
  render () {
    const self = this

    return (
      <div className={ 'col-12 sm-col-6 px1 md-px2 ' + self.props.className } lang={ self.props.lang }>
        <div className="h4 md-h3">{ self.props.children }</div>
      </div>
    )
  }
}

HeaderColumn.defaultProps = {
  heading: '',
  headingClassName: '',
  className: '',
  lang: 'ja'
}

class Header extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    var typefaceList = _map(Object.keys(data.fonts), function (index) {
      var font = data.fonts[index]
      var fontWeight = (index === 'mplus1p' || index === 'roundedmplus1c' || index === 'notosansjapanese') ? 800 : 400

      if (font.published !== false && font.designer) {
        return (
          <li className="col-12 sm-col-6 md-col-4 px2 m0" key={ 'header_' + index }><a className="block py2 border-none" href={ '#' + index }>
            <div className="flex items-center">
              <div className="h1 col-4 sm-col-3 md-col-5 center maroon">
                <FitText compressor={0.33} minFontSize={24}>
                  <div className={ 'break-none wf-' + index + ' font-weight-' + fontWeight }>あア</div>
                </FitText>
              </div>
              <div className="flex-auto line-height-2 pl2">
                <span>{ font.name.ja } <span lang="en" className="muted-dark">{ font.name.en !== font.name.ja ? font.name.en : '' }</span></span>
                <span className="block mt1">{ font.designer.name.ja } <span lang="en" className="muted-dark">{ font.designer.name.en !== font.designer.name.ja ? font.designer.name.en : '' }</span></span>
              </div>
            </div>
          </a></li>
        )
      }
    })

    return (
      <div className="bg-white black font-family-base relative pb4 bg-pink black" style={{ zIndex: 100 }}>
        <header className="mx-auto max-width-4 mb4">
          <div className="px1 sm-px0">
            <div className="muted py3 h4 md-h3 font-family-product-sans"><span className="font-weight-600">Google Fonts</span> + Japanese – Early Access</div>
            <h1 className="h1 mt0 mb0 font-weight-600 block col-12 md-col-9 lg-col-10" style={{ fontSize: 4 + 'vw'}}>
              <span className="font-family-product-sans">Google Fonts</span>
              <span className="maroon" style={{ fontSize: 0.9 + 'em' }}>による早期アクセス日本語フォント</span>
            </h1>
          </div>
          <div className="sm-flex sm-mxn1 md-mxn2 line-height-4">
            <HeaderColumn>
              <div style={{ fontSize: 0.95 + 'em', lineHeight: 1.75 }}>
                {/* TODO Ask Mariko to translate */}
                <p>Googleのフォントは、オープンソースのデザイナーのWebフォントの直感的かつ堅牢なディレクトリを提供します。Googleのフォントアーリーアクセスはまだ完全にはサポートされていないフォントのための実験的なショーケースです。</p>
                <p>日本の書体デザインとフォント開発は、それがウェブフォントとして大きなフォントファイルを提供するために必要な技術インフラに、使用できる文字の数千人と数千人を設計するのに要する時間から多くの興味深い課題を提示します。規格や技術が発展し続けているため、私たちはデザイナーと開発者がGoogleのフォントアーリーアクセスで使用できるようになりまし日本語ウェブフォントを試してみるように誘います。</p>
              </div>
            </HeaderColumn>
            <HeaderColumn lang="en">
              <p><a href="https://fonts.google.com">Google Fonts</a> provides an intuitive and robust directory of open source, designer web fonts. Our <a href="https://fonts.google.com/earlyaccess" title="Google Fonts Early Access">Early Access</a> program serves as an experimental playground for fonts that aren’t yet fully supported.</p>
              <p>The rich typography of Japan presents many interesting challenges, from the lengthy process needed to design thousands of characters to the technical infrastructure required to serve large font files as web fonts. As Google makes progress on supporting Japanese web typography, we invite designers and developers to experiment with these Japanese web fonts now available from Google Fonts Early Access.</p>
            </HeaderColumn>
          </div>
        </header>
        <div className="mx-auto max-width-6">
          <ul className="flex flex-wrap m0 p0 list-style-none items-center">{ typefaceList }</ul>
        </div>
      </div>
    )
  }
}

export default Header
