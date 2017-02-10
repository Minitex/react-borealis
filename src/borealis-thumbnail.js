import React from 'react'
import { Link } from 'react-router'
const Thumbnail = props => (
                              <div>
                                <Link className="thumbnail" activeClassName="active" to={props.to}><img src={props.src} /></Link>
                              </div>
                            )

const propTypes = {
  to: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired
}

Thumbnail.propTypes = propTypes

export default Thumbnail