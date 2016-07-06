import { connect } from 'react-redux';
import FoodProduct from './FoodProduct';
import { getProductAnalysis, getCategoryComparison, showProductDetails, getRandomRecommendations } from './FoodProductActions';

const mapStateToProps = state => ({
  upc: state.foodProduct.upc,
  productAnalysis: state.foodProduct.productAnalysis,
  categoryComparison: state.foodProduct.categoryComparison,
  selectedProduct: state.foodProduct.selectedProduct,
  recommendationsStorage: state.foodProduct.recommendationsStorage,
  facebookId: state.layout.navBarUser.facebookId,
});

const mapDispatchToProps = dispatch => ({
  getProductAnalysis: (productAnalysis) => {
    dispatch(getProductAnalysis(productAnalysis));
  },
  getCategoryComparison: (categoryComparison) => {
    dispatch(getCategoryComparison(categoryComparison));
  },
  showProductDetails: (selectedProduct) => {
    dispatch(showProductDetails(selectedProduct));
  },
  getRandomRecommendations: (recs, category) => {
    dispatch(getRandomRecommendations(recs, category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodProduct);
