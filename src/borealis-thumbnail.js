import React from 'react'

const Thumbnail = props => (
  <div className="col-md-2">
    <a onClick={props.handler} className="thumbnail"><img src={props.src} /></a>
  </div>
)

export default Thumbnail