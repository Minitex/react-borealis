import { Router,
         Route,
         IndexRedirect,
         useRouterHistory,
         Redirect } from 'react-router';

import React from 'react';
import BorealisImage from './borealis-image';
import BorealisTray from './borealis-tray';
import BorealisAudio from './borealis-audio';
import BorealisVideo from './borealis-video';
import BorealisImageTranscript from './borealis-image-transcript';
import BorealisAudioTranscript from './borealis-audio-transcript';
import BorealisVideoTranscript from './borealis-video-transcript';
import BorealisPDFTranscript from './borealis-pdf-transcript';
import TranscriptNav from './transcript-nav';
import { createHashHistory } from 'history';
import BorealisPDF from './borealis-pdf';
import BorealisPPT from './borealis-ppt';


class Borealis extends React.Component {
  constructor(props) {
    super(props);
    this._app = this._app.bind(this);
    this._type = this._type.bind(this);
    this._initial_path = this._initial_path.bind(this);
  }

  _viewer(config, base_path, children) {
    return React.cloneElement(
      children,
      { config, base_path },
    );
  }

  _type(path) {
    return path.replace(/^\//, '').split('/')[0]
  }

  _app() {
    let { config, base_path } = this.props
    let viewer                = this._viewer
    let type                  = this._type
    return React.createClass({
      render: function() {
        let asset_type = type(this.props.location.pathname)
        return  (
                  <div>
                    <BorealisTray config={config} />
                    <TranscriptNav transcript={config[asset_type].transcript}
                                   asset_path={asset_type}
                                   transcript_path={asset_type + '/transcript'}  />
                    {viewer(config, base_path, this.props.children)}
                  </div>
                )
      }
    })
  }

  //This order is mirrored in borealis-tray.js
  _initial_path() {
    let config = this.props.config
    if (config['image']) {
      return 'image/0'
    } else if(config['audio']) {
      return 'audio'
    } else if(config['video']) {
      return 'video'
    } else if(config['pdf']) {
      return 'pdf'
    } else if(config['ppt']) {
      return 'ppt'
    }
  }

  render() {
    //Allow this React App to exist at the end of a preexisiting path like:
    //localhost:3000/catalog/blaah:100 <-- base_path is 'catalog/blaah:100'
    const history = useRouterHistory(createHashHistory)({
        basename: "/"
    })
    let initial_path = this._initial_path
    return (
      <Router history={history}>
        <Route path="/" component={this._app()}>
          <IndexRedirect to={initial_path()} />
          <Redirect from='image' to='image/0' />
          <Route path="image/transcript" component={BorealisImageTranscript} />
          <Route path="image/:id" component={BorealisImage} />
          <Route path="audio" component={BorealisAudio} />
          <Route path="video" component={BorealisVideo} />
          <Route path="pdf" component={BorealisPDF} />
          <Route path="ppt" component={BorealisPPT} />
          <Route path="audio/transcript" component={BorealisAudioTranscript} />
          <Route path="video/transcript" component={BorealisVideoTranscript} />
          <Route path="pdf/transcript" component={BorealisPDFTranscript} />
        </Route>
      </Router>
    )
  }
}

const propTypes = {
  config: React.PropTypes.object.isRequired,
  base_path: React.PropTypes.string
}

Borealis.propTypes = propTypes

export default Borealis