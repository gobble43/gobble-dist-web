import React, { PropTypes } from 'react';

import ReviewContent from './ReviewContent';
import Comments from '../comment/CommentsContainer';


const Review = props => (
  <div className="review">
    <ReviewContent
      facebook_id={props.facebook_id}
      first_name={props.first_name}
      last_name={props.last_name}
      photo_url={props.photo_url}
      upc={props.upc}
      name={props.name}
      comment={props.comment}
      rating={props.rating}
      postId={props.postId}
    />
    <Comments postId={props.postId} />
  </div>
);

Review.propTypes = {
  postId: PropTypes.number,
  rating: PropTypes.number.isRequired,
  facebook_id: PropTypes.number.isRequired,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  photo_url: PropTypes.string,
  comment: PropTypes.string,
  Post_created_at: PropTypes.string.isRequired,
  upc: PropTypes.number.isRequired,
  likesCache: PropTypes.number
};

export default Review;

