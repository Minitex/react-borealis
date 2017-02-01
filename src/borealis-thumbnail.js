import React from 'react'

const Thumbnail = props => (
                              <div className="col-md-2">
                                <a onClick={props.setActiveItem} className={"thumbnail " + ((props.is_active) ? 'active' : '')}><img src={props.src} /></a>
                              </div>
                            )

const propTypes = {
  is_active: React.PropTypes.bool,
  setActiveItem: React.PropTypes.func.isRequired,
  src: React.PropTypes.string.isRequired
}

Thumbnail.propTypes = propTypes

export default Thumbnail