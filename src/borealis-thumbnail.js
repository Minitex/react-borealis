import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

Thumbnail.propTypes = propTypes;

export default Thumbnail;
