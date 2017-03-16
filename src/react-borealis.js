import { Router,
         Route,
         IndexRedirect,
         useRouterHistory,
         Redirect } from 'react-router';
import { createHashHistory } from 'history';
import React from 'react';
import BorealisImage from './borealis-image';
import BorealisTray from './borealis-tray';
import BorealisAudio from './borealis-audio';
import BorealisVideo from './borealis-video';
import TranscriptNav from './transcript-nav';
import BorealisPDF from './borealis-pdf';
import BorealisPPT from './borealis-ppt';
import KalturaVideo from './borealis-kaltura-video';
import KalturaAudio from './borealis-kaltura-audio';
import KalturaAudioPlaylist from './borealis-kaltura-audio-playlist';
import BorealisImageTranscript from './borealis-image-transcript';
import BorealisAudioTranscript from './borealis-audio-transcript';
import BorealisVideoTranscript from './borealis-video-transcript';
import BorealisPDFTranscript from './borealis-pdf-transcript';
import KalturaVideoTranscript from './borealis-kaltura-video-transcript';
import KalturaAudioTranscript from './borealis-kaltura-audio-transcript';
import KalturaAudioPlaylistTranscript from './borealis-kaltura-audio-playlist-transcript';


class Borealis extends React.Component {
  constructor(props) {
    super(props);
    this._app = this._app.bind(this);
    this._type = this._type.bind(this);
    this._initialPath = this._initialPath.bind(this);
  }

  _viewer(config, base_path, children) {
    return React.cloneElement(
      children,
      { config, base_path },
    );
  }

  _type(path) {
    return path.replace(/^\//, '').split('/')[0];
  }

  _app() {
    const { config, base_path } = this.props;
    const viewer                = this._viewer;
    const type                  = this._type;
    return React.createClass({
      render: function() {
        const asset_type = type(this.props.location.pathname);
        return (
          <div>
            <BorealisTray config={config} />
            <TranscriptNav
              transcript={config[asset_type].transcript}
              asset_path={asset_type}
              transcript_path={`${asset_type}/transcript`}  />
            {viewer(config, base_path, this.props.children)}
          </div>
        );
      },
    });
  }

  // This order is mirrored in borealis-tray.js
  _initialPath() {
    const config = this.props.config;
    let type = 'image/0';
    if (config.image) {
      type = 'image/0';
    } else if (config.audio) {
      type = 'audio';
    } else if (config.video) {
      type = 'video';
    } else if (config.pdf) {
      type = 'pdf';
    } else if (config.ppt) {
      type = 'ppt';
    } else if (config.kaltura_video) {
      type = 'kaltura_video';
    }
    return type;
  }

  render() {
    // Allow this React App to exist at the end of a preexisiting path like:
    // localhost:3000/catalog/blaah:100 <-- base_path is 'catalog/blaah:100'
    const history = useRouterHistory(createHashHistory)({
      basename: '/',
    });
    const initialPath = this._initialPath;
    return (
      <Router history={history}>
        <Route path="/" component={this._app()}>
          <IndexRedirect to={initialPath()} />
          <Redirect from="image" to="image/0" />
          <Route path="image/transcript" component={BorealisImageTranscript} />
          <Route path="image/:id" component={BorealisImage} />
          <Route path="audio" component={BorealisAudio} />
          <Route path="video" component={BorealisVideo} />
          <Route path="pdf" component={BorealisPDF} />
          <Route path="ppt" component={BorealisPPT} />
          <Route path="kaltura_video" component={KalturaVideo} />
          <Route path="kaltura_audio" component={KalturaAudio} />
          <Route path="kaltura_audio_playlist" component={KalturaAudioPlaylist} />
          <Route path="audio/transcript" component={BorealisAudioTranscript} />
          <Route path="video/transcript" component={BorealisVideoTranscript} />
          <Route path="pdf/transcript" component={BorealisPDFTranscript} />
          <Route path="kaltura_video/transcript" component={KalturaVideoTranscript} />
          <Route path="kaltura_audio/transcript" component={KalturaAudioTranscript} />
          <Route path="kaltura_audio_playlist/transcript" component={KalturaAudioPlaylistTranscript} />
        </Route>
      </Router>
    );
  }
}

const propTypes = {
  config: React.PropTypes.object.isRequired,
  base_path: React.PropTypes.string,
};

Borealis.propTypes = propTypes;

export default Borealis;
