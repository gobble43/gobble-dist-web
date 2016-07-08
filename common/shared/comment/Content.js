import React, { PropTypes } from 'react';

const Content = props => (
  <div className={props.className}>{props.comment}</div>
);

Content.propTypes = {
  comment: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Content;
