import React, { Component, PropTypes } from 'react';

import TextArea from 'react-textarea-autosize';
import SmallPhoto from '../general/SmallPhoto';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    const text = e.target.value;
    this.setState({ text });
  }

  handleSubmit() {
    const comment = this.state.text;
    if (!comment) return;
    this.props.pushComment(this.props.facebookId, this.props.postId, comment, this.props.first_name, this.props.last_name, this.props.photoUrl);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="add-comment">
        <SmallPhoto className="add-comment-photo" photo_url={this.props.photoUrl} size={40} />
        <TextArea minRows={1} maxRows={4} className="add-comment-textarea" onChange={this.handleTextChange} value={this.state.text} />
        <img src="/images/post.png" onClick={this.handleSubmit} className="add-comment-button" alt="post" />
      </div>
    );
  }
}

AddComment.propTypes = {
  postId: PropTypes.number,
  facebookId: PropTypes.number,
  pushComment: PropTypes.func,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  photoUrl: PropTypes.string
};

export default AddComment;
