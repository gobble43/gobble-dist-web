import React, { PropTypes } from 'react';

import Username from '../general/Username';
import SmallPhoto from '../general/SmallPhoto';
import ProductLink from './ProductLink';
import PostContent from './PostContent';
import Media from '../media/MediaContainer';

const ReviewContent = props => (
  <div className="review-profile">
    <div className="review-left">
      <SmallPhoto photo_url={props.photo_url} />
    </div>
    <div className="review-right">
      <span className="review-title"><Username facebook_id={props.facebook_id} first_name={props.first_name} last_name={props.last_name} /> added a review.</span>
      <ProductLink upc={props.upc} name={props.name} />
      <PostContent comment={props.comment} rating={props.rating} />
      <Media postId={props.postId} />
    </div>
  </div>
);

ReviewContent.propTypes = {
  facebook_id: PropTypes.number.isRequired,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  photo_url: PropTypes.string,
  upc: PropTypes.number,
  name: PropTypes.string,
  comment: PropTypes.string,
  rating: PropTypes.rating
};

export default ReviewContent;
