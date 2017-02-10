import React from 'react'
import BorealisAudioPlayer from './borealis-audio-player'

export default (props) => {
  return <BorealisAudioPlayer {...props.config['audio']} />
}