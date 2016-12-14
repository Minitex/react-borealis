import React from 'react'

export default class BorealisAudioPlayer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
          let { src } = this.props
          return (
                   <audio controls className="audio-player">
                    <source src={src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                   </audio>
                 )
    }
}



BorealisAudioPlayer.propTypes = {
  src: React.PropTypes.string.isRequired
}