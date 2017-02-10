import React from 'react'
import BorealisVideoPlayer from './borealis-video-player'

export default (props) => {
  return <BorealisVideoPlayer {...props.config['video']} />
}