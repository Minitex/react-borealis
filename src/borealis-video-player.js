import React from 'react';
import PropTypes from 'prop-types';

const BorealisVideoPlayer = (props) => {
  const { src, width, height } = props;
  return (
    <video width={width} height={height} controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

BorealisVideoPlayer.defaultProps = {
  height: 800,
  width: 800,
};

BorealisVideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default BorealisVideoPlayer;
