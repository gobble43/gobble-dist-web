import React, { PropTypes } from 'react';

import ProductName from './ProductName';
import ProductImage from './ProductImage';

const Recommendation = props => (
  <div className="recommendation pure-u-1-5">
    <ProductImage image={props.image} />
    <ProductName upc={props.upc} name={props.name} />
  </div>
);

Recommendation.propTypes = {
  upc: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string
};

export default Recommendation;
