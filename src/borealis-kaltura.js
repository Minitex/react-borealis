import React from 'react';

class KalturaPlayer extends React.Component {

  static _config(props) {
    return {
      targetId: props.targetId,
      wid: props.wid,
      uiconf_id: props.uiconf_id,
      flashvars: props.flashvars,
      entry_id: props.entry_id,
    };
  }

  componentDidMount() {
    kWidget.embed(KalturaPlayer._config(this.props));
  }

  render() {
    const { entry_id, height, width, targetId } = this.props;
    const wid = this.props.wid.replace(/_/, '');
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
