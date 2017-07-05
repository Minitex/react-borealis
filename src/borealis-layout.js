import {
  BrowserRouter as Router,
  Route,
  IndexRedirect,
  useRouterHistory,
  Redirect
} from 'react-router-dom';

import React from 'react';

import BorealisTray from './borealis-tray';
import TranscriptNav from './transcript-nav';

class BorealisLayout extends React.Component {
  render() {
    const { config, transcript, type, WrappedComponent, getThumbnailPath, basename} = this.props;
    const layoutProps = this.props;
    return (
      <div>
        <BorealisTray config={config} getThumbnailPath={getThumbnailPath} />
        <TranscriptNav
          transcript={config[type].transcript}
          assetPath={`/${getThumbnailPath(type)}`}
          transcriptPath={`/${getThumbnailPath(type)}/transcript`}  />
        <WrappedComponent basename={basename} {...layoutProps} config={config[type]} {...config[type]} />
      </div>
    );
  }
}


export default BorealisLayout;
