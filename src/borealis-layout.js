import PropTypes from 'prop-types';
import React from 'react';
import BorealisTray from './borealis-tray';
import TranscriptNav from './transcript-nav';

const BorealisLayout = (props) => {
  const { config, type, WrappedComponent, getThumbnailPath, basename } = props;
  const layoutProps = props;
  return (
    <div>
      <BorealisTray config={config} getThumbnailPath={getThumbnailPath} />
      <TranscriptNav
        transcript={config[type].transcript}
        assetPath={`/${getThumbnailPath(type)}`}
        transcriptPath={`/${getThumbnailPath(type)}/transcript`}  />
      <WrappedComponent
        basename={basename}
        {...layoutProps}
        config={config[type]}
        {...config[type]}
      />
    </div>
  );
};

BorealisLayout.propTypes = {
  config: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  WrappedComponent: PropTypes.func.isRequired,
  getThumbnailPath: PropTypes.func.isRequired,
  basename: PropTypes.string.isRequired,
};

export default BorealisLayout;
