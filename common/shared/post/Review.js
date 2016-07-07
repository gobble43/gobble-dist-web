import React, { PropTypes } from 'react';

import ReviewProfile from './ReviewProfile';
import Content from './Content';
import Comments from '../comment/CommentsContainer';
import Media from '../media/MediaContainer';
import Rating from './Rating';
import ProductLink from './ProductLink';

const Review = props => (
  <div className="review">
    <ReviewProfile
      facebook_id={props.facebook_id}
      first_name={props.first_name}
      last_name={props.last_name}
      photo_url={props.photo_url}
    />
    <ProductLink upc={props.upc} name={props.name} />
    <Rating rating={props.rating} />
    <Content comment={props.comment} />
    <Media postId={props.postId} />
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

