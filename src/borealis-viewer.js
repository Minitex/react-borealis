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
    switch(this.props.active_asset.type) {
      case 'pdf':
        return <BorealisPDF {...this.props.active_asset} />
        break
      case 'audio':
        return <BorealisAudio {...this.props.active_asset} />
        break
      case 'video':
        return <BorealisVideo {...this.props.active_asset} />
        break
      case 'image':
        return <OpenseadragonViewer {...this.props.active_asset} />
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
