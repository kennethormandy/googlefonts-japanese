import React from 'react'

class HeaderColumn extends React.Component {
  render () {
    const self = this

    return (
      <div className={ 'col-6 px1 md-px2 ' + self.props.className } lang={ self.props.lang }>
        <h2 className={ 'mb0 font-weight-600 h4 sm-h1 md-h1 ' + self.props.headingClassName }>{ self.props.heading }</h2>
        <div className="h5 sm-h3 md-h3">{ self.props.children }</div>
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

    return (
      <div className="flex bg-white black font-family-base relative" style={{ zIndex: 100 }}>
        <header className="sm-flex flex-wrap px2 pb4">
          <div className="mx-auto max-width-4 col-12">
            <h1 className="h1 mb0 mb0 font-weight-600 block col-12 md-col-9 lg-col-10" style={{ fontSize: 4 + 'vw'}}>
              <span className="font-family-product-sans">Google Fonts</span>
              <span style={{ fontSize: 0.9 + 'em' }}>による早期アクセス日本語フォント</span>
            </h1>
          </div>
          <hr className="block mx-auto max-width-4 border-none col-12 bg-black muted-dark pt1 rounded mt4" />
          <div className="mx-auto max-width-4 line-height-4">
            <div className="flex mxn1 md-mxn2">
              <HeaderColumn
                headingClassName="yellow"
                heading="偉大なタイポグラフィを介してウェブをより美しく高速で、オープン作ります">
                <div style={{ fontSize: 0.95 + 'em', lineHeight: 1.75 }}>
                  <p>Googleのフォントは、オープンソース、デザイナーのウェブフォントの直感的かつ堅牢なディレクトリを提供します。私たちのアーリーアクセスプログラムは、まだ完全にはサポートされていないフォントのための実験的な遊び場として機能します。</p>
                  <p>日本の豊かなタイポグラフィは、ウェブフォントとして大きなフォントファイルを提供するために必要な技術インフラに数千文字をデザインするのに必要な時間のかかるプロセスから多くの興味深い課題を提示します。Googleが日本のwebフォントをサポートする上で進捗状況を作るように、私たちはデザイナーと開発者がGoogleのフォントアーリーアクセスから利用できるようになりましたこれらの日本語ウェブフォントを試してみるように誘います。</p>
                </div>
              </HeaderColumn>
              <HeaderColumn
                lang="en"
                headingClassName="muted-dark"
                heading="Making the web more beautiful, fast, and open through great typography">
                <p><a href="https://fonts.google.com">Google Fonts</a> provides an intuitive and robust directory of open source, designer web fonts. Our <a href="https://fonts.google.com/earlyaccess" title="Google Fonts Early Access">Early Access</a> program serves as an experimental playground for fonts that aren’t yet fully supported.</p>
                <p>The rich typography of Japan presents many interesting challenges, from the lengthy process needed to design thousands of characters to the technical infrastructure required to serve large font files as web fonts. As Google makes progress on supporting Japanese web typography, we invite designers and developers to experiment with these Japanese web fonts now available from Google Fonts Early Access.</p>
              </HeaderColumn>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
