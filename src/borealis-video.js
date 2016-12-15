import React from 'react'
import TranscriptNav from './transcript-nav'
import ActiveItem from 'react-active-item'
import VideoPlayer from './borealis-video-player'

class BorealisVideo extends React.Component {
    constructor(props) {
        super(props)
        this.viewer = this.viewer.bind(this)        
    }

    viewer() {
      let item = this.props.getActiveItem()
      switch(item.type) {
        case 'video':
          return <VideoPlayer {...item} />
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

BorealisVideo.propTypes = {
  items: React.PropTypes.array.isRequired
}

export default ActiveItem(BorealisVideo)