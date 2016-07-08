import React, { PropTypes } from 'react';

const LikeButton = props => {
  if (props.isLiked) {
    return <i className="fa fa-thumbs-up" />;
  }
  return <i className="fa fa-thumbs-up-o" />;
};

Review.propTypes = {
  isLiked: PropTypes.bool.isRequired,
};

export default LikeButton;
