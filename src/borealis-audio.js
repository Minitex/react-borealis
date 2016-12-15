import React from 'react'
import AudioPlayer from './borealis-audio-player'
import TranscriptNav from './transcript-nav'
import ActiveItem from 'react-active-item'

class BorealisAudio extends React.Component {
    constructor(props) {
        super(props)
        this.viewer = this.viewer.bind(this)        
    }

    viewer() {
      let item = this.props.getActiveItem()
      switch(item.type) {
        case 'audio':
          return <AudioPlayer {...item} />
          break
        case 'transcript':
          return <div>{item.texts[0]}</div>
          break
        default:
          return <div>No Viewer Avaialable for type: "{item.type}"</div>
      }
    }

    render() {
      return (
               <div>
                 <div className="row"><TranscriptNav {...this.props} /></div>
                 <div className="row">{this.viewer()}</div>
                </div>
              )
    }

}

const propTypes = {
  items: React.PropTypes.array.isRequired
}

BorealisAudio.propTypes = propTypes

export default ActiveItem(BorealisAudio)