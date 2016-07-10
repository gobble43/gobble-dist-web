import React, { Component, PropTypes } from 'react';
const productComparisonChart = require('./productComparisonChart');

class RecommendationEntry extends Component {
  constructor(props) {
    super(props);
    this.showProductDetails = this.showProductDetails.bind(this);
    this.addToWish = this.addToWish.bind(this);
  }

  componentDidUpdate() {
    // mine the data to fit the chart and create a chart
    const chart = this.refs.productComparisonChart;
    const { product, basicInfo } = this.props;
    const chartData = [];
    let contents = {};
    Object.keys(product).forEach((key) => {
      if (key !== 'upc' && key !== 'image' && key !== 'brand' && key !== 'name'
        && key !== 'categories' && key !== 'tags' && key !== 'ingredients'
        && product[key] !== null && key !== 'nutrient'
        && key !== 'quality' && basicInfo[key]) {
        contents.name = key;
        contents[basicInfo.name] = basicInfo[key];
        contents[product.name] = product[key];
        chartData.push(contents);
      }
      contents = {};
    });
    productComparisonChart.create(chart, chartData);
  }

  showProductDetails(e) {
    e.preventDefault();
    this.props.showProductDetails(this.props.product.upc);
  }

  addToWish(e) {
    e.preventDefault();
    if (this.props.facebookId === '') {
      console.log('Not signed in ', this.props.facebookId);
    } else {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      fetch('http://localhost:4569/wish', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ upc: this.props.product.upc, facebookId: this.props.facebookId }),
        headers,
      })
      .then((data) => {
        console.log(data);
        this.props.addToWish(this.props.product.name);
      })
      .catch((err) => console.log(err));
    }
  }

  render() {
    const { product, selectedProduct, addedWish, facebookId } = this.props;
    let productIntro;
    if (product.quality.length === 1) {
      if (product.quality[0] === 'BadNutrients') {
        productIntro =
        (<div onClick={this.showProductDetails}>
          Click to see a lower {product.nutrient} product details!
        </div>);
      } else {
        productIntro =
        (<div onClick={this.showProductDetails}>
          Click to see a higher {product.nutrient} product details!
        </div>);
      }
    } else {
      productIntro =
      (<div onClick={this.showProductDetails}>
        Click to see the recommended product details!
      </div>);
    }
    const productPage = `/food/${product.upc}`;
    return (
      <div className="rec" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
        {productIntro}
        <img
          onClick={this.showProductDetails}
          role="presentation"
          src={product.image}
          width="200"
          height="200"
          style={{ marginTop: 30, marginBottom: 30, borderRadius: '20px' }}
        />
        {facebookId === '' ? null : <button onClick={this.addToWish}>Add to wish list</button>}
        {addedWish === '' ? null : <div>{addedWish} is now in your wish list!</div>}
        {selectedProduct !== product.upc ? null :
        (<div>
          <div>
            <p>Name: {product.name} <br />
            Brand: {product.brand}<br /></p>
            <a href={productPage}>Go to the product page</a>
          </div>
          <div ref="productComparisonChart">
          </div>
        </div>)}
      </div>
    );
  }
}

RecommendationEntry.propTypes = {
  product: PropTypes.object.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  basicInfo: PropTypes.object.isRequired,
  addedWish: PropTypes.string.isRequired,
  addToWish: PropTypes.func.isRequired,
};

export default RecommendationEntry;
