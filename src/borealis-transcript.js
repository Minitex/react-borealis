import React from 'react'
import TranscriptNav from './transcript-nav'

class BorealisTranscript extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      let { transcript } = this.props
      return (
                <div>
                  {transcript.texts.map(function(text, i) {
                    return <div key={i} className="transcript">{text}</div>
                  })}
                </div>
              )
    }

}

const propTypes = {
  transcript: React.PropTypes.object.isRequired
}

BorealisTranscript.propTypes = propTypes

export default BorealisTranscript