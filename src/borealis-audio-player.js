import React from 'react';
import PropTypes from 'prop-types';

const BorealisAudioPlayer = props => (
  <audio controls className="audio-player">
    <source src={props.src} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
);

BorealisAudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default BorealisAudioPlayer;
