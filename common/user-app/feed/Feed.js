import React from 'react';
import AddPostContainer from './../../shared/add-post/AddPostContainer';

import Posts from '../../shared/post/PostContainer';
import Recommendations from '../user-rec/RecommendationsContainer';

const Feed = () => (
  <div className="feed-view">
    <AddPostContainer />
    <Recommendations />
    <Posts type="date" />
  </div>
);

export default Feed;
