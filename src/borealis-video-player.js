import React from 'react';

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
  src: React.PropTypes.string.isRequired,
  height: React.PropTypes.number,
  width: React.PropTypes.number,
};

export default BorealisVideoPlayer;
