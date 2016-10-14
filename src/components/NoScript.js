import React from 'react';

class NoScript extends React.Component {
  render() {
    // https://git.io/vPtBU
    return (
      <noscript dangerouslySetInnerHTML={{
        __html: '<link href="/css/fonts.css" rel="stylesheet" />'
      }} />
    );
  }
}

export default NoScript;
