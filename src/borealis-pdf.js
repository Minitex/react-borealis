import React from 'react'
import BorealisPDFViewer from './borealis-pdf-viewer'

export default (props) => {
  return <BorealisPDFViewer {...props.config['pdf']} />
}