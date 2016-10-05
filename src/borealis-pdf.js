import React from 'react'

export default class BorealisPDF extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <object data={this.props.src} type="application/pdf" width={this.props.width} height={this.props.height}>
          <a href="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf">https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf</a>
        </object>
        )
    }

}

BorealisPDF.defaultProps = {
  height: 800,
  width: 800
}

const propTypes = {
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  src: React.PropTypes.string.isRequired
}

BorealisPDF.propTypes = propTypes