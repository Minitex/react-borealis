import React from 'react'
import ActiveItem from 'react-active-item'
import OpenseadragonViewer from 'react-openseadragon'
import BorealisTray from './borealis-tray'
import BorealisPDF from './borealis-pdf'
import BorealisAudio from './borealis-audio'
import BorealisVideo from './borealis-video'


class Borealis extends React.Component {
  constructor(props) {
      super(props)
      this._player = this._player.bind(this)
  }

  _player() {
    let item = this.props.getActiveItem()
    switch(item.type) {
      case 'pdf':
        return <BorealisPDF {...item} />
        break
      case 'audio':
        return <BorealisAudio {...item} />
        break
      case 'video':
        return <BorealisVideo {...item} />
        break
      case 'image':
        return <OpenseadragonViewer {...item} />
        break
      default:
        return <div>No Viewer Avaialable for type: "{item.type}"</div>
    }
  }

  render() {
    return (
      <div id="react-borealis" className="react-borealis col-md-12">
        <div className="row"><BorealisTray {...this.props } /></div>
        <div className="row">{this._player()}</div>
      </div>
    )
  }
}

const propTypes = {
  items: React.PropTypes.array.isRequired
}

Borealis.propTypes = propTypes

export default ActiveItem(Borealis)