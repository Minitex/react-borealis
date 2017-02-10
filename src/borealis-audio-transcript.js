import React from 'react'
import BorealisTranscript from './borealis-transcript'

export default (props) => {
  return <BorealisTranscript {...props.config['audio']} />
}