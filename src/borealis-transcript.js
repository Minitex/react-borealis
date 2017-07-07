import React from 'react';
import TranscriptNav from './transcript-nav';
import PropTypes from 'prop-types';

const BorealisTranscript = (props) => {
  const { transcript } = props;
  return (<div>
    {transcript.texts.map((text, i) => <div key={`transcript-${i}`} className="transcript">{text}</div>)}
  </div>);
};

const propTypes = {
  transcript: PropTypes.object.isRequired,
};

BorealisTranscript.propTypes = propTypes;

export default BorealisTranscript;
