import fetch from 'isomorphic-fetch';
import { GOBBLE_API_URL } from '../../../env/client';

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export function getComments(parentId) {
  return dispatch => {
    fetch(`${GOBBLE_API_URL}/post/parent?parentId=${parentId}`)
      .then(res => res.json())
      .then(comments => {
        dispatch({ type: UPDATE_COMMENT, parentId, comments });
      })
      .catch(err => console.log(`You have an error in getComments: ${err}`));
  };
}

export function pushComment(userId, parentId, comment, firstName, lastName, photoUrl) {
  console.log(arguments);
  const commentObj = {
    User_facebook_id: userId,
    parentId,
    comment,
    likesCache: 0
  };
  return dispatch => {
    console.log('here');
    fetch(`${GOBBLE_API_URL}/post/comment`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentObj)
    })
    .catch(err => console.log(`Error in commentsAction ${err}`));
    commentObj.facebook_id = userId;
    commentObj.first_name = firstName;
    commentObj.last_name = lastName;
    commentObj.photo_url = photoUrl;
    commentObj.Post_created_at = new Date();

    dispatch({ type: 'PUSH_COMMENT', comment: commentObj });
  };
}
