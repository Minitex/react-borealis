import React from 'react'

export default class BorealisPDFViewer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
          let { src, height, width, thumbnail } = this.props
          return (
                    <object data={src} type="application/pdf" width={width} height={height}>
                      <img src={thumbnail} /> <a href={src}><span className="glyphicon glyphicon-download-alt"></span> {src}</a>
                    </object>
                 )
    }
}

BorealisPDFViewer.defaultProps = {
  height: 500,
  width: 800
}

BorealisPDFViewer.propTypes = {
  src: React.PropTypes.string.isRequired,
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  thumbnail: React.PropTypes.string
}