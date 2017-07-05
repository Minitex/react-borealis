import React from 'react';
import PropTypes from 'prop-types';

class KalturaPlayer extends React.Component {

  constructor(props) {
    super(props);
    this._config = this._config.bind(this);
  }

  componentDidMount() {
    kWidget.embed(this._config());
  }

  _config() {
    return {
      targetId: this.props.targetId,
      wid: this.props.wid,
      uiconf_id: this.props.uiconf_id,
      flashvars: this.props.flashvars,
      entry_id: this.props.entry_id,
    };
  }

  render() {
    const { pusher_margin_top, wrapper_height, wrapper_width, targetId } = this.props;
    const wrapperStyle = { width: wrapper_width, height: wrapper_height, display: 'inline-block', position: 'relative' };
    const pusherStyle = { marginTop: pusher_margin_top };
    const playerStyle = { position: 'absolute', top: 0, left: 0, left: 0, right: 0, bottom: 0 };
    return (
      <div id="kaltura-wrapper-div" style={wrapperStyle}>
        <div id="kaltura-pusher-div" style={pusherStyle} />
        <div
          id={targetId}
          style={playerStyle}
          itemProp="video"
          itemType="http://schema.org/VideoObject"
        />
      </div>
    );
  }
}

KalturaPlayer.defaultProps = {
  pusher_margin_top: '56.25%',
};

KalturaPlayer.propTypes = {
  wrapper_height: PropTypes.string.isRequired,
  wrapper_width: PropTypes.string.isRequired,
  pusher_margin_top: PropTypes.string.isRequired,
  wid: PropTypes.string.isRequired,
  uiconf_id: PropTypes.number.isRequired,
  flashvars: PropTypes.object,
  entry_id: PropTypes.string,
  targetId: PropTypes.string,
};

export default KalturaPlayer;
