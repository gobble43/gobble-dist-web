import React, { PropTypes, Component } from 'react';
import AnalysisEntry from './AnalysisEntry';
import CategorySelection from './CategorySelection';

class FoodProductAnalysis extends Component {
  constructor(props) {
    super(props);
    this.getCategoryComparison = this.getCategoryComparison.bind(this);
  }

  getCategoryComparison(e) {
    this.props.getCategoryComparison(e.target.value);
  }

  render() {
    const { facebookId, productAnalysis, categoryComparison, showProductDetails,
      selectedProduct, getRandomRecommendations, recommendationsStorage, addedWish, addToWish } = this.props;
    return (
      <div>
        {!categoryComparison ? null :
        (<div>Compare with the category:{' '}
          <select
            style={{ marginBottom: 20 }}
            defaultValue={
              Object.keys(productAnalysis)[0] !== 'basicInfo' ?
              Object.keys(productAnalysis)[0] :
              Object.keys(productAnalysis)[1]
            }
            onChange={this.getCategoryComparison}
          >
          {Object.keys(productAnalysis).map((category, i) =>
            (category === 'basicInfo' ? null :
              <CategorySelection
                key={i}
                category={category}
              />)
          )}
          </select>
          <AnalysisEntry
            facebookId={facebookId}
            key={categoryComparison}
            basicInfo={productAnalysis.basicInfo}
            category={categoryComparison}
            data={productAnalysis[categoryComparison]}
            showProductDetails={showProductDetails}
            selectedProduct={selectedProduct}
            getRandomRecommendations={getRandomRecommendations}
            recommendationsStorage={recommendationsStorage}
            addedWish={addedWish}
            addToWish={addToWish}
          />
        </div>)}
      </div>
    );
  }
}

FoodProductAnalysis.propTypes = {
  upc: PropTypes.string.isRequired,
  productAnalysis: PropTypes.object.isRequired,
  getCategoryComparison: PropTypes.func.isRequired,
  categoryComparison: PropTypes.string.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  getRandomRecommendations: PropTypes.func.isRequired,
  recommendationsStorage: PropTypes.object.isRequired,
  addedWish: PropTypes.string.isRequired,
  addToWish: PropTypes.func.isRequired,
};

export default FoodProductAnalysis;
