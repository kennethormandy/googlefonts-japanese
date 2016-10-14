import React from 'react';
import Section from '../components/Section';

class SpecimenSawarabi extends React.Component {
  render() {
    return (
      <div>
        <Section maxWidth={ 2 }>
          <div className="h3 sm-h4 md-h2 lg-h1 line-height-4 white">
            <div className="border-bottom border-yellow border-medium">
              <p className="wf-sawarabigothic">依然として速度を増しながら進むにつれて、夜と日中の切り替わりが曖昧になり、一続きの灰色になった。空は深い青色で夕暮れ時のような明るい光で照らされている。急に現れる太陽はきらめく円弧の形をした光の筋となった。月はおぼろげに揺らぐ帯となり、星は見えなかった。ただ、時折青い空に明るく瞬く円が見えた。</p>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default SpecimenSawarabi;
