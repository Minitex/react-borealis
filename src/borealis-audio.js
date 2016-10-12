import React from 'react'

export default class BorealisAudio extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (<audio controls className="audio-player">
                <source src={this.props.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
        )
    }

}

const propTypes = {
  src: React.PropTypes.string.isRequired
}

BorealisAudio.propTypes = propTypes