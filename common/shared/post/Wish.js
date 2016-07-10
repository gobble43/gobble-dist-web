import React, { PropTypes } from 'react';

import Username from '../general/Username';
import SmallPhoto from '../general/SmallPhoto';
import ProductLink from './ProductLink';
import Media from '../media/MediaContainer';
import Comments from '../comment/CommentsContainer';

const Wish = props => (
  <div className="review">
    <div className="review-profile">
      <div className="review-left">
        <SmallPhoto photo_url={props.photo_url} />
      </div>
      <div className="review-right">
        <span className="review-title"><Username facebook_id={props.facebook_id} first_name={props.first_name} last_name={props.last_name} /> added an wish item.</span>
        <ProductLink upc={props.upc} name={props.name} />
        <Media postId={props.postId} />
      </div>
    </div>
    <div className="wish-comment">
      <Comments postId={props.postId} />
    </div>
  </div>
);

Wish.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  Product_upc: PropTypes.number.isRequired,
  likes_cache: PropTypes.number.isRequired
};

export default Wish;
