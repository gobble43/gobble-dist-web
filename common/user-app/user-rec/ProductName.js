import React, { PropTypes } from 'react';
import { GOBBLE_MEDIA_URL } from '../../../env/client';

const ProductName = props => (
  <div className="product-name">
    <a href={`${GOBBLE_MEDIA_URL}/food/${props.upc}`}>{props.name}</a>
  </div>
);

ProductName.propTypes = {
  upc: PropTypes.number,
  name: PropTypes.string
};

export default ProductName;
