import React from 'react';
import TranscriptNav from './transcript-nav';

const BorealisTranscript = (props) => {
  const { transcript } = props;
  return (<div>
    {transcript.texts.map((text, i) => <div key={`transcript-${i}`} className="transcript">{text}</div>)}
  </div>);
};

const propTypes = {
  transcript: React.PropTypes.object.isRequired,
};

BorealisTranscript.propTypes = propTypes;

export default BorealisTranscript;
