import React from 'react'

class Header extends React.Component {
  render () {
    const self = this
    const data = self.props.data

    return (
      <div className="flex bg-maroon white font-family-base">
        <div className="col-12 md-col-8 lg-col-9">
          <header className="sm-flex flex-wrap px2">
            <div className="mx-auto max-width-4 white col-12">
              <h1 className="h1 font-weight-600 block col-12 md-col-9" style={{ fontSize: 4 + 'vw'}}>
                <span style={{ fontFamily: 'Product Sans' }}>Google Fonts</span>
                <span style={{ fontSize: 0.9 + 'em' }}>による早期アクセス日本語フォント</span>
              </h1>
            </div>
            <hr className="block mx-auto max-width-4 border-none col-12 bg-white muted-dark pt1 rounded mt4" />
            <div className="mx-auto max-width-4 white line-height-4">
              <div className="flex mxn1 md-mxn2">
                <div className="col-6 px1 md-px2 mb1 ">
                  <h2 className="mb0 font-weight-600 h4 sm-h1 md-h1 yellow">偉大なタイポグラフィを介してウェブをより美しく高速で、オープン作ります</h2>
                </div>
                <div className="col-6 px1 md-px2">
                  <h2 className="mb0 font-weight-600 h4 sm-h1 md-h1 line-height-3 muted-dark">Making the web more beautiful, fast, and open through great typography</h2>
                </div>
              </div>
              <div className="flex mxn1 md-mxn2">
                <div className="col-6 px1 md-px2">
                  <p className="h5 sm-h3 md-h3">我々は、Webサイトや製品に個性と性能をもたらすための最善の方法は、優れたデザインと技術を通じてであると考えています。</p>
                  <p className="h5 sm-h3 md-h3">私たちの目標は、オープンソースのデザイナーのWebフォントの直感的かつ堅牢なディレクトリを提供することによって、そのプロセスを簡単にすることです。豊富なカタログを使用することで、あなたが共有し、あなたが世界のどこにいるかシームレス-関係なく、任意の設計プロジェクトにタイポグラフィを統合することはできません。</p>
                </div>
                <div className="col-6 px1 md-px2 muted-dark">
                  <p className="h5 sm-h3 md-h3">We believe the best way to bring personality and performance to websites and products is through great design and&nbsp;technology.</p>
                  <p className="h5 sm-h3 md-h3">Our goal is to make that process simple, by offering an intuitive and robust directory of open source designer web fonts. By using our extensive catalog, you can share and integrate typography into any design project seamlessly—no matter where you are in the&nbsp;world.</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    )
  }
}

export default Header
