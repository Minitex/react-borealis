import React from 'react'
import TranscriptNav from './transcript-nav'

export default class BorealisPDFViewer extends React.Component {
    constructor(props) {
        super(props)
    }

    transcript_nav() {
      return (
        [
          {to: 'pdf', label: 'PDF'},
          {to: 'pdf/transcript', label: 'Transcript'}
        ]
      )
    }

    render() {
          let { src, height, width, thumbnail } = this.props
          return (  <div>
                      <object data={src} type="application/pdf" width={width} height={height}>
                        <img src={thumbnail} /> <a href={src}><span className="glyphicon glyphicon-download-alt"></span> {src}</a>
                      </object>
                    </div>
                 )
    }
}

BorealisPDFViewer.defaultProps = {
  height: 500,
  width: 800
}

BorealisPDFViewer.propTypes = {
  src: React.PropTypes.string.isRequired,
  height:React.PropTypes.string,
  width: React.PropTypes.string,
  thumbnail: React.PropTypes.string
}