import React, { Component, PropTypes } from 'react';

import Recommendation from './Recommendation';

class Recommendations extends Component {
  componentDidMount() {
    this.props.getRecs(this.props.facebookId);
  }

  render() {
    return (
      <div className="recs">
        <p>You may like the following items:</p>
        {this.props.recs ? this.props.recs.map((rec, index) => <Recommendation key={index} {...rec} />) : null}
      </div>

    );
  }
}

Recommendation.propTypes = {
  facebookId: PropTypes.number,
  recs: PropTypes.array,
  getRecs: PropTypes.func
};

export default Recommendations;
