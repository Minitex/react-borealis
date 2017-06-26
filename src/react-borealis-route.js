import {
  BrowserRouter as Router,
  Route,
  IndexRedirect,
  useRouterHistory,
  Redirect,
  Switch,
} from 'react-router-dom';


import React from 'react';
import BorealisLayout from './borealis-layout';

import BorealisPPT from './borealis-ppt';

import BorealisTranscript from './borealis-transcript';

import BorealisPDF from 'borealis-pdf';
import BorealisAudioPlayer from './borealis-audio-player';
import KalturaPlayer from './borealis-kaltura';
import ReactOpenseadragon from 'react-openseadragon';
import BorealisVideoPlayer from './borealis-video-player';

class Borealis extends React.Component {
  constructor(props) {
    super(props);
    this._type = this._type.bind(this);
    this._layout = this._layout.bind(this);
    this._initialPath = this._initialPath.bind(this);
    this._thumbnailPath = this._thumbnailPath.bind(this);
  }


  _type(path) {
    return path.replace(/^\//, '').split('/')[0];
  }

    // This order is mirrored in borealis-tray.js
  _initialPath() {
    const config = this.props.config;
    return this._thumbnailPaths().map( (thumb) => {
      if (config[thumb.type]) {
        return thumb.path;
      }
    })[0];
  }

  // Order matters: ordered according to which player should come first when
  // multiple players are present
  _thumbnailPaths() {
    return ([
      { type: 'image', path: 'image/0' },
      { type: 'kaltura_audio', path: 'kaltura_audio' },
      { type: 'kaltura_audio_playlist', path: 'kaltura_audio_playlist' },
      { type: 'kaltura_video', path: 'kaltura_video' },
      { type: 'audio', path: 'audio' },
      { type: 'video', path: 'video' },
      { type: 'pdf', path: 'pdf/0' },
      { type: 'ppt', path: 'ppt' },
    ]);
  }

  _thumbnailPath(type) {
    return this._thumbnailPaths().find((thumb) => {
      return thumb.type === type;
    }).path;
  }

  _layout(props, wrappedComponent, type) {
    const defaultProps = this.props;
    const config = this.props.config;
    const getThumbnailPath = this._thumbnailPath;
    return (<BorealisLayout
      {...props}
      {...defaultProps}
      WrappedComponent={wrappedComponent}
      getThumbnailPath={getThumbnailPath}
      type={type}
    />);
  }

  render() {
    const initialPath = this._initialPath;
    const layout = this._layout;
    return (
      <div>
        <Switch>
          <Redirect from="/" exact  to={`/${initialPath()}`} />
          <Route exact path="/image/:id" render={(props) => layout(props, ReactOpenseadragon, 'image')} />
          <Route exact path="/kaltura_audio" render={(props) => layout(props, KalturaPlayer, 'kaltura_audio')} />
          <Route exact path="/kaltura_audio_playlist" render={(props) => layout(props, KalturaPlayer, 'kaltura_audio_playlist')} />
          <Route exact path="/kaltura_video" render={(props) => layout(props, KalturaPlayer, 'kaltura_video')} />
          <Route exact path="/audio" render={(props) => layout(props, BorealisAudioPlayer, 'audio')} />
          <Route exact path="/video" render={(props) => layout(props, BorealisVideoPlayer, 'video')} />
          <Route exact path="/pdf/:id" render={(props) => layout(props, BorealisPDF, 'pdf')} />
          <Route exact path="/ppt" render={(props) => layout(props, BorealisPPT, 'ppt')}  />

          <Route path="/image/:id/transcript" render={(props) => layout(props, BorealisTranscript, 'image')} />
          <Route path="/kaltura_audio/transcript" render={(props) => layout(props, BorealisTranscript, 'kaltura_audio')} />
          <Route path="/kaltura_audio_playlist/transcript" render={(props) => layout(props, BorealisTranscript, 'kaltura_audio_playlist')} />
          <Route path="/kaltura_video/transcript" render={(props) => layout(props, BorealisTranscript, 'kaltura_video')} />
          <Route path="/audio/transcript" render={(props) => layout(props, BorealisTranscript, 'audio')} />
          <Route path="/video/transcript" render={(props) => layout(props, BorealisTranscript, 'video')} />
          <Route path="/pdf/:id/transcript" render={(props) => layout(props, BorealisTranscript, 'pdf')} />
          <Route path="/ppt/transcript" render={(props) => layout(props, BorealisTranscript, 'ppt')} />
        </Switch>
      </div>
    );
  }
}

Borealis.defaultProps = {
  basename: '/',
};

Borealis.propTypes = {
  config: React.PropTypes.object.isRequired,
  basename: React.PropTypes.string,
};

export default Borealis;
