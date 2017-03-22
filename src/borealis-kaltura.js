import React from 'react';

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
    const { height, width, targetId } = this.props;
    return (
      <div className="kaltura-player">
        <span id="kaltura-player-code" />
        <div
          id={targetId}
          style={{ width, height }}
          itemProp="video"
          itemType="http://schema.org/VideoObject"
        >
          <span itemProp="width" content={width} />
          <span itemProp="height" content={height} />
        </div>
      </div>
    );
  }
}

KalturaPlayer.propTypes = {
  targetId: React.PropTypes.string.isRequired,
  wid: React.PropTypes.string.isRequired,
  uiconf_id: React.PropTypes.number.isRequired,
  flashvars: React.PropTypes.object,
  height: React.PropTypes.string.isRequired,
  width: React.PropTypes.string.isRequired,
  entry_id: React.PropTypes.string,
};

export default KalturaPlayer;
