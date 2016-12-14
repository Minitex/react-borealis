import React from 'react'

const Thumbnail = props => (
                              <div className="col-md-2">
                                <a onClick={props.setActiveItem} className="thumbnail"><img src={props.src} /></a>
                              </div>
                            )

const propTypes = {
  setActiveItem: React.PropTypes.func.isRequired,
  src: React.PropTypes.string.isRequired
}

Thumbnail.propTypes = propTypes

export default Thumbnail