import React from 'react'
import BorealisPDF from 'borealis-pdf'

export default (props) => {
  return <BorealisPDF {...props.config['pdf']} basename={props.basename} />
}