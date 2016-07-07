const fetch = require('isomorphic-fetch');
const GOBBLE_API_URL = require('../../../env/client').GOBBLE_API_URL;


export function getPostsByDate(date) {
  let date2 = date;
  if (date2) {
    date2 = `?date=${date2}`;
  } else {
    date2 = '';
  }
  return dispatch => {
    fetch(`${GOBBLE_API_URL}/post/date${date2}`)
      .then(res => res.json())
      .then(posts => {
        dispatch({ type: 'UPDATE_POSTS', posts });
      })
      .catch(err => console.log(`Error in getPostsByDate: ${err}`));
  };
}

export function getPostsByFriends(userId, date) {
  let date2 = date;
  if (date2) {
    date2 = `&date=${date2}`;
  } else {
    date2 = '';
  }

  return dispatch => {
    fetch(`${GOBBLE_API_URL}/post/friends?facebookId=${userId}${date2}`)
      .then(res => res.json())
      .then(posts => {
        dispatch({ type: 'UPDATE_POSTS', posts });
      })
      .catch(err => console.log(`Error in getPostsByFriends: ${err}`));
  };
}

export function getPostsByRipple(userId) {
  return dispatch => {
    fetch(`${GOBBLE_API_URL}/post/ripple?userId=${userId}`)
      .then(res => res.json())
      .then(posts => dispatch({ type: 'UPDATE_POSTS', posts }))
      .catch(err => console.log(`Error in getPostsByRipple: ${err}`));
  };
}

export function getPostsByUserId(userId) {
  return dispatch => {
    fetch(`${GOBBLE_API_URL}/post/profile?facebookId=${userId}`)
      .then(res => res.json())
      .then(posts => dispatch({ type: 'UPDATE_POSTS', posts }))
      .catch(err => console.log(`Error in getPostsByUserId: ${err}`));
  };
}
