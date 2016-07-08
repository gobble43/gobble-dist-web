import React, { Component, PropTypes } from 'react';

import Star from './Star.js';

class Rating extends Component {

  constructor(props) {
    super(props);
    this.renderStars = this.renderStars.bind(this);
  }

  renderStars() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star filled={i < this.props.rating} />);
    }
    return stars;
  }

  render() {
    return (
      <div className="rating">
        {this.renderStars()}
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Rating;
