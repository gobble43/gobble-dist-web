import React, { Component, PropTypes } from 'react';

import Medium from './Medium';

class Media extends Component {
  componentDidMount() {
    this.props.getMedia(this.props.postId);
  }

  render() {
    return (
      <div className="media">
        {this.props.media ? this.props.media.map(medium => <Medium key={medium.id} {...medium} />) : null}
      </div>
    );
  }
}

Media.propTypes = {
  postId: PropTypes.number,
  media: PropTypes.array,
  getMedia: PropTypes.func
};

export default Media;
