import React, { PropTypes } from 'react';

import Username from '../general/Username';
import SmallPhoto from '../general/SmallPhoto';
import ProductLink from './ProductLink';
import PostContent from './PostContent';
import Media from '../media/MediaContainer';

const ReviewProfile = props => (
  <div className="review-profile">
    <div className="review-left">
      <SmallPhoto photo_url={props.photo_url} />
    </div>
    <div className="review-right">
      <Username facebook_id={props.facebook_id} first_name={props.first_name} last_name={props.last_name} />
      <ProductLink upc={props.upc} name={props.name} />
      <PostContent comment={props.comment} rating={props.rating} />
      <Media postId={props.postId} />
    </div>
  </div>
);

ReviewProfile.propTypes = {
  facebook_id: PropTypes.number.isRequired,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  photo_url: PropTypes.string,
  upc: PropTypes.number,
  name: PropTypes.name,
  comment: PropTypes.string,
  rating: PropTypes.rating
};

export default ReviewProfile;
