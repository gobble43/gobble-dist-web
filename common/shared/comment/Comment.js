import React, { PropTypes } from 'react';

import TimeAgo from 'react-timeago';
import Username from '../general/Username';
import Content from './Content';
import SmallPhoto from '../general/SmallPhoto';

const Comment = props => (
  <div className="comment">
    <div className="comment-left">
      <SmallPhoto size={40} photo_url={props.photo_url} />
    </div>
    <div className="comment-right">
      <div className="comment-username-row">
        <Username className="comments-username" facebook_id={props.facebook_id} first_name={props.first_name} last_name={props.last_name} />
        <Content className="comment-content" comment={props.comment} />
      </div>
      <TimeAgo date={props.Post_created_at} />
    </div>
  </div>
);

Comment.propTypes = {
  facebook_id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  display_name: PropTypes.string,
  photo_url: PropTypes.string,
  comment: PropTypes.string,
  Post_created_at: PropTypes.string
};

export default Comment;
