import React from 'react';

const PPTViewer = (props) => {
  const config = props.config.ppt;

  return (
    <a className="ppt-download" href={config.src} >
      <img alt="Microsoft PowerPoint" src={config.thumbnail} /> (Download)
    </a>
  );
};

export default PPTViewer;

