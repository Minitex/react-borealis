import React from 'react';

const PPTViewer = (props) => {
  const config = props.config.ppt;

  return (
    <div className="ppt-download">
      <a href={config.src} >
        <img alt="Microsoft PowerPoint" src={config.thumbnail} /> (Download)
      </a>
    </div>
  );
};

export default PPTViewer;

