import React from 'react';

const PPTViewer = (props) => {
  const config = props.config.ppt;

  return (
    <div className="ppt-download">
      <a href={config.src} ><img alt="Microsoft PowerPoint" src={config.thumbnail} /></a>
      <a href={config.src} >{config.text}</a>
    </div>
  );
};

export default PPTViewer;

