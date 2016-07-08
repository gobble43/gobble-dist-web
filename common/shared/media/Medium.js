import React, { PropTypes, Component } from 'react';

import { GOBBLE_MEDIA_URL } from '../../../env/client';

class Medium extends Component {
  constructor(props) {
    super(props);
    // this.validUrl = this.validUrl.bind(this);
    // this.isImage = this.isImage.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  validUrl() {
    if (this.props.urlCompressed) return this.props.urlCompressed;
    else return this.props.url;
  }
  renderImage(path) {
    return (
      <a href={path}>
        <img src={path} style={{ maxHeight: '100px', maxWidth: '100%' }} alt="content" />
      </a>
    );
  }
  renderVideo(path) {
    return (
      <video style={{ width: '320', height: '240' }} controls>
        <source src={path} />
        Your browser does not support the video tag.
      </video>
    );
  }
  renderContent() {
    const url = this.validUrl();
    if (!url) return null;
    const path = `${GOBBLE_MEDIA_URL}/images/${url}`;
    const isImage = url.match(/jpg$|jpeg$|png$/) !== null;
    if (isImage) {
      return this.renderImage(path);
    }
    return this.renderVideo(path);
  }
  render() {
    return (
      <div className="medium">
        {this.renderContent()}
      </div>
    );
  }
}

Medium.propTypes = {
  url: PropTypes.string,
  urlCompressed: PropTypes.string
};

export default Medium;
