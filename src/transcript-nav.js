import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const TranscriptNav = (props) => {
  const { transcript, assetPath, transcriptPath } = props;
  if (transcript.texts.length > 0) {
    return (
      <div className="row image-nav">
        <ul className="nav nav-pills">
          <li>
            <NavLink
              className="transcript-nav-link"
              activeClassName="active"
              to={assetPath}
            >
              {transcript.label}
            </NavLink>
          </li>
          <li >
            <NavLink
              className="transcript-nav-link"
              activeClassName="active"
              to={transcriptPath}
            >
              Transcript
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
  return (<span />);
};

TranscriptNav.propTypes = {
  assetPath: PropTypes.string.isRequired,
  transcriptPath: PropTypes.string.isRequired,
  transcript: PropTypes.object.isRequired,
};

export default TranscriptNav;
