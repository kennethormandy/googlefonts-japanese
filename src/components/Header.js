import React from 'react'
import _map from 'lodash.map'
import FitText from '../vendor/react-fittext'
import FontList from '../components/FontList'

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

    return (
      <div className="bg-white black font-family-base relative pb4 bg-white black" style={{ zIndex: 100 }}>
        <header className="mx-auto max-width-5 mb4 px1 md-px2 font-weight-500">
          <div className="py3 h4 md-h3 font-family-product-sans red" lang="en">Google Fonts + Japanese Early Access</div>
          <FitText compressor={ 0.95 }>
          <h1 className="h1 line-height-2 my0 mb3 red">
            <span className="font-family-product-sans">Google Fonts</span>
            <span style={{ fontSize: 0.9 + 'em' }} className="font-family-600">&nbsp;+&nbsp;日本語 <span>早期アクセス</span></span>
          </h1>
          </FitText>
          <div className="sm-flex sm-mxn1 md-mxn2 line-height-4">
            <HeaderColumn>
              <div style={{ fontSize: 0.96 + 'em', lineHeight: 1.75 }}>
                <p>Google Fonts は、デザイナー ウェブフォントを直感的にご利用いただける、安定したオープンソース ディレクトリです。Google Fonts 早期アクセスでは、現時点で完全にはサポートしていないフォントを試験的に提供しています。</p>
                <p>膨大な数の文字のデザインに要する時間や、大容量のフォント ファイルをウェブフォントとして提供する際に必要な技術的インフラストラクチャなど、日本語の書体デザインやフォント開発にはさまざまな課題が立ちふさがります。そこで、規格や技術の開発を進めると同時に、Google Fonts 早期アクセスを通じてデザイナーやデベロッパーの皆様に日本語のウェブフォントをお試しいただけるようにしました。</p>
              </div>
            </HeaderColumn>
            <HeaderColumn lang="en">
              <p><a href="https://fonts.google.com">Google Fonts</a> provides an intuitive and robust directory of open source, designer web fonts. Our <a href="https://fonts.google.com/earlyaccess" title="Google Fonts Early Access">Early Access</a> program serves as an experimental playground for fonts that aren’t yet fully supported.</p>
              <p>The rich typography of Japan presents many interesting challenges, from the lengthy process needed to design thousands of characters to the technical infrastructure required to serve large font files as web fonts. As Google makes progress on supporting Japanese web typography, we invite designers and developers to experiment with these Japanese web fonts now available from Google Fonts Early&nbsp;Access.</p>
            </HeaderColumn>
          </div>
        </header>
        <div className="mx-auto max-width-6">
          <FontList className="sm-col-6 md-col-4 px2" textAlignment="center" { ...self.props } />
        </div>
      </div>
    )
  }
}

export default Header
