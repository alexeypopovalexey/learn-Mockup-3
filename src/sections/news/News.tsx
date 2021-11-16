import React from 'react';
import { Wrapper, NewsAcardion } from '../../components';
import img from '../../assets/images';

import './News.scss';

const News = () => (
  <div className="news">
    <Wrapper>
      <div className="news__container">
        <h2 className="news__title">What’s new at Grid Dynamics</h2>
        <div className="news__content">
          <div className="news__content--image">
            <img
              src={img.newsPhotos}
              alt="Collection photos"
              className="news__content--img"
            />
          </div>
          <div className="news__content--acardion">
            <NewsAcardion />
          </div>
        </div>
      </div>
    </Wrapper>
  </div>
);

export default News;
