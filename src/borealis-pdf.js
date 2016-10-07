import React from 'react'

export default class BorealisPDF extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <object data={this.props.src} type="application/pdf" width={this.props.width} height={this.props.height}>
          <a href={this.props.src}>{this.props.src}</a>
        </object>
        )
    }

}

BorealisPDF.defaultProps = {
  height: 500,
  width: 900
}

const propTypes = {
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  src: React.PropTypes.string.isRequired
}

BorealisPDF.propTypes = propTypes