import React from 'react';
import Section from '../components/Section';
import FitterHappierText from '../vendor/react-fitter-happier-text.jsx';

class SpecimenNikukyu extends React.Component {
  render() {
    return (
      <Section maxWidth={5} className="bg-fallback-olive black wf-nikukyu md-px4">
        <div className="col-12">

          <div className="relative justify-center flex h0-nikukyu my4 sm-my0 line-height-1">
            <span className="block align-bottom"><br/>トン</span>
            <span className="block align-top">トン</span>
          </div>

          <div className="relative justify-end flex h1 my4 sm-my0 line-height-1">
            <span className="block align-bottom" style={{transform: 'rotate(' + 5 + 'deg)'}}><br/>ピョン</span>
            <span className="block align-top" style={{transform: 'rotate(' + 5 + 'deg)'}}>ピョン</span>
          </div>

          <div className="relative my4 sm-my0 h0-nikukyu">
            <span>モタ　モタ</span>
          </div>

          <div className="relative max-width-4 mx-auto mb4">
            <div data-prefix="チョコ チョコ" className="img-nikukyu-ladybug z1 relative">
            <img src="media/illustration-nikukyu-ladybug.svg" style={{width: 35 + 'px'}} role="presentation" alt="" />
            </div>
            <div className="flex items-baseline line-height-1 muted">
              <div className="col-6 h1">
                <FitterHappierText text="スタ" paddingY={0} baseline={14} />
              </div>
              <div className="col-6">
                <div className="h0-nikukyu">スタ</div>
              </div>
            </div>
          </div>

        </div>
      </Section>
    );
  }
}

export default SpecimenNikukyu;
