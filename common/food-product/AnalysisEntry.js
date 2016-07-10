import React, { Component, PropTypes } from 'react';
import NutrientEntry from './NutrientEntry';
import RecommendationEntry from './RecommendationEntry';
const categoryComparisonChart = require('./categoryComparisonChart');

class AnalysisEntry extends Component {
  componentWillMount() {
    const { data, getRandomRecommendations, category } = this.props;
    const recs = {};
    Object.keys(data).forEach((nutrients) => {
      // if there is any recommended products, randomly choose one product to show
      if (nutrients !== 'nutrientsWithoutRecommendation') {
        return Object.keys(data[nutrients]).forEach((nutrient) => {
          const recommendations = data[nutrients][nutrient].recommendedProducts;
          if (recommendations) {
            const chosenRecommendation =
            recommendations[Math.floor(Math.random() * recommendations.length)];
            if (!recs[chosenRecommendation.upc]) {
              chosenRecommendation.quality = [nutrients];
              chosenRecommendation.nutrient = [nutrient];
              recs[chosenRecommendation.upc] = chosenRecommendation;
            } else {
              recs[chosenRecommendation.upc].quality.push(nutrients);
              recs[chosenRecommendation.upc].nutrient.push(nutrient);
            }
          }
        });
      }
      return true;
    });
    getRandomRecommendations(recs, category);
  }

  componentDidMount() {
    // mine the data to fit the chart and create a chart
    const chart = this.refs.chart;
    const { data } = this.props;
    const chartData = [];
    let contents = {};
    if (data) {
      Object.keys(data).forEach((nutrients) => {
        Object.keys(data[nutrients]).forEach((nutrient) => {
          Object.keys(data[nutrients][nutrient]).forEach((dataPoint) => {
            contents.nutrient = nutrient;
            contents.quality = nutrients;
            if (dataPoint === 'product' || dataPoint === 'category') {
              contents[dataPoint] =
              data[nutrients][nutrient][dataPoint];
            }
          });
          chartData.push(contents);
          contents = {};
        });
      });
    }
    console.log("CHART", chartData);
    if (chartData.length > 0) {
      categoryComparisonChart.create(chart, chartData);
    }
  }

  render() {
    const {
      facebookId, category, data, showProductDetails, selectedProduct, recommendationsStorage, basicInfo, addedWish, addToWish
    } = this.props;
    return (
      <div>
        <div>
        {!data.BadNutrients ? null :
        Object.keys(data.BadNutrients).map((nutrient) =>
          <NutrientEntry
            key={nutrient}
            category={category}
            nutrient={nutrient}
            data={data.BadNutrients[nutrient]}
            quality="bad"
          />)}
        {!data.GoodNutrients ? null :
        Object.keys(data.GoodNutrients).map((nutrient) =>
          <NutrientEntry
            key={nutrient}
            category={category}
            nutrient={nutrient}
            data={data.GoodNutrients[nutrient]}
            quality="good"
          />)}
        </div>
        <div ref="chart">
        </div>
        <div
          className="rec"
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}
        >
        {Object.keys(recommendationsStorage).length === 0
        || !recommendationsStorage[category] ? null :
        Object.keys(recommendationsStorage[category]).map((product) =>
          <RecommendationEntry
            facebookId={facebookId}
            key={product}
            basicInfo={basicInfo}
            product={recommendationsStorage[category][product]}
            showProductDetails={showProductDetails}
            selectedProduct={selectedProduct}
            addedWish={addedWish}
            addToWish={addToWish}
          />
        )}
        </div>
      </div>
    );
  }
}

AnalysisEntry.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  getRandomRecommendations: PropTypes.func.isRequired,
  recommendationsStorage: PropTypes.object.isRequired,
  basicInfo: PropTypes.object.isRequired,
  addedWish: PropTypes.string.isRequired,
  addToWish: PropTypes.func.isRequired,
};

export default AnalysisEntry;
