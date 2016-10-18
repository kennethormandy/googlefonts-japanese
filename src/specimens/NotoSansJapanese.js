import React from 'react';
import Section from '../components/Section';

class SpecimenNotoSans extends React.Component {
  render() {
    return (
    <div className="relative overflow-hidden">
    <Section className="bg-fallback-fuchsia black" verticalCenter={true}>
      {/*
      <div className="wf-notosansjapanese js-bigIdeasText hide">
        <span className="font-weight-900">本当にすばらしい旅だった</span>
        <span className="font-weight-900">多くの愛すべき人々と出会ったが</span>
        <span className="font-weight-900">彼らと再び会うことはないだろう</span>
        <span className="font-weight-100">一生は短く、誰もがリダウトの安全と繁栄のために尽力しなければならない。</span>
        <span className="font-weight-200">それでも、訪れたすべての都市でたくさん旅をした。</span>
        <span className="font-weight-100"> 多くの人々がいたが、時間が足りなかった。</span>
      </div>
      */}
      <div className="mx-auto h1 my3 wf-notosansjapanese relative z3 line-height-4">
        <span className="font-weight-900">本当にすばらしい旅だった。</span>
        <span className="font-weight-700">多くの愛すべき人々と出会ったが、</span>
        <span className="font-weight-500">彼らと再び会うことはないだろう。</span>
        <span className="font-weight-400">一生は短く、誰もがリダウトの安全と繁栄のために尽力しなければならない。</span>
        <span className="font-weight-300">それでも、訪れたすべての都市でたくさん旅をした。</span>
        <span className="font-weight-200">多くの人々がいたが、時間が足りなかった。</span>
      </div>
    </Section>
    <div className="transform-square bg-aqua muted absolute bottom-0 left-0 blend-multiply z2" style={{minWidth: 200 + 'vw', minHeight: 200 + 'vw', transform: 'rotate(135deg) translate(50%, 50%)'}}></div>
    <div className="transform-square bg-aqua muted absolute bottom-0 left-0 blend-multiply z1" style={{minWidth: 100 + 'vw', minHeight: 200 + 'vw', transform: 'rotate(136deg) translate(80%, 50%)'}}></div>
    <div className="transform-square bg-aqua muted absolute bottom-0 left-0 blend-multiply z2" style={{minWidth: 300 + 'vw', minHeight: 200 + 'vw', transform: 'rotate(134deg) translate(10%, 50%)'}}></div>

    <div className="animate-float" style={{animationDuration: 30 + 's', animationDelay: 1 + 's'}}><div className="transform-square bg-aqua muted absolute bottom-0 left-0 blend-multiply z1" style={{minWidth: 20 + 'vw', minHeight: 30 + 'vw'}}></div></div>
    <div className="animate-float" style={{animationDuration: 60 + 's', animationDelay: 5 + 's'}}><div className="transform-square bg-aqua muted absolute bottom-0 left-0 blend-multiply z1" style={{minWidth: 50 + 'vw', minHeight: 50 + 'vw'}}></div></div>
    <div className="animate-float" style={{animationDuration: 15 + 's', animationDelay: 3 + 's'}}><div className="transform-square bg-aqua muted absolute bottom-0 left-0 blend-multiply z1" style={{minWidth: 70 + 'vw', minHeight: 70 + 'vw'}}></div></div>
    <div className="animate-float" style={{animationDuration: 33 + 's', animationDelay: 10 + 's'}}><div className="transform-square bg-aqua muted absolute bottom-0 left-0 blend-multiply z1" style={{minWidth: 50 + 'vw', minHeight: 50 + 'vw'}}></div></div>
    <div className="animate-float" style={{animationDuration: 25 + 's', animationDelay: 4 + 's'}}><div className="transform-square bg-aqua muted absolute bottom-0 left-0 blend-multiply z1" style={{minWidth: 40 + 'vw', minHeight: 40 + 'vw'}}></div></div>
    </div>
    );
  }
}

SpecimenNotoSans.defaultProps = {

};

export default SpecimenNotoSans;
