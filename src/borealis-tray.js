import React from 'react';
import Thumbnail from './borealis-thumbnail';

export default class BorealisTray extends React.Component {
  static thumbs(config) {
    return ['image', 'kaltura_audio', 'kaltura_audio_playlist', 'kaltura_video', 'audio', 'video', 'pdf', 'ppt'].map(
      type => ((config[type]) ? { [type]: config[type].thumbnail } : ''),
    ).filter(item => item !== '');
  }

  static keys(obj) {
    return Object.keys(obj);
  }

  static key(obj) {
    return BorealisTray.keys(obj)[0];
  }

  static val(obj) {
    return BorealisTray.keys(obj).map(key => obj[key])[0];
  }

  render() {
    const { config, getThumbnailPath } = this.props;
    const val = BorealisTray.val;
    const key = BorealisTray.key;
    if (BorealisTray.keys(config).length > 1) {
      return (
        <div className="borealis-tray">
          {BorealisTray.thumbs(config).map((item, i) =>
            <Thumbnail
              to={getThumbnailPath(key(item))}
              src={val(item)}
              key={`tray-thumbnail-${i}`}
            />,
          )}
        </div>
      );
    }
    return <span />;
  }
}

const propTypes = {
  config: React.PropTypes.object.isRequired,
  getThumbnailPath: React.PropTypes.func.isRequired,
};

BorealisTray.propTypes = propTypes;
