import React, { PropTypes } from 'react';

import Rating from './Rating';

const PostContent = props => (
  <div className="post-content">
    <Rating rating={props.rating} />
    <div className="post-comment">{props.comment}</div>
  </div>

);

PostContent.propTypes = {
  rating: PropTypes.number,
  comment: PropTypes.string,
};

export default PostContent;
