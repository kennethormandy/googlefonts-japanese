import React from 'react'

class CodeBlock extends React.Component {
  render () {
    const self = this

    return (
      <pre className="overflow-x-auto h5 line-height-4 bg-black white rounded p2 font-family-monospace"
           data-language={ self.props.language }><code>{ self.props.children.toString() }</code></pre>
    )
  }
}

CodeBlock.defaultProps = {
  language: 'auto'
}

export default CodeBlock
