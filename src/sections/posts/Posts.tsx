/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Wrapper, PostsContent } from '../../components';
import img from '../../assets/images';

import './Posts.scss';

const Posts = () => (
  <div className="posts">
    <Wrapper>
      <div className="posts__container">
        <h2 className="posts__title">Trying is Believing</h2>
        <h3 className="posts__subtitle">
          See what people are saying about our unique and effective formulas.
        </h3>
        <div className="posts__qoutes--bg">
          <img src={img.postsQoutes} alt="Qoutes" className="posts__qoutes" />
        </div>
        <PostsContent />
      </div>
    </Wrapper>
  </div>
);

export default Posts;
