import React from 'react'
import Section from '../components/Section'

class SpecimenNotoSans extends React.Component {
  render () {
    return (
    <Section className="bg-fuchsia black">
      <div className="wf-notosansjapanese js-bigIdeasText hide">
        <span className="font-weight-900">本当にすばらしい旅だった</span>
        <span className="font-weight-900">多くの愛すべき人々と出会ったが</span>
        <span className="font-weight-900">彼らと再び会うことはないだろう</span>
        <span className="font-weight-100">一生は短く、誰もがリダウトの安全と繁栄のために尽力しなければならない。</span>
        <span className="font-weight-200">それでも、訪れたすべての都市でたくさん旅をした。</span>
        <span className="font-weight-100"> 多くの人々がいたが、時間が足りなかった。</span>
      </div>
      <div className="mx-auto h1 my3 wf-notosansjapanese relative z3">
        <span className="font-weight-900">本当にすばらしい旅だった。多くの愛すべき人</span>
        <span className="font-weight-700">々と出会ったが、彼らと再び会うことはないだ</span>
        <span className="font-weight-500">ろう。一生は短く、誰もがリダウトの安全と繁栄</span>
        <span className="font-weight-400">のために尽力しなければならない。それでも、</span>
        <span className="font-weight-300">訪れたすべての都市でたくさん旅をした。多く</span>
        <span className="font-weight-200">の人々がいたが、時間が足りなかった。</span>
      </div>
    </Section>
    )
  }
}

SpecimenNotoSans.defaultProps = {

}

export default SpecimenNotoSans
