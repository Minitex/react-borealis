import React from 'react';
import { NavLink } from 'react-router-dom';

const Thumbnail = props =>
  <div>
    <NavLink
      className="borealis-thumbnail"
      activeClassName="active"
      to={`/${props.to}`}
    >
      <img alt={`Click to load the ${props.to}`} src={props.src} />
    </NavLink>
  </div>;

const propTypes = {
  to: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
};

Thumbnail.propTypes = propTypes;

export default Thumbnail;
