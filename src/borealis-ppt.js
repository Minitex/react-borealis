import React from 'react';
import PropTypes from 'prop-types';

const PPTViewer = (props) => {
  return (
    <div className="ppt-download">
      <a href={props.src} ><img alt="Microsoft PowerPoint" src={props.thumbnail} /></a>
      <a href={props.src} >{props.text}</a>
    </div>
  );
};

PPTViewer.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default PPTViewer;
