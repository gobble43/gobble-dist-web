import { connect } from 'react-redux';

import AddComment from './AddComment';
import { pushComment } from './commentsAction';

const mapStateToProps = state => ({
  facebookId: state.post.facebookId,
  first_name: state.post.firstName,
  last_name: state.post.lastName,
  photoUrl: state.post.photoUrl
});

const mapDispatchToProps = dispatch => ({
  pushComment: (userId, parentId, comment, firstName, lastName, photoUrl) => dispatch(pushComment(userId, parentId, comment, firstName, lastName, photoUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
