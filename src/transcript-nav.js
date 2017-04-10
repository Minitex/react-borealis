import React from 'react'
import { Link } from 'react-router'

export default class TranscriptNav extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      let { transcript, asset_path, transcript_path } = this.props
      if (transcript.texts.length > 0) {
          return (
                    <div className="row image-nav">
                      <ul className="nav nav-pills">
                        <li><Link className="transcript-nav-link" activeClassName="active" to={asset_path}>{transcript.label}</Link></li>
                        <li ><Link className="transcript-nav-link" activeClassName="active" to={transcript_path}>Transcript</Link></li>
                      </ul>
                    </div>
                  )
        } else {
          return (<span />)
        }
      }
}

const propTypes = {
  asset_path: React.PropTypes.string.isRequired,
  transcript_path: React.PropTypes.string.isRequired,
}

TranscriptNav.propTypes = propTypes
