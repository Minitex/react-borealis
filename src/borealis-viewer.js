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
    let { type, config } = this.props.active_object
    switch(type) {
      case 'pdf':
        return <BorealisPDF src={config.srcs[0]} />
        break
      case 'audio':
        return <BorealisAudio src={config.srcs[0]} />
        break
      case 'video':
        let { height, width } = this.props.active_object
        return <BorealisVideo src={config.srcs[0]} />
        break
      case 'iiif':
        let { include_navigator, include_controls } = this.props.active_object
        return <OpenseadragonViewer include_navigator={include_navigator} 
                                    include_controls={include_controls}
                                    config={config} />
        break
      default:
        return <div>No Viewer Avaialable for type: "{type}"</div>
    }
  }

  render() {
    return (<div id="react-borealis" className="react-borealis col-md-12">
        {this._player()}
      </div>
    )
  }
}

const propTypes = {
  active_object: React.PropTypes.object.isRequired
}

BorealisViewer.propTypes = propTypes
