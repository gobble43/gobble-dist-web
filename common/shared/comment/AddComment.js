import React, { Component, PropTypes } from 'react';

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
    this.props.pushComment(this.props.facebookId, this.props.postId, comment, this.props.first_name, this.props.last_name);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="add-comment">
        <div className="add-comment-input">
          <input onChange={this.handleTextChange} value={this.state.text} />
          <button onClick={this.handleSubmit} className="pure-button">Post</button>
        </div>
      </div>
    );
  }
}

AddComment.propTypes = {
  postId: PropTypes.number,
  facebookId: PropTypes.number,
  pushComment: PropTypes.func,
  first_name: PropTypes.string,
  last_name: PropTypes.string
};

export default AddComment;
