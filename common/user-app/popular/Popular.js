import React from 'react';

import Posts from '../../shared/post/PostContainer';

const Popular = () => {
  console.log('here')
  return(
  <div className="popular-view">
    <Posts type="friends" />
  </div>);
};

export default Popular;
