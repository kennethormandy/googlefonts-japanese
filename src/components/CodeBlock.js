import React from 'react'

class CodeBlock extends React.Component {
  render () {
    const self = this

    return (
      <pre className="overflow-x-auto h5 md-h4 line-height-4 bg-lighten-2 black rounded p2 font-family-monospace"
           data-language={ self.props.language }><code>{ self.props.children.toString() }</code></pre>
    )
  }
}

CodeBlock.defaultProps = {
  language: 'auto'
}

export default CodeBlock
