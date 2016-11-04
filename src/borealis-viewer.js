import React from 'react'
import BorealisPDF from './borealis-pdf'
import BorealisAudio from './borealis-audio'
import BorealisVideo from './borealis-video'
import OpenseadragonViewer from 'react-openseadragon'

export default class BorealisViewer extends React.Component {
  constructor(props) {
      super(props)
      this._player = this._player.bind(this)
  }

  _player() {
    let { type, src, thumbnail } = this.props.active_asset
    switch(type) {
      case 'pdf':
        return <BorealisPDF src={src} thumbnail={thumbnail} />
        break
      case 'audio':
        return <BorealisAudio src={src} />
        break
      case 'video':
        let { height, width } = this.props.active_asset
        return <BorealisVideo src={src} />
        break
      case 'image':
        let { include_navigator, include_controls, os_config } = this.props.active_asset
        return <OpenseadragonViewer include_navigator={include_navigator} 
                                    include_controls={include_controls}
                                    config={os_config} />
        break
      default:
        return <div>No Viewer Avaialable for type: "{type}"</div>
    }
  }

  render() {
    return (
      <div id="react-borealis" className="react-borealis col-md-12">
        {this._player()}
      </div>
    )
  }
}

const propTypes = {
  active_asset: React.PropTypes.object.isRequired
}

BorealisViewer.propTypes = propTypes
