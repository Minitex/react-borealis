import React from 'react';

const BorealisAudioPlayer = props => (
  <audio controls className="audio-player">
    <source src={props.src} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
);

BorealisAudioPlayer.propTypes = {
  src: React.PropTypes.string.isRequired,
};

export default BorealisAudioPlayer;
