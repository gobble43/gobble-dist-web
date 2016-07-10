import React, { PropTypes } from 'react';

const NutrientEntry = (props) => {
  const { category, nutrient, data, quality } = props;
  let analysis;
  if (quality === 'bad' && data.ratio && data.ratio > 1) {
    analysis =
      (<div>
        <strong>High {nutrient} warning: </strong>
        {(data.ratio * 100).toFixed(2)} % more than other {category} products!
      </div>);
  } else if (quality === 'good' && data.ratio && data.ratio < 1) {
    analysis =
      (<div>
        <strong>Low {nutrient} warning: </strong>
        {((1 - data.ratio) * 100).toFixed(2)} % less than other {category} products!
      </div>);
  } else {
    analysis = null;
  }
  return analysis;
};

NutrientEntry.propTypes = {
  category: PropTypes.string.isRequired,
  nutrient: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  quality: PropTypes.string.isRequired,
};

export default NutrientEntry;
