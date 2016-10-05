import React from 'react'
import BorealisPDF from './borealis-pdf'
import BorealisAudio from './borealis-audio'
import BorealisVideo from './borealis-video'
import OpenseadragonViewer from 'react-openseadragon'

console.log(BorealisVideo)

export default class Borealis extends React.Component {
  constructor(props) {
      super(props)
      this._player = this._player.bind(this)
  }

  _player() {
    const {type, src, seadragon_conf} = this.props
    switch(type) {
      case 'pdf':
        return <BorealisPDF src={src} />
        break
      case 'audio':
        return <BorealisAudio src={src} />
        break
      case 'video':
        return <BorealisVideo src={src} />
        break
      case 'iiif':
        const seadragon_conf = {
            sequenceMode:  true,
            showReferenceStrip: true,
            tileSources:   [
                "https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json",
                "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"
            ]
          }
        return <OpenseadragonViewer config={seadragon_conf} />
        break
      default:
        return <div>No Viewer Avaialable for type: "{type}"</div>
    }
  }

  render() {
    return (
      <div className="container">
        <div id="react-borealis" className="react-borealis col-md-12">
          {this._player()}
        </div>
      </div>
    )
  }
}

const propTypes = {
  type: React.PropTypes.string.isRequired,
  src: React.PropTypes.string,
  config: React.PropTypes.func
}

Borealis.propTypes = propTypes
