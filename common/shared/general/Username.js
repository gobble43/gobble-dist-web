import React, { PropTypes } from 'react';

const Username = props => (
  <div className={`username${props.className ? ` ${props.className}` : ''}`}>
    <a className="username-link" href={`/${props.facebook_id}`}>{`${props.first_name} ${props.last_name}`}</a>
  </div>
);

Username.propTypes = {
  facebook_id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Username;
