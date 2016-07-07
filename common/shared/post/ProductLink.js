import React, { PropTypes } from 'react';

const ProductLink = props => (
  <div className="product-link">
    <a href={`/food/${props.upc}`}>{props.name}</a>
  </div>
);

ProductLink.propTypes = {
  upc: PropTypes.number,
  name: PropTypes.string
};

export default ProductLink;
